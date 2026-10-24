// Minimal static file server for the built SPA. Lets this project run on
// Hostinger's existing "Web app" (Node.js) hosting slot with no site-type
// change — it just serves dist/ instead of running a framework server.
// Implements SPA fallback itself (any unknown path serves index.html),
// so client-side routing works without needing an Apache rewrite rule.
const http = require("http");
const fs = require("fs");
const path = require("path");

const DIST = path.join(__dirname, "dist");
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
};

// Video playback needs Range support (seeking, scrubbing, and some
// browsers refuse to play a <video> at all without it), so every file is
// served range-aware rather than special-casing video.
function serveFile(filePath, req, res) {
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || "application/octet-stream";
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    const range = req.headers.range;
    if (range) {
      const match = /bytes=(\d*)-(\d*)/.exec(range);
      const start = match[1] ? parseInt(match[1], 10) : 0;
      const end = match[2] ? parseInt(match[2], 10) : stats.size - 1;
      res.writeHead(206, {
        "Content-Type": contentType,
        "Content-Range": `bytes ${start}-${end}/${stats.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    } else {
      res.writeHead(200, { "Content-Type": contentType, "Content-Length": stats.size, "Accept-Ranges": "bytes" });
      fs.createReadStream(filePath).pipe(res);
    }
  });
}

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const requested = path.normalize(path.join(DIST, urlPath));
    if (!requested.startsWith(DIST)) {
      res.writeHead(403);
      res.end();
      return;
    }
    fs.stat(requested, (err, stats) => {
      if (!err && stats.isFile()) {
        serveFile(requested, req, res);
      } else {
        serveFile(path.join(DIST, "index.html"), req, res);
      }
    });
  })
  .listen(PORT, () => {
    console.log(`Serving dist/ on port ${PORT}`);
  });
