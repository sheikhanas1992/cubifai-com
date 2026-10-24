/** GCC country codes accepted besides Saudi Arabia (+966). */
const GCC = ["971", "974", "965", "968", "973"];

/**
 * Normalise a WhatsApp number to E.164.
 * Saudi: 05xxxxxxxx, 5xxxxxxxx, 9665xxxxxxxx, +9665xxxxxxxx, 009665xxxxxxxx.
 * Other GCC: any valid E.164 with +971/+974/+965/+968/+973.
 * Returns null when invalid.
 */
export function normalizeWhatsapp(input: string): string | null {
  let d = input.replace(/[\s\-().]/g, "");
  if (d.startsWith("00")) d = "+" + d.slice(2);
  const plus = d.startsWith("+");
  if (plus) d = d.slice(1);
  if (!/^\d+$/.test(d)) return null;

  if (!plus) {
    if (/^05\d{8}$/.test(d)) return "+966" + d.slice(1);
    if (/^5\d{8}$/.test(d)) return "+966" + d;
  }
  if (/^9665\d{8}$/.test(d)) return "+" + d;
  if (d.startsWith("966")) return null;
  for (const cc of GCC) {
    if (d.startsWith(cc)) {
      const rest = d.slice(cc.length);
      if (rest.length >= 7 && rest.length <= 9) return "+" + d;
      return null;
    }
  }
  return null;
}
