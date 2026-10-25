import { Languages as LanguagesIcon, MapPinned, UserCheck, Gift } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { Reveal } from "./Reveal";

const ICONS = [LanguagesIcon, MapPinned, UserCheck, Gift];

export function WhyUs() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <div className="eyebrow text-center mb-3">{t.why.eyebrow}</div>
          <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
            {t.why.h2}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.why.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={it.title} delay={i * 80}>
                <div className="glass glass-hover p-6 h-full flex gap-4">
                  <span
                    className="flex-shrink-0 inline-flex w-11 h-11 rounded-xl items-center justify-center"
                    style={{ background: "var(--chip)" }}
                  >
                    <Icon size={20} color="var(--accent-text)" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="font-extrabold" style={{ color: "var(--fg)" }}>
                      {it.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium" style={{ color: "var(--fg2)" }}>
                      {it.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
