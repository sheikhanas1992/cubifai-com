import { Headset, MessageCircle, FileText, Zap, RotateCcw, Database } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { Reveal } from "./Reveal";

const ICONS = [Headset, MessageCircle, FileText, Zap, RotateCcw, Database];

export function Solutions() {
  const t = useI18n();
  return (
    <section id="solutions" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="eyebrow text-center mb-3">{t.solutions.eyebrow}</div>
          <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
            {t.solutions.h2}
          </h2>
          <p className="mt-4 text-center max-w-2xl mx-auto font-medium" style={{ color: "var(--fg2)" }}>
            {t.solutions.lede}
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.agents.map((a, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={a.name} delay={i * 80}>
                <div className="glass glass-hover p-6 h-full">
                  <span
                    className="inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-4"
                    style={{ background: "linear-gradient(135deg, var(--grad-a), var(--grad-b))" }}
                  >
                    <Icon size={22} color="#0c0f1e" strokeWidth={2.25} />
                  </span>
                  <h3 className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
                    {a.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium" style={{ color: "var(--fg2)" }}>
                    {a.text}
                  </p>
                  <p className="mt-4 pt-4 text-sm" style={{ color: "var(--fg2)", borderTop: "1px solid var(--hair)" }}>
                    <strong style={{ color: "var(--fg)" }}>What it replaces:</strong> {a.replaces}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
