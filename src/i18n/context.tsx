import { createContext, useContext } from "react";
import type { Dict } from "./en";

export type Lang = "en" | "ar";
export const LANG_KEY = "cubifai:lang";

const I18nContext = createContext<Dict | null>(null);

export function I18nProvider({ dict, children }: { dict: Dict; children: React.ReactNode }) {
  return <I18nContext.Provider value={dict}>{children}</I18nContext.Provider>;
}

export function useI18n(): Dict {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
