import { useState } from "react";

/** Click-to-play video: shows a poster image with a play button until
 * clicked, so the video file itself isn't fetched on page load. */
export function VideoPlayer({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`relative rounded-2xl overflow-hidden aspect-video ${className ?? ""}`} style={{ background: "var(--glass)" }}>
      {playing ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={src} poster={poster} controls autoPlay playsInline preload="none" />
      ) : (
        <>
          <img src={poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(12,15,30,0.35)" }} />
          <button
            type="button"
            onClick={() => setPlaying(true)}
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
