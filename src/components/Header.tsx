import { Link } from "react-router-dom";
import { useI18n, type Lang } from "@/i18n/context";
import { Logo } from "./Logo";

export function Header({ lang }: { lang: Lang }) {
  const t = useI18n();
  const other = lang === "ar" ? "/en" : "/ar";
  const otherLabel = lang === "ar" ? "English" : "العربية";
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto max-w-[1200px] glass flex items-center justify-between px-5 py-3">
        <Link to={`/${lang}`} aria-label="CUBIFAI">
          <Logo variant="horizontal" className="h-7 w-auto" style={{ color: "var(--fg)" }} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--fg2)" }}>
          <a href="#solutions">{t.nav.solutions}</a>
          <a href="#industries">{t.nav.industries}</a>
          <a href="#pricing">{t.nav.pricing}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#contact">{t.nav.contact}</a>
          <Link to={`/${lang}/book`}>{t.nav.book}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to={other} className="text-sm" style={{ color: "var(--fg2)" }} aria-label={t.nav.langLabel}>
            {otherLabel}
          </Link>
          <a href="#contact" className="btn-primary rounded-full px-4 py-2 text-sm font-semibold">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
