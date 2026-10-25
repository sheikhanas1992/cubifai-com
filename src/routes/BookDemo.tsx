import { useEffect } from "react";
import { Link } from "react-router-dom";
import { I18nProvider, type Lang } from "@/i18n/context";
import type { Dict } from "@/i18n/en";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const CAL_URL = "https://cal.com/muhammad-anas-bby51s/30min";

export function BookDemo({ lang, dict }: { lang: Lang; dict: Dict }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${dict.book.h2} | CUBIFAI`;
  }, [lang, dict]);

  return (
    <I18nProvider dict={dict}>
      <div className="page-bg" aria-hidden />
      <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
        <Header lang={lang} />
        <main className="section-y px-4">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <h1 className="h2-section text-center" style={{ color: "var(--fg)" }}>
                {dict.book.h2}
              </h1>
              <p className="mt-4 text-center font-medium max-w-xl mx-auto" style={{ color: "var(--fg2)" }}>
                {dict.book.lede}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="mt-10 glass overflow-hidden"
                style={{
                  height: "clamp(520px, 85vh, 720px)",
                  boxShadow: "0 40px 90px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(143,176,240,0.08)",
                }}
              >
                <iframe src={CAL_URL} title="Book a demo" className="w-full h-full" style={{ border: "none" }} />
              </div>
            </Reveal>
            <div className="mt-8 text-center">
              <Link to={`/${lang}`} className="text-sm font-semibold" style={{ color: "var(--accent-text)" }}>
                ← {dict.book.back}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
