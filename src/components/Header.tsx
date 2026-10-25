import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useI18n, type Lang } from "@/i18n/context";
import { Logo } from "./Logo";

export function Header({ lang }: { lang: Lang }) {
  const t = useI18n();
  const [open, setOpen] = useState(false);
  const other = lang === "ar" ? "/en" : "/ar";
  const otherLabel = lang === "ar" ? "English" : "العربية";
  const links = [
    { href: "#solutions", label: t.nav.solutions },
    { href: "#industries", label: t.nav.industries },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#how", label: t.nav.how },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto max-w-[1200px] glass px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to={`/${lang}`} aria-label="CUBIFAI" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <Logo variant="horizontal" className="h-7 w-auto" style={{ color: "var(--fg)" }} />
          </Link>
          <nav className="hidden lg:flex items-center gap-5 text-sm whitespace-nowrap" style={{ color: "var(--fg2)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <Link to={`/${lang}/book`}>{t.nav.book}</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to={other} className="text-sm" style={{ color: "var(--fg2)" }} aria-label={t.nav.langLabel}>
              {otherLabel}
            </Link>
            <a href="#contact" className="btn-primary rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap">
              {t.nav.cta}
            </a>
          </div>
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <Link to={other} className="text-sm font-semibold" style={{ color: "var(--fg2)" }} aria-label={t.nav.langLabel}>
              {otherLabel}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-soft"
              style={{ color: "var(--fg)" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            className="lg:hidden mt-4 pt-4 flex flex-col gap-1 text-sm font-semibold"
            style={{ borderTop: "1px solid var(--hair)", color: "var(--fg2)" }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2.5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <Link to={`/${lang}/book`} className="py-2.5" onClick={() => setOpen(false)}>
              {t.nav.book}
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary rounded-full px-4 py-3 text-sm font-bold text-center mt-3"
            >
              {t.nav.cta}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
