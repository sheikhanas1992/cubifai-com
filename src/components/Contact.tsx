import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { normalizeWhatsapp } from "@/lib/phone";
import { WEB3FORMS_ACCESS_KEY, SUPPORT_EMAIL } from "@/lib/constants";
import type { PlanId } from "@/lib/pricing";
import { Reveal } from "./Reveal";

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
    const combinedMessage = [
      message,
      budget && `Budget: ${budget}`,
      decisionMaker && `Decision maker: ${decisionMaker}`,
      activeNeed && `Need: ${activeNeed}`,
    ]
      .filter(Boolean)
      .join(" | ");

    // Web3Forms is the primary delivery path: it only needs the hardcoded
    // access key below, so it works even if Supabase was never configured
    // in this deployment. Supabase is best-effort on top of that.
    let web3formsOk = false;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New CUBIFAI lead: ${company}`,
          from_name: "CUBIFAI website",
          name,
          company,
          industry,
          city,
          whatsapp: normalizedWhatsapp,
          email,
          message: combinedMessage,
        }),
      });
      const data = await res.json().catch(() => null);
      web3formsOk = res.ok && data?.success !== false;
    } catch (err) {
      console.error("web3forms submit failed", err);
    }

    let supabaseOk = false;
    if (supabaseConfigured) {
      const { error } = await supabase.from("leads").insert({
        name,
        company,
        industry,
        city: city || null,
        whatsapp: normalizedWhatsapp,
        email: email || null,
        solution: solution ? [solution] : [],
        languages,
        message: combinedMessage,
        plan_interest: plan ?? null,
        consent: true,
      });
      if (error) console.error("lead insert failed", error);
      supabaseOk = !error;
    }

    setStatus(web3formsOk || supabaseOk ? "sent" : "error");
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
      <div className="mx-auto max-w-[800px]">
        <Reveal>
          <h2 className="h2-section text-center" style={{ color: "var(--fg)" }}>
            {t.contact.h2}
          </h2>
          <p className="mt-4 text-center font-medium" style={{ color: "var(--fg2)" }}>
            {t.contact.lede}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 glass p-8"
            style={{ boxShadow: "0 40px 90px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(143,176,240,0.08), inset 0 1px 0 var(--inset-hi)" }}
          >
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={t.contact.fields.name}>
                <input className="field" required value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field label={t.contact.fields.company}>
                <input className="field" required value={company} onChange={(e) => setCompany(e.target.value)} />
              </Field>
              <Field label={t.contact.fields.industry}>
                <Select value={industry} onChange={setIndustry} required>
                  <option value="">{t.contact.fields.select}</option>
                  {INDUSTRY_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.industries[k]}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={t.contact.fields.city}>
                <Select value={city} onChange={setCity}>
                  <option value="">{t.contact.fields.select}</option>
                  {CITY_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.cities[k]}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={t.contact.fields.whatsapp}>
                <input className="field" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              </Field>
              <Field label={t.contact.fields.email}>
                <input type="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label={t.contact.fields.solution}>
                <Select value={solution} onChange={setSolution}>
                  <option value="">{t.contact.fields.select}</option>
                  {SOLUTION_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.solutions[k]}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={t.contact.fields.budget}>
                <Select value={budget} onChange={setBudget}>
                  <option value="">{t.contact.fields.select}</option>
                  {BUDGET_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.budgets[k]}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={t.contact.fields.decisionMaker}>
                <Select value={decisionMaker} onChange={setDecisionMaker}>
                  <option value="">{t.contact.fields.select}</option>
                  {DECISION_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.decisionMakerOptions[k]}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={t.contact.fields.activeNeed}>
                <Select value={activeNeed} onChange={setActiveNeed}>
                  <option value="">{t.contact.fields.select}</option>
                  {NEED_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {t.contact.activeNeedOptions[k]}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label={t.contact.fields.languages}>
                <div className="flex flex-wrap gap-2">
                  {LANG_KEYS.map((k) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => toggleLang(k)}
                      className="rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all"
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
            </div>

            <div className="mt-4">
              <Field label={t.contact.fields.message}>
                <textarea className="field" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
              </Field>
            </div>

            <label className="mt-5 flex items-start gap-2 text-sm font-medium" style={{ color: "var(--fg3)" }}>
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
              <div className="mt-4 text-sm font-semibold" style={{ color: "#ff8080" }}>
                <p>{t.contact.error}</p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-2 inline-flex items-center gap-2 underline"
                  style={{ color: "#ff8080" }}
                >
                  <Mail size={15} strokeWidth={2.25} /> Email us
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-full py-4 font-bold btn-primary disabled:opacity-60"
            >
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--fg3)" }}>
        {label}
      </div>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  required,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        className="field appearance-none pe-10"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
      <ChevronDown
        size={18}
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--fg3)", insetInlineEnd: 14 }}
      />
    </div>
  );
}
