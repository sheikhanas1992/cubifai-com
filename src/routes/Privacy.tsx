import { useEffect } from "react";
import { Link } from "react-router-dom";
import { en } from "@/i18n/en";

export function Privacy() {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.title = en.privacy.title;
  }, []);
  return (
    <>
      <div className="page-bg" aria-hidden />
      <div className="section-y px-4">
        <div className="mx-auto max-w-[700px] glass p-8">
          <h1 className="h2-section" style={{ color: "var(--fg)" }}>
            {en.privacy.title}
          </h1>
          <div className="mt-6 space-y-4">
            {en.privacy.body.map((p) => (
              <p key={p} style={{ color: "var(--fg2)" }}>
                {p}
              </p>
            ))}
          </div>
          <Link to="/" className="mt-8 inline-block" style={{ color: "var(--accent-text)" }}>
            ← {en.privacy.back}
          </Link>
        </div>
      </div>
    </>
  );
}
