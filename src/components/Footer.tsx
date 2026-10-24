import { useI18n } from "@/i18n/context";
import { Logo } from "./Logo";

export function Footer() {
  const t = useI18n();
  return (
    <footer className="px-4 pb-10 pt-16">
      <div className="mx-auto max-w-[1100px] glass p-8 text-center">
        <Logo variant="mark" className="h-10 w-10 mx-auto" />
        <p className="mt-4 text-sm" style={{ color: "var(--fg2)" }}>
          {t.footer.tagline}
        </p>
        <p className="mt-2 text-sm" style={{ color: "var(--fg3)" }}>
          {t.contact.serving}
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm">
          <a href="/privacy" style={{ color: "var(--fg2)" }}>
            {t.footer.privacy}
          </a>
          <a href="mailto:ceo@cubifai.com" style={{ color: "var(--fg2)" }}>
            ceo@cubifai.com
          </a>
        </div>
        <p className="mt-6 text-xs" style={{ color: "var(--fg3)" }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
