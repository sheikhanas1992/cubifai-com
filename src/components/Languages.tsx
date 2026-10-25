import { useI18n } from "@/i18n/context";
import { Reveal } from "./Reveal";

export function Languages() {
  const t = useI18n();
  return (
    <section className="section-y px-4">
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <h2 className="h2-section" style={{ color: "var(--fg)" }}>
            {t.languages.h2}
          </h2>
          <p className="mt-4 font-medium" style={{ color: "var(--fg2)" }}>
            {t.languages.lede}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {t.languages.list.map((l) => (
              <span key={l} className="glass-soft glass-hover rounded-full px-4 py-2 text-sm font-semibold" style={{ color: "var(--fg)" }}>
                {l}
              </span>
            ))}
            <span className="rounded-full px-4 py-2 text-sm font-medium" style={{ color: "var(--fg3)" }}>
              {t.languages.more}
            </span>
          </div>
          <p className="mt-6 text-sm font-medium" style={{ color: "var(--fg3)" }}>
            {t.languages.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
