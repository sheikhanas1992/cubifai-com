import { useState } from "react";
import { useI18n } from "@/i18n/context";
import { PLANS, priceFor, formatSar, type Billing, type PlanId } from "@/lib/pricing";

export function Pricing({ onSelectPlan }: { onSelectPlan: (p: PlanId) => void }) {
  const t = useI18n();
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="eyebrow text-center mb-3">{t.pricing.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.pricing.h2}
        </h2>
        <p className="mt-4 text-center max-w-2xl mx-auto" style={{ color: "var(--fg2)" }}>
          {t.pricing.lede}
        </p>

        <div className="mt-8 flex justify-center">
          <div className="glass-soft rounded-full p-1 flex gap-1">
            <button
              onClick={() => setBilling("monthly")}
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={billing === "monthly" ? { background: "var(--btn)", color: "var(--on-btn)" } : { color: "var(--fg2)" }}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setBilling("annual")}
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={billing === "annual" ? { background: "var(--btn)", color: "var(--on-btn)" } : { color: "var(--fg2)" }}
            >
              {t.pricing.annual} · {t.pricing.annualBadge}
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const key = plan.id;
            const dict = t.pricing.plans[key];
            return (
              <div
                key={key}
                className="glass p-6 flex flex-col"
                style={plan.popular ? { border: "1.5px solid var(--accent-text)" } : undefined}
              >
                {plan.popular && (
                  <div className="eyebrow mb-2" style={{ color: "var(--accent-text)" }}>
                    {t.pricing.popular}
                  </div>
                )}
                <h3 className="font-extrabold text-xl" style={{ color: "var(--fg)" }}>
                  {dict.name}
                </h3>
                <p className="mt-1 text-sm" style={{ color: "var(--fg3)" }}>
                  {dict.desc}
                </p>
                <div className="mt-5">
                  <span className="text-3xl font-extrabold" style={{ color: "var(--fg)" }}>
                    {plan.from ? `${t.pricing.from} ` : ""}
                    {formatSar(priceFor(plan, billing))}
                  </span>
                  <span className="text-sm" style={{ color: "var(--fg3)" }}>
                    {" "}
                    {t.pricing.perMonth} {t.pricing.exclVat}
                  </span>
                </div>
                <p className="mt-1 text-xs" style={{ color: "var(--fg3)" }}>
                  {dict.setup}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {dict.features.map((f) => (
                    <li key={f} className="text-sm flex gap-2" style={{ color: "var(--fg2)" }}>
                      <span style={{ color: "var(--accent-text)" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => onSelectPlan(key)}
                  className="mt-6 rounded-full py-3 text-center font-bold btn-primary"
                >
                  {dict.button}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="eyebrow mb-3">{t.pricing.addonsTitle}</div>
          <p className="text-sm" style={{ color: "var(--fg3)" }}>
            {t.pricing.addons.join(" · ")}
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-sm font-semibold" style={{ color: "var(--fg2)" }}>
            {t.pricing.compare}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xs" style={{ color: "var(--fg3)" }}>
            {t.pricing.fine}
          </p>
        </div>
      </div>
    </section>
  );
}
