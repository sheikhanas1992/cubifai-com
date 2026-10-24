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
};

function serveFile(filePath, res) {
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
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
        serveFile(requested, res);
      } else {
        serveFile(path.join(DIST, "index.html"), res);
      }
    });
  })
  .listen(PORT, () => {
    console.log(`Serving dist/ on port ${PORT}`);
  });
