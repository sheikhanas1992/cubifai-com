import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LANG_KEY } from "./i18n/context";
import { Site } from "./components/Site";
import { Privacy } from "./routes/Privacy";
import { en } from "./i18n/en";
import { ar } from "./i18n/ar";

function RootRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch {
      /* ignore */
    }
    const lang = saved === "ar" || saved === "en" ? saved : navigator.language.startsWith("ar") ? "ar" : "en";
    navigate(lang === "ar" ? "/ar" : "/en", { replace: true });
  }, [navigate]);
  return <div className="page-bg" aria-hidden />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/en" element={<Site lang="en" dict={en} />} />
        <Route path="/ar" element={<Site lang="ar" dict={ar} />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
