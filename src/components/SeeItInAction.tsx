import { useI18n } from "@/i18n/context";
import { VideoPlayer } from "./VideoPlayer";
import { Reveal } from "./Reveal";

export function SeeItInAction() {
  const t = useI18n();
  return (
    <section className="section-y px-4" style={{ background: "var(--glass-soft)" }}>
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="eyebrow text-center mb-3">{t.demos.eyebrow}</div>
          <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
            {t.demos.h2}
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto font-medium" style={{ color: "var(--fg2)" }}>
            {t.demos.lede}
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.demos.items.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <VideoPlayer src={d.src} poster={d.poster} label={d.label} />
              <h3 className="mt-4 font-extrabold text-lg" style={{ color: "var(--fg)" }}>
                {d.title}
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: "var(--fg2)" }}>
                {d.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
