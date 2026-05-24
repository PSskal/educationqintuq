"use client";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "./primitives";

const TABS = [
  { id: "home", icon: "home", href: "/dashboard" },
  { id: "lessons", icon: "book", href: "/library" },
  { id: "word", icon: "sparkle", href: "/word" },
  { id: "profile", icon: "user", href: "/profile" },
] as const;

export function TabBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 70,
        display: "flex",
        gap: 4,
        padding: 6,
        background: "color-mix(in oklab, var(--surface) 92%, transparent)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid var(--hairline)",
        borderRadius: 999,
        boxShadow: "var(--shadow-md)",
      }}
    >
      {TABS.map((tab) => {
        const active = pathname === tab.href;
        return (
          <button
            key={tab.id}
            onClick={() => router.push(tab.href)}
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: active ? "var(--ink)" : "transparent",
              color: active ? "var(--bg)" : "var(--muted)",
            }}
          >
            <Icon name={tab.icon} size={18} stroke={active ? "var(--bg)" : "var(--muted)"} />
          </button>
        );
      })}
    </div>
  );
}

export function KintuqScreen({
  children,
  tabBar = false,
  wide = false,
}: {
  children: ReactNode;
  tabBar?: boolean;
  wide?: boolean;
}) {
  if (wide) {
    return (
      <div className="kintuq-root" data-palette="sunrise" style={{ minHeight: "100vh" }}>
        {children}
      </div>
    );
  }
  return (
    <div
      className="kintuq-root"
      data-palette="sunrise"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "var(--bg-2)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          minHeight: "100vh",
          background: "var(--bg)",
          position: "relative",
          boxShadow: "0 0 60px rgba(0,0,0,0.06)",
          paddingBottom: tabBar ? 96 : 0,
        }}
      >
        {children}
        {tabBar && <TabBar />}
      </div>
    </div>
  );
}
