"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./kintuq.css";
import { Landing } from "@/components/kintuq/landing";
import type { Lang } from "@/components/kintuq/primitives";

export default function Home() {
  const router = useRouter();
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="kintuq-root" data-palette="sunrise">
      <div
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 90,
          display: "flex",
          gap: 4,
          padding: 4,
          background: "color-mix(in oklab, var(--surface) 88%, transparent)",
          backdropFilter: "blur(14px)",
          border: "1px solid var(--hairline)",
          borderRadius: 999,
          boxShadow: "var(--shadow-md)",
          fontSize: 12,
          fontFamily: "var(--font-ui)",
        }}
      >
        {(["en", "es"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              fontWeight: 600,
              textTransform: "uppercase",
              background: lang === l ? "var(--ink)" : "transparent",
              color: lang === l ? "var(--bg)" : "var(--ink-2)",
            }}
          >
            {l}
          </button>
        ))}
      </div>
      <Landing lang={lang} onLaunchApp={() => router.push("/app")} />
    </div>
  );
}
