import { useState } from "react";
import { useI18n } from "@/i18n/context";
import { VideoPlayer } from "./VideoPlayer";

export function Industries() {
  const t = useI18n();
  const [active, setActive] = useState(0);
  const item = t.industries.items[active];

  return (
    <section id="industries" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="eyebrow text-center mb-3">{t.industries.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.industries.h2}
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto" style={{ color: "var(--fg2)" }}>
          {t.industries.lede}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {t.industries.items.map((it, i) => (
            <button
              key={it.tab}
              onClick={() => setActive(i)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              style={
                i === active
                  ? { background: "var(--btn)", color: "var(--on-btn)" }
                  : { background: "var(--glass-soft)", color: "var(--fg2)", border: "1px solid var(--glass-line)" }
              }
            >
              {it.tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-extrabold text-xl" style={{ color: "var(--fg)" }}>
              {item.h3}
            </h3>
            <div className="mt-6 space-y-4">
              {item.pairs.map((p) => (
                <div key={p.problem} className="glass-soft rounded-2xl p-4">
                  <p className="text-sm" style={{ color: "var(--fg3)" }}>
                    {p.problem}
                  </p>
                  <p className="mt-2 text-sm font-semibold" style={{ color: "var(--accent-text)" }}>
                    {p.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {item.video ? (
            <VideoPlayer src={item.video.src} poster={item.video.poster} label={item.video.label} />
          ) : (
            <div className="glass p-5">
              <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "var(--fg2)" }}>
                <span className="size-2 rounded-full" style={{ background: "#2fbf71" }} />
                {t.industries.agentName} · {t.industries.online}
              </div>
              <div className="space-y-3">
                {item.chat.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "agent" ? "justify-start" : "justify-end"}`}>
                    <div
                      className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm"
                      style={
                        m.from === "agent"
                          ? { background: "var(--glass-soft)", color: "var(--fg)", border: "1px solid var(--glass-line)" }
                          : { background: "var(--btn)", color: "var(--on-btn)" }
                      }
                    >
                      {m.kind === "voice" ? (
                        <div>
                          <div className="text-sm font-semibold mb-0.5" style={{ opacity: 0.85 }}>
                            {t.industries.voiceNote} · {m.duration}
                          </div>
                          <div>{m.transcript}</div>
                        </div>
                      ) : (
                        m.text
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
