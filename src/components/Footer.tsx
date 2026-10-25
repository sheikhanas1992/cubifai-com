import { Mail, Linkedin } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { Logo } from "./Logo";
import { SUPPORT_EMAIL, LINKEDIN_URL } from "@/lib/constants";

export function Footer() {
  const t = useI18n();
  return (
    <footer className="px-4 pb-10 pt-16">
      <div className="mx-auto max-w-[1100px] glass p-8 text-center">
        <Logo variant="mark" className="h-10 w-10 mx-auto" />
        <p className="mt-4 text-sm font-semibold" style={{ color: "var(--fg2)" }}>
          {t.footer.tagline}
        </p>
        <p className="mt-2 text-sm font-medium" style={{ color: "var(--fg3)" }}>
          {t.contact.serving}
        </p>
        <div className="mt-6 flex items-center justify-center gap-5 text-sm font-semibold">
          <a href="/privacy" style={{ color: "var(--fg2)" }}>
            {t.footer.privacy}
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            aria-label={t.footer.emailLabel}
            title={t.footer.emailLabel}
            className="glass-soft inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: "var(--fg2)" }}
          >
            <Mail size={17} strokeWidth={2.25} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.linkedinLabel}
            title={t.footer.linkedinLabel}
            className="glass-soft inline-flex items-center justify-center w-10 h-10 rounded-full"
            style={{ color: "var(--fg2)" }}
          >
            <Linkedin size={17} strokeWidth={2.25} />
          </a>
        </div>
        <p className="mt-6 text-sm font-medium" style={{ color: "var(--fg3)" }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
