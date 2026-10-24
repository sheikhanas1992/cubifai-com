import { useI18n } from "@/i18n/context";

export function HowItWorks() {
  const t = useI18n();
  return (
    <section id="how" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="eyebrow text-center mb-3">{t.how.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.how.h2}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.how.steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="eyebrow mb-2">Step {i + 1}</div>
              <h3 className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
                {s.title}
              </h3>
              <p className="mt-3 text-sm" style={{ color: "var(--fg2)" }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
