import { useEffect, useState } from "react";
import { I18nProvider, LANG_KEY, type Lang } from "@/i18n/context";
import type { Dict } from "@/i18n/en";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Problem } from "./Problem";
import { Solutions } from "./Solutions";
import { SeeItInAction } from "./SeeItInAction";
import { HowItWorks } from "./HowItWorks";
import { Industries } from "./Industries";
import { Languages } from "./Languages";
import { WhyUs } from "./WhyUs";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import type { PlanId } from "@/lib/pricing";

export function Site({ lang, dict }: { lang: Lang; dict: Dict }) {
  const [plan, setPlan] = useState<PlanId>();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = dict.meta.title;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, dict]);

  return (
    <I18nProvider dict={dict}>
      <div className="page-bg" aria-hidden />
      <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
        <Header lang={lang} />
        <main>
          <Hero />
          <Problem />
          <Solutions />
          <SeeItInAction />
          <HowItWorks />
          <Industries />
          <Languages />
          <WhyUs />
          <Pricing onSelectPlan={setPlan} />
          <FAQ />
          <Contact plan={plan} />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
