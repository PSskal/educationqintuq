"use client";
// Settings
import type { ReactNode } from "react";
import { Icon, DiamondMark, type Lang } from "./primitives";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div style={{ marginBottom: 26 }}>
    <div className="eyebrow" style={{ marginBottom: 10, padding: "0 4px" }}>{title}</div>
    <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", overflow: "hidden" }}>{children}</div>
  </div>
);

const Row = ({ icon, label, value, last, chev = true, toggle }: { icon: string; label: string; value?: string; last?: boolean; chev?: boolean; toggle?: boolean }) => (
  <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 14, borderBottom: last ? "none" : "1px solid var(--hairline)" }}>
    <div style={{ width: 32, height: 32, borderRadius: 10, background: "color-mix(in oklab, var(--accent) 10%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <Icon name={icon} size={16} stroke="var(--terracotta-deep)" />
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 14, color: "var(--ink)" }}>{label}</div>
      {value && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>{value}</div>}
    </div>
    {toggle !== undefined ? (
      <div style={{ width: 42, height: 26, borderRadius: 999, background: toggle ? "var(--accent)" : "var(--hairline)", position: "relative", transition: "background .2s" }}>
        <div style={{ position: "absolute", top: 2, left: toggle ? 18 : 2, width: 22, height: 22, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.2)", transition: "left .2s" }} />
      </div>
    ) : chev ? (
      <Icon name="chevron-r" size={14} stroke="var(--muted)" />
    ) : null}
  </div>
);

export const SettingsScreen = ({ lang = "en", onBack }: { lang?: Lang; onBack?: () => void }) => {
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="chevron-l" size={16} />
        </button>
        <div className="eyebrow">{t("Settings", "Ajustes")}</div>
        <div style={{ width: 36 }} />
      </div>
      <div style={{ padding: "24px 18px 32px", flex: 1 }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: 18, marginBottom: 26, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontSize: 24 }}>S</div>
          <div style={{ flex: 1 }}>
            <div className="serif" style={{ fontSize: 22, color: "var(--ink)" }}>Sara Mendoza</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>sara@example.com · {t("Free plan", "Plan gratis")}</div>
          </div>
          <Icon name="chevron-r" size={16} stroke="var(--muted)" />
        </div>
        <Section title={t("Learning", "Aprendizaje")}>
          <Row icon="leaf" label={t("Daily goal", "Meta diaria")} value="5 min" />
          <Row icon="globe" label={t("UI language", "Idioma de la app")} value={t("English", "Inglés")} />
          <Row icon="mountain" label={t("Quechua dialect", "Dialecto quechua")} value="Cusco-Collao" last />
        </Section>
        <Section title={t("Reminders", "Recordatorios")}>
          <Row icon="flame" label={t("Daily nudge", "Recordatorio diario")} toggle={true} />
          <Row icon="heart" label={t("Streak alerts", "Alertas de racha")} toggle={true} />
          <Row icon="sparkle" label={t("New voices", "Voces nuevas")} toggle={false} last />
        </Section>
        <Section title={t("Sound & feel", "Sonido y sensación")}>
          <Row icon="volume" label={t("Sound effects", "Efectos de sonido")} toggle={true} />
          <Row icon="sparkle" label={t("Reduce motion", "Reducir animaciones")} toggle={false} />
          <Row icon="star" label={t("Theme", "Tema")} value="Sunrise" last />
        </Section>
        <Section title={t("Account", "Cuenta")}>
          <Row icon="user" label={t("Edit profile", "Editar perfil")} />
          <Row icon="lock" label={t("Privacy", "Privacidad")} />
          <Row icon="book" label={t("Manage subscription", "Gestionar suscripción")} />
          <Row icon="arrow-up-right" label={t("Sign out", "Cerrar sesión")} chev={false} last />
        </Section>
        <div style={{ textAlign: "center", padding: "16px 0" }}>
          <DiamondMark size={20} color="var(--muted)" />
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6, fontFamily: "var(--font-mono)" }}>Kintuq v1.2.0 · {t("Made with respect", "Hecho con respeto")}</div>
        </div>
      </div>
    </div>
  );
};
