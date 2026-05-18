"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { IOSDevice } from "@/components/kintuq/ios-frame";
import { Icon, type Lang } from "@/components/kintuq/primitives";
import { Dashboard, LessonScreen, DailyWordScreen, CompletionScreen, ProfileScreen } from "@/components/kintuq/screens";

type Screen = "dashboard" | "lesson" | "word" | "profile" | "done";

export default function KintuqApp() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");
  const [screen, setScreen] = useState<Screen>("dashboard");

  return (
    <div
      className="kintuq-root"
      data-palette="sunrise"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background:
          "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--terracotta) 14%, var(--bg)) 0%, transparent 50%), radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--sage) 14%, var(--bg)) 0%, transparent 50%), var(--bg)",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 90,
          display: "flex",
          gap: 6,
          alignItems: "center",
          padding: 6,
          background: "color-mix(in oklab, var(--surface) 88%, transparent)",
          backdropFilter: "blur(14px) saturate(140%)",
          border: "1px solid var(--hairline)",
          borderRadius: 999,
          boxShadow: "var(--shadow-md)",
          fontSize: 13,
          fontFamily: "var(--font-ui)",
        }}
      >
        <button onClick={() => router.push("/")} style={{ padding: "8px 14px", borderRadius: 999, color: "var(--ink-2)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Icon name="globe" size={14} /> Landing
        </button>
        <div style={{ width: 1, height: 18, background: "var(--hairline)", margin: "0 4px" }} />
        <div style={{ background: "color-mix(in oklab, var(--ink) 6%, transparent)", borderRadius: 999, padding: 3, display: "flex" }}>
          {(["en", "es"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: "5px 10px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                background: lang === l ? "var(--surface)" : "transparent",
                color: lang === l ? "var(--ink)" : "var(--ink-2)",
                boxShadow: lang === l ? "var(--shadow-sm)" : "none",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <IOSDevice width={402} height={874}>
          {screen === "dashboard" && <Dashboard lang={lang} onStart={() => setScreen("lesson")} onWord={() => setScreen("word")} />}
          {screen === "lesson" && <LessonScreen lang={lang} onClose={() => setScreen("dashboard")} onComplete={() => setScreen("done")} />}
          {screen === "word" && <DailyWordScreen lang={lang} onClose={() => setScreen("dashboard")} />}
          {screen === "profile" && <ProfileScreen lang={lang} />}
          {screen === "done" && <CompletionScreen lang={lang} onDone={() => setScreen("dashboard")} />}
        </IOSDevice>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 70,
            display: "flex",
            gap: 4,
            padding: 6,
            background: "color-mix(in oklab, var(--surface) 92%, transparent)",
            backdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid var(--hairline)",
            borderRadius: 999,
            boxShadow: "var(--shadow-md)",
          }}
        >
          {([
            { id: "dashboard", icon: "home" },
            { id: "lesson", icon: "book" },
            { id: "word", icon: "sparkle" },
            { id: "profile", icon: "user" },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setScreen(tab.id)}
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: screen === tab.id ? "var(--ink)" : "transparent",
                color: screen === tab.id ? "var(--bg)" : "var(--muted)",
              }}
            >
              <Icon name={tab.icon} size={18} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
