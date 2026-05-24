"use client";
import Link from "next/link";
import "../kintuq.css";

const GROUPS: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Onboarding & Auth",
    items: [
      { label: "01 · Splash", href: "/splash" },
      { label: "02 · Welcome", href: "/onboarding" },
      { label: "03 · Why are you learning?", href: "/onboarding/motivation" },
      { label: "04 · Daily goal", href: "/onboarding/goal" },
      { label: "05 · Notifications", href: "/onboarding/notifications" },
      { label: "06 · Sign in", href: "/login" },
      { label: "06b · Create account", href: "/signup" },
    ],
  },
  {
    title: "Core app",
    items: [
      { label: "07 · Dashboard", href: "/dashboard" },
      { label: "08 · Lesson (listen)", href: "/lesson" },
      { label: "09 · Daily word", href: "/word" },
      { label: "10 · Lesson complete", href: "/lesson/complete" },
      { label: "11 · Profile", href: "/profile" },
    ],
  },
  {
    title: "Browse & voices",
    items: [
      { label: "12 · Lessons library", href: "/library" },
      { label: "13 · Unit detail", href: "/library/unit" },
      { label: "14 · Voices list", href: "/voices" },
      { label: "15 · Speaker detail", href: "/voices/speaker" },
      { label: "16 · Vocabulary library", href: "/vocabulary" },
    ],
  },
  {
    title: "System & moments",
    items: [
      { label: "17 · Settings", href: "/settings" },
      { label: "18 · Achievement unlocked", href: "/achievement" },
      { label: "19 · Streak calendar", href: "/streak" },
      { label: "20 · Paywall", href: "/paywall" },
      { label: "21 · Streak in jeopardy", href: "/streak/jeopardy" },
    ],
  },
  {
    title: "Desktop · responsive",
    items: [
      { label: "22 · Dashboard · desktop", href: "/desktop/dashboard" },
      { label: "23 · Daily word · desktop", href: "/desktop/word" },
      { label: "24 · Lesson · desktop", href: "/desktop/lesson" },
    ],
  },
  {
    title: "Centered · brilliant style",
    items: [
      { label: "25 · Dashboard · centered", href: "/centered/dashboard" },
      { label: "26 · Lesson · centered", href: "/centered/lesson" },
      { label: "27 · Daily word · centered", href: "/centered/word" },
    ],
  },
  {
    title: "Lesson variants",
    items: [
      { label: "28 · Matching pairs", href: "/lesson/matching" },
      { label: "29 · Type the answer", href: "/lesson/type" },
      { label: "30 · Story comprehension", href: "/lesson/story" },
      { label: "31 · Pronunciation deep", href: "/lesson/pronunciation" },
    ],
  },
  {
    title: "Cultural depth & social",
    items: [
      { label: "32 · Story mode", href: "/story" },
      { label: "33 · Manifesto", href: "/manifesto" },
      { label: "34 · Voices directory", href: "/voices/directory" },
      { label: "35 · Shareable card", href: "/shareable" },
    ],
  },
];

export default function ScreensIndex() {
  return (
    <div className="kintuq-root" data-palette="sunrise" style={{ minHeight: "100vh", padding: "56px 32px 80px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>Kintuq</div>
        <h1 className="serif" style={{ fontSize: 44, margin: 0, letterSpacing: "-0.02em", color: "var(--ink)" }}>All screens</h1>
        <p style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 8 }}>Every screen is now a real route. Tap to open it.</p>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 36 }}>
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{g.title}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {g.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 18px",
                      borderRadius: "var(--r-md)",
                      background: "var(--surface)",
                      border: "1px solid var(--hairline)",
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 500,
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <span>{it.label}</span>
                    <span style={{ color: "var(--terracotta)" }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
