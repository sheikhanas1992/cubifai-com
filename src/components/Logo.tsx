type Props = { variant?: "horizontal" | "mark"; className?: string; title?: string; style?: React.CSSProperties };

const Facets = () => (
  <>
    <polygon points="48.73,8.20 48.73,47.80 14.44,28.00" fill="#4D5C7F" />
    <polygon points="51.27,8.20 85.56,28.00 51.27,47.80" fill="#2B4E8E" />
    <polygon points="13.17,30.20 47.46,50.00 13.17,69.80" fill="#2B3789" />
    <polygon points="14.44,72.00 48.73,52.20 48.73,91.80" fill="#0C1E3C" />
    <polygon points="86.83,30.20 86.83,69.80 52.54,50.00" fill="#224584" />
    <polygon points="85.56,72.00 51.27,91.80 51.27,52.20" fill="#173570" />
  </>
);

const s = { fill: "none", stroke: "currentColor", strokeWidth: 6, strokeLinecap: "butt", strokeLinejoin: "miter" } as const;

export function Logo({ variant = "horizontal", className, title = "CUBIFAI", style }: Props) {
  if (variant === "mark") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label={title} className={className} style={style}>
        <title>{title}</title>
        <Facets />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 56" role="img" aria-label={title} className={className} style={style}>
      <title>{title}</title>
      <g transform="scale(0.56)">
        <Facets />
      </g>
      <g transform="translate(76 8.0)">
        <path transform="translate(0 0)" d="M33.02,9.07 A17,17 0 1 0 33.02,30.93" {...s} />
        <path transform="translate(46 0)" d="M3,0 V23 A14,14 0 0 0 31,23 V0" {...s} />
        <path transform="translate(90 0)" d="M3,0 V40 M3,3 H17 A8.5,8.5 0 0 1 17,20 H3 M3,20 H19 A8.5,8.5 0 0 1 19,37 H3" {...s} />
        <path transform="translate(131 0)" d="M3,0 V40" {...s} />
        <path transform="translate(147 0)" d="M3,0 V40 M3,3 H26 M3,20 H22" {...s} />
        <g transform="translate(175 0)">
          <polygon points="0,40 20,0 40,40 33,40 20,14 7,40" fill="currentColor" />
          <polygon points="13.5,27 26.5,27 29,32 11,32" fill="#2B4E8E" />
        </g>
        <path transform="translate(225 0)" d="M3,0 V40" {...s} />
      </g>
    </svg>
  );
}
