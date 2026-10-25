import { useI18n } from "@/i18n/context";
import { Reveal } from "./Reveal";

export function Problem() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="h2-section text-center max-w-[720px] mx-auto" style={{ color: "var(--fg)" }}>
            {t.problem.h2}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.problem.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="glass glass-hover p-5 text-center h-full">
                <div style={{ fontSize: 30, fontWeight: 900, color: "var(--fg)", letterSpacing: "-0.02em" }}>{s.stat}</div>
                <p className="mt-2 text-sm font-semibold" style={{ color: "var(--fg2)" }}>
                  {s.label}
                </p>
                <p className="mt-2 text-sm font-medium" style={{ color: "var(--fg3)" }}>
                  {s.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-xl font-extrabold" style={{ color: "var(--accent-text)" }}>
            {t.problem.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
