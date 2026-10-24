import { useI18n } from "@/i18n/context";

export function Solutions() {
  const t = useI18n();
  return (
    <section id="solutions" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="eyebrow text-center mb-3">{t.solutions.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.solutions.h2}
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto" style={{ color: "var(--fg2)" }}>
          {t.solutions.lede}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.agents.map((a) => (
            <div key={a.name} className="glass p-6">
              <h3 className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
                {a.name}
              </h3>
              <p className="mt-3 text-sm" style={{ color: "var(--fg2)" }}>
                {a.text}
              </p>
              <p className="mt-4 pt-4 text-xs italic" style={{ color: "var(--fg3)", borderTop: "1px solid var(--hair)" }}>
                What it replaces: {a.replaces}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
