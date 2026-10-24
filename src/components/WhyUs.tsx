import { useI18n } from "@/i18n/context";

export function WhyUs() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[1000px]">
        <div className="eyebrow text-center mb-3">{t.why.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.why.h2}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.why.items.map((it) => (
            <div key={it.title} className="glass p-6">
              <h3 className="font-extrabold" style={{ color: "var(--fg)" }}>
                {it.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: "var(--fg2)" }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
