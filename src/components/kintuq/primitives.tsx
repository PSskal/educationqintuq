"use client";
// Shared primitives for Kintuq — icons, buttons, textile pattern, audio bars
import * as React from "react";

export type Lang = "en" | "es";

// ─── Minimal stroke-icon set ─────────────────────────────────────
export const Icon = ({
  name,
  size = 20,
  stroke = "currentColor",
  strokeWidth = 1.6,
}: {
  name: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "play": return <svg {...props}><path d="M7 5l12 7-12 7V5z" fill={stroke} /></svg>;
    case "pause": return <svg {...props}><rect x="6" y="5" width="4" height="14" fill={stroke} stroke="none" /><rect x="14" y="5" width="4" height="14" fill={stroke} stroke="none" /></svg>;
    case "volume": return <svg {...props}><path d="M5 9v6h4l5 4V5L9 9H5z" /><path d="M16 8a5 5 0 010 8" /></svg>;
    case "flame": return <svg {...props}><path d="M12 2c1 4 5 5 5 10a5 5 0 11-10 0c0-2 1-3 2-4-1 3 2 4 3 2 0-2-1-5 0-8z" /></svg>;
    case "star": return <svg {...props}><path d="M12 3l2.6 5.8 6.4.7-4.8 4.4 1.4 6.3L12 17l-5.6 3.2 1.4-6.3L3 9.5l6.4-.7L12 3z" /></svg>;
    case "heart": return <svg {...props}><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" /></svg>;
    case "check": return <svg {...props}><path d="M5 13l4 4L19 7" /></svg>;
    case "x": return <svg {...props}><path d="M6 6l12 12M18 6L6 18" /></svg>;
    case "arrow-r": return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrow-l": return <svg {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>;
    case "arrow-up-right": return <svg {...props}><path d="M7 17L17 7M9 7h8v8" /></svg>;
    case "mountain": return <svg {...props}><path d="M3 19l5-9 4 6 3-4 6 7H3z" /><circle cx="16" cy="6" r="1.5" /></svg>;
    case "home": return <svg {...props}><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9z" /></svg>;
    case "book": return <svg {...props}><path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4z" /><path d="M20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" /></svg>;
    case "user": return <svg {...props}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></svg>;
    case "sparkle": return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /></svg>;
    case "globe": return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>;
    case "share": return <svg {...props}><path d="M12 4v12M7 9l5-5 5 5M5 20h14" /></svg>;
    case "mic": return <svg {...props}><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg>;
    case "chevron-r": return <svg {...props}><path d="M9 6l6 6-6 6" /></svg>;
    case "chevron-l": return <svg {...props}><path d="M15 6l-6 6 6 6" /></svg>;
    case "chevron-d": return <svg {...props}><path d="M6 9l6 6 6-6" /></svg>;
    case "menu": return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "lock": return <svg {...props}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>;
    case "trophy": return <svg {...props}><path d="M7 4h10v4a5 5 0 01-10 0V4z" /><path d="M5 6H3v2a3 3 0 003 3M19 6h2v2a3 3 0 01-3 3M9 21h6M12 14v7" /></svg>;
    case "leaf": return <svg {...props}><path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2-1-2-2z" /><path d="M5 19l8-8" /></svg>;
    default: return null;
  }
};

// ─── Buttons ─────────────────────────────────────────────────────
export const KButton = ({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  children,
  onClick,
  style = {},
  full,
  disabled,
}: {
  variant?: "primary" | "accent" | "ghost" | "soft" | "plain";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconRight?: string | null;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  full?: boolean;
  disabled?: boolean;
}) => {
  const sizes: Record<string, React.CSSProperties> = {
    sm: { padding: "8px 14px", fontSize: 13, height: 36, gap: 6 },
    md: { padding: "12px 20px", fontSize: 15, height: 46, gap: 8 },
    lg: { padding: "16px 28px", fontSize: 16, height: 56, gap: 10 },
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "var(--ink)", color: "var(--bg)", border: "1px solid var(--ink)" },
    accent: { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" },
    ghost: { background: "transparent", color: "var(--ink)", border: "1px solid var(--hairline)" },
    soft: { background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--hairline)" },
    plain: { background: "transparent", color: "var(--ink)", border: "none" },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...sizes[size],
        ...variants[variant],
        width: full ? "100%" : "auto",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-ui)",
        fontWeight: 500,
        letterSpacing: "-0.005em",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "transform .12s ease, background .15s ease",
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 16} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 16} />}
    </button>
  );
};

// ─── Textile pattern ─────────────────────────────────────────────
export const TextileBand = ({
  height = 18,
  opacity = 1,
  style = {},
}: {
  height?: number;
  opacity?: number;
  style?: React.CSSProperties;
}) => (
  <div style={{ height, width: "100%", overflow: "hidden", opacity, ...style }}>
    <svg width="100%" height={height} viewBox="0 0 240 18" preserveAspectRatio="none" style={{ display: "block" }}>
      <defs>
        <pattern id="kintuq-textile" x="0" y="0" width="24" height="18" patternUnits="userSpaceOnUse">
          <path d="M0 9 L4 4 L8 9 L12 4 L16 9 L20 4 L24 9" fill="none" stroke="var(--terracotta)" strokeWidth="1.4" />
          <path d="M12 12 L14 14 L12 16 L10 14 Z" fill="var(--gold)" />
          <path d="M0 12 L2 14 L0 16 M24 12 L22 14 L24 16" fill="var(--gold)" />
          <path d="M0 1 H24" stroke="var(--sage)" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kintuq-textile)" />
    </svg>
  </div>
);

// ─── Diamond motif (chakana-inspired) ────────────────────────────
export const DiamondMark = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke={color} strokeWidth="1.4" />
    <path d="M12 7 L17 12 L12 17 L7 12 Z" fill={color} opacity="0.18" />
    <circle cx="12" cy="12" r="1.2" fill={color} />
  </svg>
);

// ─── Audio waveform ──────────────────────────────────────────────
export const Waveform = ({
  playing = false,
  bars = 28,
  color = "currentColor",
  height = 36,
}: {
  playing?: boolean;
  bars?: number;
  color?: string;
  height?: number;
}) => {
  const heights = React.useMemo(
    () =>
      Array.from({ length: bars }, (_, i) => {
        const tt = i / bars;
        const base = 0.25 + Math.abs(Math.sin(tt * Math.PI * 2.4)) * 0.7;
        return Math.max(0.15, base);
      }),
    [bars]
  );
  return (
    <div style={{ height, display: "flex", alignItems: "center", gap: 3, width: "100%" }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h * 100}%`,
            background: color,
            borderRadius: 2,
            opacity: playing ? 0.95 : 0.55,
            transformOrigin: "center",
            animation: playing ? `kintuq-wf ${0.6 + (i % 5) * 0.12}s ease-in-out ${i * 0.02}s infinite alternate` : "none",
          }}
        />
      ))}
      <style>{`@keyframes kintuq-wf { from { transform: scaleY(0.55); } to { transform: scaleY(1); } }`}</style>
    </div>
  );
};

// ─── Streak / XP badges ──────────────────────────────────────────
export const StatPill = ({
  icon,
  value,
  label,
  tone = "default",
}: {
  icon: string;
  value: React.ReactNode;
  label?: React.ReactNode;
  tone?: "default" | "flame" | "gold" | "sage";
}) => {
  const tones = {
    default: { bg: "var(--surface)", ink: "var(--ink)", accent: "var(--ink-2)" },
    flame: { bg: "color-mix(in oklab, var(--terracotta) 14%, var(--surface))", ink: "var(--terracotta-deep)", accent: "var(--terracotta)" },
    gold: { bg: "color-mix(in oklab, var(--gold) 18%, var(--surface))", ink: "#7A5418", accent: "var(--gold-deep)" },
    sage: { bg: "color-mix(in oklab, var(--sage) 16%, var(--surface))", ink: "var(--sage-deep)", accent: "var(--sage)" },
  }[tone];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 14px 8px 12px",
        borderRadius: 999,
        background: tones.bg,
        border: "1px solid var(--hairline)",
        color: tones.ink,
      }}
    >
      <Icon name={icon} size={16} stroke={tones.accent} />
      <span style={{ fontWeight: 600, fontSize: 14, fontVariantNumeric: "tabular-nums" }}>{value}</span>
      {label && <span style={{ fontSize: 12, color: "var(--muted)" }}>{label}</span>}
    </div>
  );
};

// ─── Photographic placeholder ────────────────────────────────────
export const PhotoPlaceholder = ({
  children,
  ratio = "4/5",
  tone = "mountain",
  label,
  style = {},
}: {
  children?: React.ReactNode;
  ratio?: string;
  tone?: "mountain" | "valley" | "sky" | "textile" | "night";
  label?: string;
  style?: React.CSSProperties;
}) => {
  const toneMap: Record<string, string> = {
    mountain: "linear-gradient(180deg, #C9D6DC 0%, #95B0B8 38%, #6E8A8E 64%, #4A5E5C 100%)",
    valley: "linear-gradient(180deg, #F0D9B0 0%, #D9A86B 35%, #A66A3D 68%, #5C3A24 100%)",
    sky: "linear-gradient(180deg, #F4D9B0 0%, #E5A875 30%, #C26F4F 60%, #6F3A2D 100%)",
    textile: "linear-gradient(135deg, #B85A3D 0%, #D97757 40%, #E5B86A 70%, #5B7C5A 100%)",
    night: "linear-gradient(180deg, #2D2418 0%, #4A3A28 50%, #1A1410 100%)",
  };
  const bg = toneMap[tone] || toneMap.mountain;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        background: bg,
        borderRadius: "var(--r-md)",
        overflow: "hidden",
        ...style,
      }}
    >
      {(tone === "mountain" || tone === "sky" || tone === "valley") && (
        <div
          style={{
            position: "absolute",
            top: "18%",
            right: "14%",
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: tone === "mountain" ? "#F4D9B0" : "#F8E4B8",
            opacity: 0.85,
            filter: "blur(0.5px)",
            boxShadow: "0 0 60px rgba(248, 220, 170, 0.6)",
          }}
        />
      )}
      {tone === "mountain" && (
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, width: "100%", height: "55%" }}>
          <path d="M0 200 L60 120 L110 160 L170 80 L220 140 L280 60 L330 130 L400 90 L400 300 L0 300 Z" fill="#3A4847" />
          <path d="M0 230 L80 170 L140 210 L210 150 L270 200 L340 160 L400 200 L400 300 L0 300 Z" fill="#28332F" opacity="0.85" />
        </svg>
      )}
      {tone === "valley" && (
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, width: "100%", height: "70%" }}>
          <path d="M0 240 L100 180 L200 220 L300 170 L400 210 L400 300 L0 300 Z" fill="#5C3A24" opacity="0.7" />
        </svg>
      )}
      {label && (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 12,
            fontSize: 10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
};

// ─── Quechua text helper ─────────────────────────────────────────
export const TrioText = ({
  qu,
  en,
  es,
  lang = "en",
  size = "md",
}: {
  qu: string;
  en: string;
  es: string;
  lang?: Lang;
  size?: "sm" | "md" | "lg" | "xl";
}) => {
  const sizes = {
    sm: { qu: 22, tr: 13 },
    md: { qu: 32, tr: 14 },
    lg: { qu: 48, tr: 16 },
    xl: { qu: 64, tr: 18 },
  }[size];
  return (
    <div>
      <div className="serif" style={{ fontSize: sizes.qu, lineHeight: 1.05, color: "var(--ink)" }}>{qu}</div>
      <div style={{ marginTop: 6, fontSize: sizes.tr, color: "var(--ink-2)", fontWeight: 400 }}>
        {lang === "en" ? en : es}
      </div>
    </div>
  );
};
