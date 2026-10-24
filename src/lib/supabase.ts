import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Don't throw here: this module is imported as part of the main bundle, so
// throwing at load time would crash the entire site (blank page) rather
// than just the contact form. Missing credentials degrade to the contact
// form failing on submit instead, which Contact.tsx surfaces as a normal
// error message.
export const supabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);

if (!supabaseConfigured) {
  console.warn("[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY is missing; the contact form will not be able to submit.");
}

export const supabase = createClient(SUPABASE_URL || "https://placeholder.supabase.co", SUPABASE_PUBLISHABLE_KEY || "placeholder_key");
