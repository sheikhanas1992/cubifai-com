import { useI18n } from "@/i18n/context";

export function Hero() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[900px] text-center">
        <div className="eyebrow mb-5">{t.hero.eyebrow}</div>
        <h1 className="h2-section" style={{ fontSize: "clamp(2.2rem,5.5vw,3.6rem)", color: "var(--fg)" }}>
          {t.hero.h1} <span className="text-gradient">{t.hero.h1Grad}</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg" style={{ color: "var(--fg2)" }}>
          {t.hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
