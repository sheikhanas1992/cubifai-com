import { useI18n } from "@/i18n/context";
import { VideoPlayer } from "./VideoPlayer";

export function Hero() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-start">
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 mb-6"
            style={{
              background: "var(--chip)",
              border: "1px solid var(--glass-line)",
              boxShadow: "0 8px 24px -10px rgba(111,147,216,0.45), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </div>
          <h1 className="h2-section" style={{ fontSize: "clamp(2.1rem,4.4vw,3.2rem)", color: "var(--fg)" }}>
            {t.hero.h1} <span className="text-gradient">{t.hero.h1Grad}</span>
          </h1>
          <p className="mt-6 mx-auto lg:mx-0 max-w-xl text-lg font-medium" style={{ color: "var(--fg2)" }}>
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn-primary rounded-full px-8 py-4 font-bold">
              {t.hero.primary}
            </a>
            <a href="#solutions" className="glass-soft rounded-full px-8 py-4 font-semibold" style={{ color: "var(--fg)" }}>
              {t.hero.secondary}
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "var(--fg3)" }}>
            {t.hero.micro}
          </p>
        </div>
        <VideoPlayer src="/videos/cubifai_intro.mp4" poster="/videos/cubifai_intro_poster.jpg" label="Play the CUBIFAI intro video" />
      </div>
    </section>
  );
}
