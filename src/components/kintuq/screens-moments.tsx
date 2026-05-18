"use client";
// Moments: Achievement unlocked, Streak calendar, Paywall, Streak in jeopardy
import { Icon, KButton, TextileBand, DiamondMark, type Lang } from "./primitives";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const AchievementUnlocked = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(180deg, var(--terracotta) 0%, var(--gold) 100%)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 360;
        const size = 4 + (i % 3) * 3;
        return (
          <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: size, height: size, borderRadius: i % 2 ? "50%" : 1, background: i % 3 === 0 ? "var(--sage)" : i % 3 === 1 ? "#fff" : "var(--bg)", transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${120 + (i % 4) * 30}px)`, opacity: 0.85 }} />
        );
      })}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.4 }}>
        <TextileBand height={14} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.4 }}>
        <TextileBand height={14} />
      </div>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "flex-end" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} stroke="#fff" />
        </button>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center", color: "#fff" }}>
        <div style={{ width: 140, height: 140, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 12px rgba(255,255,255,0.25), 0 24px 60px rgba(0,0,0,0.25)", marginBottom: 36, position: "relative" }}>
          <DiamondMark size={70} color="var(--terracotta)" />
          <div style={{ position: "absolute", bottom: -22, left: "50%", transform: "translateX(-50%)", background: "var(--ink)", color: "var(--bg)", padding: "4px 14px", borderRadius: 6, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, whiteSpace: "nowrap" }}>{t("7-day flame", "Llama 7 días")}</div>
        </div>
        <div className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>{t("Achievement unlocked", "Logro desbloqueado")}</div>
        <div className="serif" style={{ fontSize: 44, lineHeight: 1.0, color: "#fff", marginTop: 10, fontStyle: "italic", letterSpacing: "-0.02em" }}>{t("Seven days of fire.", "Siete días de fuego.")}</div>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", marginTop: 14, lineHeight: 1.5, maxWidth: 280 }}>{t("A week of daily kintus. The mountain knows your name now.", "Una semana de kintus diarios. Ya la montaña te conoce.")}</p>
        <div style={{ marginTop: 32, padding: "12px 18px", background: "rgba(0,0,0,0.18)", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 10, color: "#fff" }}>
          <Icon name="star" size={16} stroke="var(--gold)" />
          <span style={{ fontWeight: 600 }}>+50 XP</span>
        </div>
      </div>
      <div style={{ padding: "24px 22px 40px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button style={{ height: 56, borderRadius: 999, background: "#fff", color: "var(--terracotta-deep)", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          <Icon name="share" size={16} stroke="var(--terracotta-deep)" />
          {t("Share your win", "Compartir")}
        </button>
        <button style={{ height: 50, borderRadius: 999, background: "transparent", color: "#fff", fontSize: 14, fontWeight: 500, border: "1px solid rgba(255,255,255,0.4)" }}>{t("Continue learning", "Seguir aprendiendo")}</button>
      </div>
    </div>
  );
};

export const StreakCalendar = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 5;
    if (day < 1 || day > 30) return { type: "empty" as const };
    if (day < 17) return { type: "done" as const, day };
    if (day === 17) return { type: "today" as const, day };
    return { type: "future" as const, day };
  });
  const labels = lang === "en" ? ["S", "M", "T", "W", "T", "F", "S"] : ["D", "L", "M", "M", "J", "V", "S"];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="chevron-l" size={16} />
        </button>
        <div className="eyebrow">{t("Your fire", "Tu fuego")}</div>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="share" size={14} />
        </button>
      </div>
      <div style={{ padding: "24px 22px 0", textAlign: "center" }}>
        <div style={{ width: 100, height: 100, margin: "0 auto", borderRadius: "50%", background: "color-mix(in oklab, var(--terracotta) 16%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px color-mix(in oklab, var(--terracotta) 8%, transparent)" }}>
          <Icon name="flame" size={48} stroke="var(--terracotta)" />
        </div>
        <div className="serif" style={{ fontSize: 72, lineHeight: 1, color: "var(--ink)", marginTop: 16, letterSpacing: "-0.02em", fontStyle: "italic" }}>
          16
          <span style={{ fontSize: 22, fontStyle: "normal", color: "var(--muted)", fontFamily: "var(--font-ui)", marginLeft: 6 }}>{t("days", "días")}</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>{t("Longest: 24 days · Cusco fire", "Más larga: 24 días · fuego de Cusco")}</div>
      </div>
      <div style={{ padding: "32px 22px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <Icon name="chevron-l" size={18} stroke="var(--muted)" />
          <div className="serif" style={{ fontSize: 22, color: "var(--ink)" }}>{t("May 2026", "Mayo 2026")}</div>
          <Icon name="chevron-r" size={18} stroke="var(--muted)" />
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 8 }}>
            {labels.map((l, i) => (
              <div key={i} style={{ textAlign: "center", fontSize: 10, color: "var(--muted)", fontWeight: 500, letterSpacing: "0.08em" }}>{l}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
            {days.map((d, i) => (
              <div key={i} style={{ aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: d.type === "done" ? "color-mix(in oklab, var(--terracotta) 22%, var(--surface))" : d.type === "today" ? "var(--terracotta)" : "transparent", color: d.type === "today" ? "#fff" : d.type === "done" ? "var(--terracotta-deep)" : d.type === "future" ? "var(--muted)" : "transparent", fontSize: 12, fontWeight: d.type === "today" ? 700 : 500, position: "relative", boxShadow: d.type === "today" ? "0 0 0 4px color-mix(in oklab, var(--terracotta) 18%, transparent)" : "none" }}>
                {d.type === "done" && <Icon name="flame" size={12} stroke="var(--terracotta)" />}
                {d.type !== "empty" && d.type !== "done" && d.day}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "24px 22px 32px" }}>
        <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: "var(--r-md)", padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="trophy" size={20} stroke="var(--ink)" />
          </div>
          <div style={{ flex: 1 }}>
            <div className="eyebrow" style={{ color: "rgba(247,242,232,0.6)" }}>{t("Best week", "Mejor semana")}</div>
            <div className="serif" style={{ fontSize: 20, marginTop: 4 }}>{t("Mar 12 — 18", "12 — 18 mar")}</div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{t("7 of 7 days · 145 XP", "7 de 7 días · 145 XP")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Paywall = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--ink)", color: "var(--bg)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.35 }}>
        <TextileBand height={14} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.35 }}>
        <TextileBand height={14} />
      </div>
      <div style={{ position: "absolute", top: 80, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%)" }} />
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "flex-end", position: "relative" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} stroke="var(--bg)" />
        </button>
      </div>
      <div style={{ padding: "20px 28px 0", position: "relative" }}>
        <DiamondMark size={36} color="var(--gold)" />
        <div className="serif" style={{ fontSize: 48, lineHeight: 1.0, color: "var(--bg)", marginTop: 18, letterSpacing: "-0.02em" }}>
          {t("Go deeper", "Profundiza")}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("into the mountain.", "en la montaña.")}</span>
        </div>
        <p style={{ fontSize: 15, color: "rgba(247,242,232,0.7)", marginTop: 14, lineHeight: 1.5, maxWidth: 320 }}>
          {t("Kintuq Pro unlocks every dialect, every voice, and every cultural story — and gives 20% to the village cooperatives.", "Kintuq Pro abre cada dialecto, cada voz y cada historia — y da el 20% a las cooperativas de los pueblos.")}
        </p>
      </div>
      <div style={{ padding: "28px 22px 0", flex: 1 }}>
        {[
          { icon: "globe", en: "All Quechua dialects", es: "Todos los dialectos quechua" },
          { icon: "volume", en: "Every recording, every speaker", es: "Cada grabación, cada voz" },
          { icon: "book", en: "Long-form cultural stories", es: "Historias culturales largas" },
          { icon: "leaf", en: "20% goes to cooperatives", es: "20% para las cooperativas" },
        ].map((b, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(247,242,232,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={b.icon} size={16} stroke="var(--gold)" />
            </div>
            <div style={{ fontSize: 15, color: "var(--bg)" }}>{t(b.en, b.es)}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: "24px 22px 0", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button style={{ background: "rgba(247,242,232,0.06)", border: "1.5px solid var(--gold)", borderRadius: "var(--r-md)", padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--bg)" }}>{t("Yearly · 12 months", "Anual · 12 meses")}</div>
              <div style={{ fontSize: 11, color: "var(--gold)", marginTop: 2 }}>{t("Save 40% · Best value", "Ahorra 40% · Mejor valor")}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="serif" style={{ fontSize: 26, color: "var(--gold)", fontStyle: "italic" }}>$59</div>
              <div style={{ fontSize: 10, color: "rgba(247,242,232,0.5)" }}>$4.92/{t("mo", "mes")}</div>
            </div>
          </button>
          <button style={{ background: "transparent", border: "1px solid rgba(247,242,232,0.2)", borderRadius: "var(--r-md)", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left" }}>
            <div style={{ fontSize: 14, color: "rgba(247,242,232,0.85)" }}>{t("Monthly", "Mensual")}</div>
            <div className="serif" style={{ fontSize: 22, color: "rgba(247,242,232,0.85)" }}>$8</div>
          </button>
        </div>
      </div>
      <div style={{ padding: "20px 22px 32px", position: "relative" }}>
        <button style={{ height: 56, width: "100%", borderRadius: 999, background: "var(--gold)", color: "var(--ink)", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
          {t("Start 7 days free", "Empieza 7 días gratis")}
          <Icon name="arrow-r" size={16} stroke="var(--ink)" />
        </button>
        <div style={{ textAlign: "center", fontSize: 11, color: "rgba(247,242,232,0.45)", marginTop: 12 }}>{t("No charge today · Cancel anytime", "Sin cargo hoy · Cancela cuando quieras")}</div>
      </div>
    </div>
  );
};

export const StreakInJeopardy = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(180deg, var(--bg) 0%, color-mix(in oklab, var(--terracotta) 18%, var(--bg)) 100%)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "flex-end" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} />
        </button>
      </div>
      <div style={{ flex: 1, padding: "20px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
        <div style={{ width: 140, height: 140, borderRadius: "50%", background: "color-mix(in oklab, var(--terracotta) 14%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, position: "relative" }}>
          <Icon name="flame" size={70} stroke="var(--terracotta)" strokeWidth={1.4} />
          <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", gap: 4, opacity: 0.5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--muted)" }} />
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted)", marginLeft: 8 }} />
          </div>
        </div>
        <div className="eyebrow" style={{ color: "var(--terracotta-deep)" }}>{t("Your flame is dim", "Tu llama se apaga")}</div>
        <div className="serif" style={{ fontSize: 38, lineHeight: 1.05, color: "var(--ink)", marginTop: 10, letterSpacing: "-0.01em" }}>{t("Don’t let your 7-day streak go cold.", "No dejes que tu racha de 7 días se enfríe.")}</div>
        <p style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 16, lineHeight: 1.55, maxWidth: 320 }}>
          {t("A 3-minute kintu keeps the fire alive until tomorrow. The mountain is patient — but the wind is not.", "Un kintu de 3 minutos mantiene el fuego hasta mañana. La montaña es paciente — pero el viento no.")}
        </p>
        <div style={{ marginTop: 28, padding: "14px 18px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="play" size={16} stroke="#fff" />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{t("Quick kintu", "Kintu rápido")}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>{t("1 phrase · 3 minutes", "1 frase · 3 minutos")}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 22px 40px", display: "flex", flexDirection: "column", gap: 10 }}>
        <KButton variant="accent" size="lg" full iconRight="arrow-r">{t("Keep my flame", "Mantener mi llama")}</KButton>
        <KButton variant="plain" size="md" full>{t("Use streak freeze · 2 left", "Usar congelador · quedan 2")}</KButton>
      </div>
    </div>
  );
};
