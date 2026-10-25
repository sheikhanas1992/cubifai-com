import { useRef, useState } from "react";

/** Click-to-play video: shows a poster image with a play button until
 * clicked. The <video> element stays mounted from the start (hidden behind
 * the poster) so the click handler can call play() on it directly and
 * synchronously — relying on the `autoplay` attribute after a React
 * re-render loses the user-gesture association and iOS Safari / many
 * Android browsers silently refuse to start playback. preload="none"
 * still means no video bytes are fetched until the user actually clicks. */
export function VideoPlayer({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    const result = video.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {
        // Playback failed (e.g. blocked); keep the native controls visible
        // so the user can retry with the browser's own play button.
      });
    }
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden aspect-video ${className ?? ""}`} style={{ background: "var(--glass)" }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
      />
      {!playing && (
        <>
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(12,15,30,0.35)" }} />
          <button
            type="button"
            onClick={handlePlay}
            aria-label={label}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)" }}
            >
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "#fff" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="var(--btn)">
                  <path d="M4 2.5v13l11-6.5z" />
                </svg>
              </span>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
