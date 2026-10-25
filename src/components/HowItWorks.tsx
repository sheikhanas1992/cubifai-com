import { useI18n } from "@/i18n/context";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  const t = useI18n();
  return (
    <section id="how" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
            {t.how.h2}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.how.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass glass-hover p-6 text-center h-full">
                <span
                  className="mx-auto mb-4 inline-flex w-11 h-11 rounded-full items-center justify-center font-extrabold text-lg"
                  style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))", color: "#0c0f1e" }}
                >
                  {i + 1}
                </span>
                <h3 className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-medium" style={{ color: "var(--fg2)" }}>
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
