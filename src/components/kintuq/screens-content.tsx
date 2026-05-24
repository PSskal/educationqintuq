"use client";
// Library, Unit detail, Voices, Speaker, Vocabulary
import { Icon, KButton, Waveform, StatPill, PhotoPlaceholder, type Lang } from "./primitives";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const LessonsLibrary = ({ lang = "en", onOpenUnit }: { lang?: Lang; onOpenUnit?: () => void }) => {
  const t = useT(lang);
  const units = [
    { idx: 1, qu: "Napaykuy", en: "Greetings", es: "Saludos", done: 5, total: 5, tone: "valley" as const },
    { idx: 2, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", done: 3, total: 5, tone: "mountain" as const, active: true },
    { idx: 3, qu: "Qhatu", en: "At the market", es: "En el mercado", done: 0, total: 6, tone: "sky" as const },
    { idx: 4, qu: "Mikhuna", en: "Andean food", es: "Comida andina", done: 0, total: 7, tone: "textile" as const, lock: true },
    { idx: 5, qu: "Pacha", en: "Earth & time", es: "Tierra y tiempo", done: 0, total: 8, tone: "night" as const, lock: true },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0" }}>
        <div className="eyebrow">{t("All units", "Todas las unidades")}</div>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.0, color: "var(--ink)", marginTop: 6, letterSpacing: "-0.01em" }}>{t("Your path through Quechua", "Tu camino por el quechua")}</div>
        <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{t("5 units · 31 lessons · ~3 hours", "5 unidades · 31 lecciones · ~3 horas")}</div>
      </div>
      <div style={{ flex: 1, padding: "24px 22px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
        {units.map((u) => (
          <button key={u.idx} disabled={u.lock} onClick={() => !u.lock && onOpenUnit?.()} style={{ background: "var(--surface)", border: u.active ? "1.5px solid var(--accent)" : "1px solid var(--hairline)", borderRadius: "var(--r-lg)", overflow: "hidden", boxShadow: u.active ? "var(--shadow-md)" : "var(--shadow-sm)", opacity: u.lock ? 0.55 : 1, textAlign: "left", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", height: 88 }}>
              <PhotoPlaceholder ratio="auto" tone={u.tone} style={{ height: "100%", borderRadius: 0 }}>
                <div style={{ position: "absolute", inset: 0, padding: 18, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div className="serif" style={{ fontSize: 26, color: "#fff", fontStyle: "italic" }}>{u.qu}</div>
                  {u.lock && (
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="lock" size={16} stroke="#fff" />
                    </div>
                  )}
                  {u.active && (
                    <span style={{ background: "var(--accent)", color: "#fff", padding: "4px 10px", borderRadius: 999, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>{t("In progress", "En progreso")}</span>
                  )}
                </div>
              </PhotoPlaceholder>
            </div>
            <div style={{ padding: "14px 18px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <div className="eyebrow" style={{ fontSize: 10 }}>{t("Unit", "Unidad")} {String(u.idx).padStart(2, "0")}</div>
                  <div style={{ fontSize: 14, color: "var(--ink)", marginTop: 2, fontWeight: 500 }}>{t(u.en, u.es)}</div>
                </div>
                <div className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{u.done}/{u.total}</div>
              </div>
              <div style={{ marginTop: 10, height: 4, background: "var(--hairline)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${(u.done / u.total) * 100}%`, height: "100%", background: u.done === u.total ? "var(--sage)" : "var(--accent)" }} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export const UnitDetail = ({ lang = "en", onBack, onContinue }: { lang?: Lang; onBack?: () => void; onContinue?: () => void }) => {
  const t = useT(lang);
  const lessons = [
    { idx: 1, qu: "Imatataq sutiyki?", en: "What is your name?", es: "¿Cómo te llamas?", dur: 5, state: "done" },
    { idx: 2, qu: "Sutiyqa…", en: "My name is…", es: "Me llamo…", dur: 5, state: "done" },
    { idx: 3, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", dur: 5, state: "active" },
    { idx: 4, qu: "Sumaq tuta", en: "Beautiful night", es: "Hermosa noche", dur: 4, state: "next" },
    { idx: 5, qu: "Tinkunakama", en: "See you later", es: "Hasta luego", dur: 6, state: "lock" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 220 }}>
        <PhotoPlaceholder ratio="auto" tone="mountain" style={{ height: "100%", borderRadius: 0 }}>
          <div style={{ position: "absolute", top: 50, left: 18, right: 18, display: "flex", justifyContent: "space-between" }}>
            <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="chevron-l" size={16} stroke="#fff" />
            </button>
          </div>
          <div style={{ position: "absolute", bottom: 18, left: 22, right: 22, color: "#fff" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>{t("Unit 02", "Unidad 02")}</div>
            <div className="serif" style={{ fontSize: 38, fontStyle: "italic", marginTop: 4, letterSpacing: "-0.01em" }}>Allin p&apos;unchaw</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>{t("Greetings of the day", "Saludos del día")}</div>
          </div>
        </PhotoPlaceholder>
      </div>
      <div style={{ padding: "18px 22px", display: "flex", gap: 8, borderBottom: "1px solid var(--hairline)" }}>
        <StatPill icon="book" value="5" label={t("lessons", "lecciones")} />
        <StatPill icon="star" value="120" label="XP" tone="gold" />
        <StatPill icon="leaf" value="3/5" tone="sage" />
      </div>
      <div style={{ flex: 1, padding: "20px 22px 32px" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Lessons in this unit", "Lecciones de esta unidad")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {lessons.map((l) => (
            <button key={l.idx} style={{ background: l.state === "active" ? "color-mix(in oklab, var(--accent) 8%, var(--surface))" : "var(--surface)", border: l.state === "active" ? "1.5px solid var(--accent)" : "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "14px 16px", textAlign: "left", display: "flex", alignItems: "center", gap: 14, opacity: l.state === "lock" ? 0.5 : 1, boxShadow: l.state === "active" ? "var(--shadow-sm)" : "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: l.state === "done" ? "var(--sage)" : l.state === "active" ? "var(--accent)" : l.state === "lock" ? "transparent" : "var(--surface)", border: l.state === "lock" || l.state === "next" ? "1.5px dashed var(--hairline)" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: l.state === "done" || l.state === "active" ? "#fff" : "var(--muted)", fontSize: 13, fontWeight: 600 }}>
                {l.state === "done" ? <Icon name="check" size={16} stroke="#fff" /> : l.state === "lock" ? <Icon name="lock" size={14} stroke="var(--muted)" /> : l.idx}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="serif" style={{ fontSize: 18, color: "var(--ink)", lineHeight: 1.1 }}>{l.qu}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{t(l.en, l.es)} · {l.dur} min</div>
              </div>
              {l.state === "active" && <Icon name="play" size={20} stroke="var(--accent)" />}
              {l.state === "next" && <Icon name="chevron-r" size={18} stroke="var(--muted)" />}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "14px 22px 30px", borderTop: "1px solid var(--hairline)", background: "var(--bg)" }}>
        <KButton variant="accent" size="lg" full iconRight="arrow-r" onClick={onContinue}>{t("Continue lesson 3", "Continuar lección 3")}</KButton>
      </div>
    </div>
  );
};

export const VoicesList = ({ lang = "en", onBack, onOpenSpeaker }: { lang?: Lang; onBack?: () => void; onOpenSpeaker?: () => void }) => {
  const t = useT(lang);
  const voices = [
    { name: "María Quispe", village: "San Blás, Cusco", age: 64, phrases: 47, tone: "valley" as const },
    { name: "Tito Condori", village: "Pisaq", age: 38, phrases: 32, tone: "mountain" as const },
    { name: "Rosa Huamán", village: "Chinchero", age: 71, phrases: 28, tone: "sky" as const },
    { name: "Felipe Mamani", village: "Ollantaytambo", age: 52, phrases: 19, tone: "textile" as const },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="chevron-l" size={16} />
        </button>
        <div className="eyebrow">{t("Voices", "Voces")}</div>
        <div style={{ width: 36 }} />
      </div>
      <div style={{ padding: "24px 22px 0" }}>
        <div className="serif" style={{ fontSize: 32, lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.01em" }}>{t("Every voice has a name and a village.", "Cada voz tiene nombre y un pueblo.")}</div>
        <p style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 10, lineHeight: 1.5 }}>
          {t("No synthetic audio. Real grandmothers, farmers, weavers — recorded in their homes, with their consent and a share of every subscription.", "Sin audio sintético. Abuelas, agricultores, tejedoras reales — grabados en sus casas, con su consentimiento y una parte de cada suscripción.")}
        </p>
      </div>
      <div style={{ flex: 1, padding: "24px 22px 32px", display: "flex", flexDirection: "column", gap: 12 }}>
        {voices.map((v) => (
          <button key={v.name} onClick={onOpenSpeaker} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: 0, overflow: "hidden", display: "flex", gap: 0, textAlign: "left", alignItems: "stretch", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ width: 100, flexShrink: 0 }}>
              <PhotoPlaceholder ratio="auto" tone={v.tone} style={{ height: "100%", borderRadius: 0 }} />
            </div>
            <div style={{ flex: 1, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>{v.name}</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{v.village}</div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 2 }}>{t(`${v.age} years old · ${v.phrases} phrases`, `${v.age} años · ${v.phrases} frases`)}</div>
              <div style={{ marginTop: 6 }}>
                <Waveform playing={false} bars={14} color="var(--terracotta)" height={16} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", paddingRight: 14 }}>
              <Icon name="chevron-r" size={18} stroke="var(--muted)" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export const SpeakerDetail = ({ lang = "en", onBack }: { lang?: Lang; onBack?: () => void }) => {
  const t = useT(lang);
  const phrases = [
    { qu: "Allillanchu", en: "How are you?", es: "¿Cómo estás?" },
    { qu: "Sumaq pʼunchaw", en: "Beautiful day", es: "Hermoso día" },
    { qu: "Sulpayki", en: "Thank you", es: "Gracias" },
    { qu: "Tinkunakama", en: "See you later", es: "Hasta luego" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 320 }}>
        <PhotoPlaceholder ratio="auto" tone="valley" style={{ height: "100%", borderRadius: 0 }}>
          <div style={{ position: "absolute", top: 50, left: 18, right: 18, display: "flex", justifyContent: "space-between" }}>
            <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="chevron-l" size={16} stroke="#fff" />
            </button>
            <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="share" size={14} stroke="#fff" />
            </button>
          </div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.5), transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: 22, left: 22, right: 22, color: "#fff" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>San Blás, Cusco</div>
            <div className="serif" style={{ fontSize: 40, lineHeight: 1, marginTop: 6, letterSpacing: "-0.01em" }}>María Quispe</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>{t("Recording with us since 2024 · 47 phrases", "Grabando con nosotros desde 2024 · 47 frases")}</div>
          </div>
        </PhotoPlaceholder>
      </div>
      <div style={{ padding: "24px 22px 0" }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "20px 22px", boxShadow: "var(--shadow-sm)" }}>
          <Icon name="sparkle" size={18} stroke="var(--terracotta)" />
          <div className="serif" style={{ fontSize: 22, color: "var(--ink)", fontStyle: "italic", marginTop: 10, lineHeight: 1.3 }}>
            &ldquo;{t("I learned Quechua from my grandmother. Now I am the grandmother.", "Aprendí quechua de mi abuela. Ahora soy yo la abuela.")}&rdquo;
          </div>
          <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>— María</div>
        </div>
      </div>
      <div style={{ padding: "22px 22px 0", display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "color-mix(in oklab, var(--sage) 18%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="leaf" size={18} stroke="var(--sage-deep)" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{t("Supports the San Blás cooperative", "Apoya a la cooperativa San Blás")}</div>
          <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.5 }}>{t("20% of every subscription goes directly to María’s village cooperative.", "El 20% de cada suscripción va directo a la cooperativa de María.")}</div>
        </div>
      </div>
      <div style={{ padding: "24px 22px 32px", flex: 1 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{t("Phrases by María", "Frases por María")}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {phrases.map((p, i) => (
            <button key={i} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="play" size={12} stroke="#fff" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="serif" style={{ fontSize: 18, color: "var(--ink)" }}>{p.qu}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{t(p.en, p.es)}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const VocabLibrary = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const words = [
    { qu: "Allillanchu", en: "How are you?", es: "¿Cómo estás?", strength: 1.0 },
    { qu: "Sulpayki", en: "Thank you", es: "Gracias", strength: 1.0 },
    { qu: "Sumaq", en: "Beautiful", es: "Hermoso", strength: 0.85 },
    { qu: "Pʼunchaw", en: "Day", es: "Día", strength: 0.7 },
    { qu: "Munay", en: "Love · will", es: "Amor · voluntad", strength: 0.55 },
    { qu: "Ayllu", en: "Community", es: "Comunidad", strength: 0.4 },
    { qu: "Pacha", en: "Earth · time", es: "Tierra · tiempo", strength: 0.3 },
    { qu: "Yachay", en: "To know", es: "Saber", strength: 0.25 },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div className="eyebrow">{t("Your vocabulary", "Tu vocabulario")}</div>
          <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="menu" size={16} />
          </button>
        </div>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.0, color: "var(--ink)", letterSpacing: "-0.01em" }}>
          {t("34 words", "34 palabras")}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{t("in your heart", "en tu corazón")}</span>
        </div>
        <div style={{ marginTop: 24, height: 48, padding: "0 16px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-pill)", display: "flex", alignItems: "center", gap: 10 }}>
          <Icon name="sparkle" size={16} stroke="var(--muted)" />
          <span style={{ flex: 1, fontSize: 14, color: "var(--muted)" }}>{t("Search words…", "Buscar palabras…")}</span>
        </div>
        <div style={{ marginTop: 22, display: "flex", gap: 6, borderBottom: "1px solid var(--hairline)" }}>
          {[t("All", "Todas"), t("Mastered", "Dominadas"), t("Learning", "Aprendiendo")].map((tab, i) => (
            <button key={tab} style={{ padding: "10px 14px", borderBottom: i === 0 ? "2px solid var(--ink)" : "2px solid transparent", color: i === 0 ? "var(--ink)" : "var(--muted)", fontSize: 13, fontWeight: i === 0 ? 600 : 500 }}>{tab}</button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, padding: "14px 22px 32px", display: "flex", flexDirection: "column", gap: 4 }}>
        {words.map((w, i) => (
          <button key={i} style={{ padding: "14px 4px", borderBottom: i < words.length - 1 ? "1px solid var(--hairline)" : "none", display: "flex", alignItems: "center", gap: 14, textAlign: "left", background: "transparent" }}>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 22, color: "var(--ink)" }}>{w.qu}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{t(w.en, w.es)}</div>
            </div>
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} style={{ width: 4, height: 16, borderRadius: 2, background: w.strength >= n / 4 ? "var(--sage)" : "var(--hairline)" }} />
              ))}
            </div>
            <Icon name="play" size={14} stroke="var(--muted)" />
          </button>
        ))}
      </div>
      <div style={{ padding: "12px 22px 30px", borderTop: "1px solid var(--hairline)" }}>
        <KButton variant="accent" size="lg" full icon="sparkle">{t("Review weak words · 6", "Repasar débiles · 6")}</KButton>
      </div>
    </div>
  );
};
