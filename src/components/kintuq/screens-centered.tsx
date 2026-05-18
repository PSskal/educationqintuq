"use client";
// Centered web layout — brilliant.org inspired
import { Icon, Waveform, TextileBand, DiamondMark, type Lang } from "./primitives";
import { DAILY_WORD } from "./screens";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const DashboardCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "color-mix(in oklab, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <DiamondMark size={22} color="var(--ink)" />
            <div className="serif" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>Kintuq</div>
          </div>
          <nav style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--ink-2)" }}>
            <a style={{ color: "var(--ink)", fontWeight: 600 }}>{t("Home", "Inicio")}</a>
            <a>{t("Lessons", "Lecciones")}</a>
            <a>{t("Word", "Palabra")}</a>
            <a>{t("Voices", "Voces")}</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 999, background: "color-mix(in oklab, var(--terracotta) 12%, var(--surface))", color: "var(--terracotta-deep)", fontSize: 12, fontWeight: 600 }}>
              <Icon name="flame" size={12} stroke="var(--terracotta)" />
              7
            </div>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 13, fontFamily: "var(--font-display)" }}>S</div>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "72px 32px 80px" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Sunday · May 17", "Domingo · 17 mayo")}</div>
        <h1 className="serif" style={{ fontSize: 56, lineHeight: 1.02, color: "var(--ink)", margin: 0, letterSpacing: "-0.025em", textWrap: "balance" }}>
          Allillanchu, <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>Sara</span>.
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", marginTop: 16, lineHeight: 1.5, textWrap: "pretty" }}>
          {t("Your kintu for today is one lesson — about three minutes. The mountain is listening.", "Tu kintu de hoy es una lección — unos tres minutos. La montaña escucha.")}
        </p>
        <div style={{ marginTop: 48, background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xl)", padding: "40px 36px", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.4 }}>
            <TextileBand height={10} />
          </div>
          <div className="eyebrow">{t("Today’s kintu", "El kintu de hoy")}</div>
          <div className="serif" style={{ fontSize: 40, lineHeight: 1.05, color: "var(--ink)", marginTop: 14, letterSpacing: "-0.02em" }}>{t("Greetings of the day", "Saludos del día")}</div>
          <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>Unit 2 · 3 of 5 · 5 min</div>
          <div style={{ display: "flex", gap: 6, marginTop: 24 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} style={{ flex: 1, height: 6, borderRadius: 3, background: n <= 2 ? "var(--sage)" : n === 3 ? "var(--terracotta)" : "var(--hairline)" }} />
            ))}
          </div>
          <button style={{ marginTop: 28, height: 56, padding: "0 28px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10 }}>
            {t("Begin", "Comenzar")}
            <Icon name="arrow-r" size={16} stroke="var(--bg)" />
          </button>
        </div>
        <div style={{ marginTop: 56, padding: "24px 0", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }}>
          {[
            { v: "7", l: t("day streak", "días de racha") },
            { v: "1,240", l: "XP" },
            { v: "34", l: t("words learned", "palabras aprendidas") },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: 36, color: "var(--ink)", letterSpacing: "-0.02em", fontStyle: i === 0 ? "italic" : "normal" }}>{s.v}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Today’s word", "Palabra de hoy")}</div>
          <a style={{ textDecoration: "none", background: "transparent", borderRadius: "var(--r-lg)", padding: "24px 0", borderTop: "1px solid var(--hairline)", display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 44, color: "var(--terracotta)", fontStyle: "italic", lineHeight: 1, letterSpacing: "-0.01em" }}>Munay</div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 8, fontStyle: "italic" }}>{t("Love · will · to want", "Amor · voluntad · querer")}</div>
            </div>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="play" size={16} stroke="var(--terracotta)" />
            </div>
          </a>
        </div>
        <div style={{ marginTop: 80, textAlign: "center", fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>
          {t("Three leaves. Three minutes. A daily ritual.", "Tres hojas. Tres minutos. Un ritual diario.")}
        </div>
      </main>
    </div>
  );
};

export const LessonCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 32px", borderBottom: "1px solid var(--hairline)", background: "color-mix(in oklab, var(--bg) 92%, transparent)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 24 }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} />
        </button>
        <div style={{ flex: 1, maxWidth: 480, margin: "0 auto", height: 4, background: "var(--hairline)", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ width: "45%", height: "100%", background: "var(--terracotta)" }} />
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-mono)", minWidth: 60, textAlign: "right" }}>2 of 5</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <main style={{ width: "100%", maxWidth: 620, margin: "0 auto", padding: "80px 32px 40px", flex: 1 }}>
          <div className="eyebrow" style={{ marginBottom: 24, textAlign: "center" }}>{t("Listen and feel", "Escucha y siente")}</div>
          <div style={{ textAlign: "center" }}>
            <div className="serif" style={{ fontSize: 96, lineHeight: 1.0, color: "var(--ink)", letterSpacing: "-0.03em", fontStyle: "italic" }}>Allillanchu</div>
            <div className="mono" style={{ fontSize: 13, color: "var(--muted)", marginTop: 14 }}>/a.ʊiˈʎan.tʃu/</div>
          </div>
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            <button style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px color-mix(in oklab, var(--ink) 6%, transparent), var(--shadow-md)" }}>
              <Icon name="play" size={36} stroke="var(--bg)" />
            </button>
            <div style={{ width: 320 }}>
              <Waveform playing={true} bars={24} color="var(--terracotta)" height={36} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--muted)" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, var(--sage), var(--gold))" }} />
              María Quispe · San Blás
            </div>
          </div>
          <button style={{ marginTop: 56, width: "100%", background: "transparent", border: "1.5px dashed var(--hairline)", borderRadius: "var(--r-lg)", padding: "28px 32px", textAlign: "left", display: "flex", alignItems: "center", gap: 14, color: "var(--muted)" }}>
            <Icon name="sparkle" size={18} stroke="var(--muted)" />
            <span style={{ fontSize: 15 }}>{t("Tap to reveal meaning", "Toca para revelar el significado")}</span>
          </button>
        </main>
        <div style={{ borderTop: "1px solid var(--hairline)", background: "color-mix(in oklab, var(--bg) 95%, transparent)", backdropFilter: "blur(8px)", padding: "20px 32px", display: "flex", justifyContent: "center" }}>
          <button style={{ height: 56, minWidth: 320, padding: "0 32px", borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            {t("Check", "Comprobar")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const DailyWordCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const text = lang === "en" ? DAILY_WORD.en : DAILY_WORD.es;
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={20} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 18 }}>Kintuq</div>
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>{t("Word of the day · May 17", "Palabra del día · 17 mayo")}</div>
        <button style={{ padding: "8px 14px", borderRadius: 999, fontSize: 12, border: "1px solid var(--hairline)", color: "var(--ink-2)", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Icon name="share" size={12} stroke="var(--ink-2)" />
          {t("Share", "Compartir")}
        </button>
      </div>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 80px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 className="serif" style={{ fontSize: 168, lineHeight: 0.9, color: "var(--terracotta)", fontStyle: "italic", letterSpacing: "-0.04em", margin: 0 }}>{DAILY_WORD.qu}</h1>
          <div style={{ marginTop: 24, display: "inline-flex", gap: 12, alignItems: "center", padding: "8px 16px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: 999, fontSize: 13 }}>
            <span className="mono" style={{ color: "var(--ink-2)" }}>{DAILY_WORD.ipa}</span>
            <span style={{ color: "var(--muted)" }}>·</span>
            <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>{DAILY_WORD.pos}</span>
          </div>
          <div className="serif" style={{ fontSize: 28, fontStyle: "italic", color: "var(--ink-2)", marginTop: 28, letterSpacing: "-0.01em" }}>{text.gloss}</div>
        </div>
        <div style={{ marginTop: 56, padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xl)", display: "flex", alignItems: "center", gap: 18, boxShadow: "var(--shadow-sm)" }}>
          <button style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="play" size={20} stroke="var(--bg)" />
          </button>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={24} color="var(--terracotta)" height={28} />
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>{t("Voice: María Quispe · San Blás, Cusco", "Voz: María Quispe · San Blás, Cusco")}</div>
          </div>
        </div>
        <div style={{ marginTop: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 18, textAlign: "center" }}>{t("From the highlands", "Desde las alturas")}</div>
          <p className="serif" style={{ fontSize: 26, lineHeight: 1.4, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em", textWrap: "pretty", textAlign: "center" }}>{text.body}</p>
        </div>
        <div style={{ marginTop: 72, padding: "40px 40px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{t("In a phrase", "En una frase")}</div>
          <div className="serif" style={{ fontSize: 38, color: "var(--terracotta)", fontStyle: "italic", lineHeight: 1.25, letterSpacing: "-0.01em" }}>&ldquo;{DAILY_WORD.example.qu}&rdquo;</div>
          <div style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 12, fontStyle: "italic" }}>{lang === "en" ? DAILY_WORD.example.en : DAILY_WORD.example.es}</div>
        </div>
        <div style={{ marginTop: 72, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{t("Three pillars of being", "Tres pilares del ser")}</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 48 }}>
            {[
              { qu: "Munay", en: "love", es: "amor", highlight: true },
              { qu: "Yachay", en: "knowing", es: "saber" },
              { qu: "Llankʼay", en: "work", es: "trabajo" },
            ].map((p) => (
              <div key={p.qu}>
                <div className="serif" style={{ fontSize: 30, color: p.highlight ? "var(--terracotta)" : "var(--ink)", fontStyle: "italic" }}>{p.qu}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{t(p.en, p.es)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 80, textAlign: "center" }}>
          <button style={{ height: 56, padding: "0 36px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10 }}>
            {t("Learn a Quechua phrase today", "Aprende una frase de quechua hoy")}
            <Icon name="arrow-r" size={16} stroke="var(--bg)" />
          </button>
          <div style={{ marginTop: 16, fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>{t("Three minutes · real Andean voices", "Tres minutos · voces andinas reales")}</div>
        </div>
      </main>
    </div>
  );
};
