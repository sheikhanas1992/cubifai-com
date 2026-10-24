import { useState } from "react";
import { useI18n } from "@/i18n/context";
import { supabase } from "@/lib/supabase";
import { normalizeWhatsapp } from "@/lib/phone";
import type { PlanId } from "@/lib/pricing";

const INDUSTRY_KEYS = ["real_estate", "healthcare", "automotive", "hospitality", "other"] as const;
const CITY_KEYS = ["riyadh", "jeddah", "makkah", "madinah", "dammam_khobar", "other_saudi", "other_gcc"] as const;
const SOLUTION_KEYS = ["voice", "whatsapp", "both", "unsure"] as const;
const LANG_KEYS = ["arabic", "english", "urdu", "indonesian", "bengali", "turkish", "other"] as const;
const BUDGET_KEYS = ["under_1000", "r_1000_3000", "r_3000_8000", "over_8000"] as const;
const DECISION_KEYS = ["yes", "influence", "no"] as const;
const NEED_KEYS = ["active", "exploring"] as const;

export function Contact({ plan }: { plan?: PlanId }) {
  const t = useI18n();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [solution, setSolution] = useState<string>("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [decisionMaker, setDecisionMaker] = useState<string>("");
  const [activeNeed, setActiveNeed] = useState<string>("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function toggleLang(key: string) {
    setLanguages((prev) => (prev.includes(key) ? prev.filter((l) => l !== key) : [...prev, key]));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (website) {
      // Honeypot tripped — pretend success, submit nothing.
      setStatus("sent");
      return;
    }
    const normalizedWhatsapp = normalizeWhatsapp(whatsapp);
    if (!normalizedWhatsapp || !company || !industry || !consent) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const { error } = await supabase.from("leads").insert({
      name,
      company,
      industry,
      city: city || null,
      whatsapp: normalizedWhatsapp,
      email: email || null,
      solution: solution ? [solution] : [],
      languages,
      message: [
        message,
        budget && `Budget: ${budget}`,
        decisionMaker && `Decision maker: ${decisionMaker}`,
        activeNeed && `Need: ${activeNeed}`,
      ]
        .filter(Boolean)
        .join(" | "),
      plan_interest: plan ?? null,
      consent: true,
    });
    if (error) {
      console.error("lead insert failed", error);
      setStatus("error");
      return;
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <section id="contact" className="section-y px-4 scroll-mt-24">
        <div className="mx-auto max-w-[600px] glass p-8 text-center">
          <p className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
            {t.contact.success}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-y px-4 scroll-mt-24">
      <div className="mx-auto max-w-[700px]">
        <div className="eyebrow text-center mb-3">{t.contact.eyebrow}</div>
        <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
          {t.contact.h2}
        </h2>
        <p className="mt-4 text-center" style={{ color: "var(--fg2)" }}>
          {t.contact.lede}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 glass p-6 space-y-4">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <Field label={t.contact.fields.name}>
            <input className="field" required value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label={t.contact.fields.company}>
            <input className="field" required value={company} onChange={(e) => setCompany(e.target.value)} />
          </Field>
          <Field label={t.contact.fields.industry}>
            <select className="field" required value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {INDUSTRY_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.industries[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.city}>
            <select className="field" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {CITY_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.cities[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.whatsapp}>
            <input className="field" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
          </Field>
          <Field label={t.contact.fields.email}>
            <input type="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <Field label={t.contact.fields.solution}>
            <select className="field" value={solution} onChange={(e) => setSolution(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {SOLUTION_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.solutions[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.languages}>
            <div className="flex flex-wrap gap-2">
              {LANG_KEYS.map((k) => (
                <button
                  type="button"
                  key={k}
                  onClick={() => toggleLang(k)}
                  className="rounded-full px-3 py-1.5 text-sm"
                  style={
                    languages.includes(k)
                      ? { background: "var(--btn)", color: "var(--on-btn)" }
                      : { background: "var(--glass-soft)", color: "var(--fg2)", border: "1px solid var(--glass-line)" }
                  }
                >
                  {t.contact.langs[k]}
                </button>
              ))}
            </div>
          </Field>
          <Field label={t.contact.fields.budget}>
            <select className="field" value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {BUDGET_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.budgets[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.decisionMaker}>
            <select className="field" value={decisionMaker} onChange={(e) => setDecisionMaker(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {DECISION_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.decisionMakerOptions[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.activeNeed}>
            <select className="field" value={activeNeed} onChange={(e) => setActiveNeed(e.target.value)}>
              <option value="">{t.contact.fields.select}</option>
              {NEED_KEYS.map((k) => (
                <option key={k} value={k}>
                  {t.contact.activeNeedOptions[k]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t.contact.fields.message}>
            <textarea className="field" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
          </Field>

          <label className="flex items-start gap-2 text-sm" style={{ color: "var(--fg3)" }}>
            <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
            <span>
              {t.contact.consentPre}
              <a href="/privacy" style={{ color: "var(--accent-text)" }}>
                {t.contact.consentLink}
              </a>
              {t.contact.consentPost}
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm" style={{ color: "#ff8080" }}>
              {t.contact.error}
            </p>
          )}

          <button type="submit" disabled={status === "sending"} className="w-full rounded-full py-4 font-bold btn-primary disabled:opacity-60">
            {status === "sending" ? t.contact.sending : t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--fg3)" }}>
        {label}
      </div>
      {children}
    </label>
  );
}
