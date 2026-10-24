import { useState } from "react";
import { useI18n } from "@/i18n/context";

export function FAQ() {
  const t = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[800px]">
        <div className="eyebrow text-center mb-3">{t.faq.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.faq.h2}
        </h2>
        <div className="mt-10 space-y-3">
          {t.faq.items.map((f, i) => (
            <div key={f.q} className="glass-soft rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-start px-5 py-4 font-semibold flex items-center justify-between gap-4"
                style={{ color: "var(--fg)" }}
              >
                {f.q}
                <span style={{ color: "var(--accent-text)" }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm" style={{ color: "var(--fg2)" }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
