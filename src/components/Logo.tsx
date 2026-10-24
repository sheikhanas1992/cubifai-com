type Props = { variant?: "horizontal" | "mark"; className?: string; title?: string; style?: React.CSSProperties };

/** The CUBIFAI mark: a hexagon outline with "AI" inside, on its own dark
 * tile. Shipped as a raster image (public/logo-mark.png) rather than a
 * hand-traced SVG, since it's a supplied brand asset, not a geometry we
 * authored ourselves. */
export function Logo({ variant = "horizontal", className, title = "CUBIFAI", style }: Props) {
  if (variant === "mark") {
    return <img src="/logo-mark.png" alt={title} className={className} style={style} />;
  }
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} style={style}>
      <img src="/logo-mark.png" alt="" aria-hidden className="h-7 w-7 rounded-md" />
      <span className="font-extrabold tracking-tight text-lg" style={{ color: "currentColor" }}>
        {title}
      </span>
    </span>
  );
}
