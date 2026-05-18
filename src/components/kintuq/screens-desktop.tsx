"use client";
// Desktop / responsive variants
import { Icon, KButton, Waveform, TextileBand, DiamondMark, StatPill, PhotoPlaceholder, type Lang } from "./primitives";
import { DAILY_WORD } from "./screens";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

const DesktopNav = ({ active = "home", lang = "en" }: { active?: string; lang?: Lang }) => {
  const t = useT(lang);
  const items = [
    { id: "home", icon: "home", en: "Home", es: "Inicio" },
    { id: "lessons", icon: "book", en: "Lessons", es: "Lecciones" },
    { id: "word", icon: "sparkle", en: "Daily word", es: "Palabra del día" },
    { id: "voices", icon: "volume", en: "Voices", es: "Voces" },
    { id: "vocab", icon: "leaf", en: "Vocabulary", es: "Vocabulario" },
  ];
  return (
    <aside style={{ width: 240, flexShrink: 0, background: "var(--surface)", borderRight: "1px solid var(--hairline)", padding: "32px 16px", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 10px 28px", borderBottom: "1px solid var(--hairline)", marginBottom: 16 }}>
        <DiamondMark size={26} color="var(--ink)" />
        <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.01em" }}>Kintuq</div>
      </div>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((it) => (
          <button key={it.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, background: it.id === active ? "var(--ink)" : "transparent", color: it.id === active ? "var(--bg)" : "var(--ink-2)", fontSize: 14, fontWeight: it.id === active ? 600 : 500, transition: "all .15s ease", textAlign: "left" }}>
            <Icon name={it.icon} size={16} stroke={it.id === active ? "var(--bg)" : "var(--ink-2)"} />
            <span>{t(it.en, it.es)}</span>
          </button>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
      <div style={{ padding: "14px", borderRadius: 12, background: "color-mix(in oklab, var(--terracotta) 10%, var(--bg))", border: "1px solid color-mix(in oklab, var(--terracotta) 25%, var(--hairline))" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Icon name="flame" size={16} stroke="var(--terracotta)" />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--terracotta-deep)" }}>{t("7 day streak", "7 días")}</span>
        </div>
        <p style={{ fontSize: 11, color: "var(--ink-2)", margin: "6px 0 0", lineHeight: 1.4 }}>{t("Don’t break the kintu.", "No rompas el kintu.")}</p>
      </div>
      <button style={{ marginTop: 10, padding: "8px 10px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--hairline)", background: "var(--bg)", textAlign: "left" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontFamily: "var(--font-display)" }}>S</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Sara</div>
          <div style={{ fontSize: 10, color: "var(--muted)" }}>{t("Free plan", "Plan gratis")}</div>
        </div>
        <Icon name="chevron-r" size={14} stroke="var(--muted)" />
      </button>
    </aside>
  );
};

export const DashboardDesktop = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex" }}>
      <DesktopNav active="home" lang={lang} />
      <main style={{ flex: 1, padding: "40px 48px", overflowY: "auto", display: "flex", gap: 32 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="eyebrow">{t("Sunday morning · 17 May", "Domingo 17 mayo")}</div>
              <div className="serif" style={{ fontSize: 52, lineHeight: 1, color: "var(--ink)", marginTop: 10, letterSpacing: "-0.025em" }}>
                Allillanchu, <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>Sara</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <StatPill icon="flame" value="7" label={t("day streak", "días")} tone="flame" />
              <StatPill icon="star" value="1,240" label="XP" tone="gold" />
              <StatPill icon="leaf" value="3/3" label={t("today", "hoy")} tone="sage" />
            </div>
          </div>
          <button style={{ width: "100%", textAlign: "left", background: "var(--ink)", color: "var(--bg)", borderRadius: "var(--r-xl)", padding: "32px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "var(--shadow-lg)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.18 }}>
              <TextileBand height={18} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.18 }}>
              <TextileBand height={18} />
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>{t("Continue lesson", "Continuar lección")} · Unit 2</div>
              <div className="serif" style={{ fontSize: 44, marginTop: 12, letterSpacing: "-0.02em" }}>Allin pʼunchaw</div>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 6 }}>{t("Greetings of the day · 3 of 5 · 5 min", "Saludos del día · 3 de 5 · 5 min")}</div>
              <div style={{ marginTop: 18, width: 220, height: 6, background: "rgba(247,242,232,0.15)", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: "60%", height: "100%", background: "var(--accent)" }} />
              </div>
            </div>
            <div style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 12px rgba(217,119,87,0.18)", position: "relative" }}>
              <Icon name="play" size={32} stroke="#fff" />
            </div>
          </button>
          <div style={{ marginTop: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
              <div>
                <div className="eyebrow">{t("Your journey", "Tu camino")}</div>
                <div className="serif" style={{ fontSize: 24, marginTop: 4 }}>{t("Where you’ve been", "Por dónde has pasado")}</div>
              </div>
              <button style={{ fontSize: 12, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                {t("See all units", "Ver todas")} <Icon name="chevron-r" size={14} stroke="var(--muted)" />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {[
                { idx: 1, qu: "Napaykuy", en: "Greetings", es: "Saludos", state: "done", tone: "valley" as const },
                { idx: 2, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", state: "active", tone: "mountain" as const },
                { idx: 3, qu: "Qhatu", en: "At the market", es: "En el mercado", state: "next", tone: "sky" as const },
                { idx: 4, qu: "Mikhuna", en: "Andean food", es: "Comida andina", state: "lock", tone: "textile" as const },
              ].map((row) => (
                <div key={row.idx} style={{ background: "var(--surface)", border: row.state === "active" ? "1.5px solid var(--accent)" : "1px solid var(--hairline)", borderRadius: "var(--r-lg)", overflow: "hidden", opacity: row.state === "lock" ? 0.55 : 1, boxShadow: row.state === "active" ? "var(--shadow-md)" : "var(--shadow-sm)" }}>
                  <div style={{ height: 80, position: "relative" }}>
                    <PhotoPlaceholder ratio="auto" tone={row.tone} style={{ height: "100%", borderRadius: 0 }} />
                    {row.state === "done" && (
                      <div style={{ position: "absolute", top: 12, right: 12, width: 28, height: 28, borderRadius: "50%", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="check" size={14} stroke="#fff" />
                      </div>
                    )}
                    {row.state === "lock" && (
                      <div style={{ position: "absolute", top: 12, right: 12, width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="lock" size={12} stroke="#fff" />
                      </div>
                    )}
                  </div>
                  <div style={{ padding: 18 }}>
                    <div className="eyebrow" style={{ fontSize: 10 }}>Unit {String(row.idx).padStart(2, "0")}</div>
                    <div className="serif" style={{ fontSize: 22, marginTop: 4, color: row.state === "lock" ? "var(--muted)" : "var(--ink)" }}>{row.qu}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{t(row.en, row.es)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside style={{ width: 320, flexShrink: 0, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ background: "linear-gradient(180deg, var(--terracotta) 0%, color-mix(in oklab, var(--gold) 60%, var(--terracotta)) 100%)", color: "#fff", borderRadius: "var(--r-lg)", padding: "24px 22px", position: "relative", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.3 }}>
              <TextileBand height={12} />
            </div>
            <div style={{ position: "absolute", top: 60, right: -40, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,200,0.4), transparent 70%)" }} />
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.8)", position: "relative" }}>{t("Word of the day", "Palabra del día")}</div>
            <div className="serif" style={{ fontSize: 64, fontStyle: "italic", lineHeight: 1, marginTop: 12, position: "relative", letterSpacing: "-0.02em" }}>Munay</div>
            <div className="mono" style={{ fontSize: 11, opacity: 0.85, marginTop: 6, position: "relative" }}>/ˈmu.naj/</div>
            <div style={{ fontSize: 14, marginTop: 14, opacity: 0.95, position: "relative", lineHeight: 1.5 }}>{t("Love · will · to want", "Amor · voluntad · querer")}</div>
            <button style={{ marginTop: 18, padding: "8px 14px", borderRadius: 999, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", color: "#fff", fontSize: 12, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6, position: "relative" }}>
              <Icon name="play" size={12} stroke="#fff" />
              {t("Listen", "Escuchar")}
            </button>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
            <div style={{ height: 120 }}>
              <PhotoPlaceholder ratio="auto" tone="valley" style={{ height: "100%", borderRadius: 0 }} />
            </div>
            <div style={{ padding: 18 }}>
              <div className="eyebrow" style={{ fontSize: 10 }}>{t("Voice spotlight", "Voz destacada")}</div>
              <div className="serif" style={{ fontSize: 22, marginTop: 4 }}>María Quispe</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>San Blás, Cusco</div>
              <p style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 10, lineHeight: 1.5, fontStyle: "italic" }}>
                &ldquo;{t("I learned Quechua from my grandmother.", "Aprendí quechua de mi abuela.")}&rdquo;
              </p>
            </div>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: 18 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>{t("This week", "Esta semana")}</div>
            <div style={{ display: "flex", gap: 4 }}>
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => {
                const done = i < 5;
                const today = i === 5;
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ width: "100%", aspectRatio: "1", borderRadius: 8, background: done ? "var(--terracotta)" : today ? "color-mix(in oklab, var(--terracotta) 20%, var(--surface))" : "transparent", border: today ? "2px solid var(--terracotta)" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {done && <Icon name="flame" size={12} stroke="#fff" />}
                    </div>
                    <div style={{ fontSize: 10, color: "var(--muted)", fontWeight: 500 }}>{d}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export const DailyWordDesktop = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const text = lang === "en" ? DAILY_WORD.en : DAILY_WORD.es;
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ opacity: 0.45 }}>
        <TextileBand height={10} />
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={24} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 20, letterSpacing: "-0.01em" }}>Kintuq</div>
        </div>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500 }}>{t("Day 7 · word of the day", "Día 7 · palabra del día")}</div>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, border: "1px solid var(--hairline)", color: "var(--ink-2)" }}>{t("Share", "Compartir")}</button>
          <button style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, background: "var(--ink)", color: "var(--bg)" }}>{t("Open app", "Abrir app")}</button>
        </div>
      </div>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 48px 80px", position: "relative" }}>
        <div style={{ background: "linear-gradient(180deg, var(--terracotta) 0%, color-mix(in oklab, var(--gold) 60%, var(--terracotta)) 100%)", color: "#fff", borderRadius: "var(--r-xl)", overflow: "hidden", padding: "64px 56px", position: "relative", minHeight: 480 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.3 }}>
            <TextileBand height={18} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.3 }}>
            <TextileBand height={18} />
          </div>
          <div style={{ position: "absolute", top: 60, right: -120, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,200,0.45), transparent 70%)" }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>{t("Word of the day · May 17", "Palabra del día · 17 mayo")}</div>
              <h1 className="serif" style={{ fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.04em", fontStyle: "italic", margin: "12px 0 0", color: "#fff" }}>{DAILY_WORD.qu}</h1>
              <div style={{ marginTop: 24, display: "inline-flex", gap: 12, alignItems: "center", padding: "8px 16px", background: "rgba(0,0,0,0.18)", borderRadius: 999, fontSize: 13 }}>
                <span className="mono">{DAILY_WORD.ipa}</span>
                <span style={{ opacity: 0.6 }}>·</span>
                <span style={{ fontStyle: "italic" }}>{DAILY_WORD.pos}</span>
              </div>
              <div style={{ marginTop: 20, fontSize: 22, fontStyle: "italic", opacity: 0.95 }}>{text.gloss}</div>
            </div>
            <div>
              <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", borderRadius: "var(--r-lg)", padding: 22, border: "1px solid rgba(255,255,255,0.2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                  <button style={{ width: 56, height: 56, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="play" size={22} stroke="var(--terracotta)" />
                  </button>
                  <div>
                    <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: "0.14em", textTransform: "uppercase" }}>{t("Listen", "Escucha")}</div>
                    <div className="serif" style={{ fontSize: 18, fontStyle: "italic" }}>María Quispe</div>
                    <div style={{ fontSize: 11, opacity: 0.7 }}>San Blás, Cusco</div>
                  </div>
                </div>
                <Waveform playing={false} bars={32} color="#fff" height={32} />
                <div style={{ marginTop: 14, fontSize: 11, opacity: 0.65, display: "flex", justifyContent: "space-between" }}>
                  <span>0:00</span>
                  <span>0:02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>{t("From the highlands", "Desde las alturas")}</div>
          <p className="serif" style={{ fontSize: 26, lineHeight: 1.35, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em", textWrap: "pretty" }}>{text.body}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "28px" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{t("In a phrase", "En una frase")}</div>
            <div className="serif" style={{ fontSize: 30, color: "var(--terracotta)", fontStyle: "italic", lineHeight: 1.25 }}>&ldquo;{DAILY_WORD.example.qu}&rdquo;</div>
            <div style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 8 }}>{lang === "en" ? DAILY_WORD.example.en : DAILY_WORD.example.es}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { qu: "Munay", en: "love · will", es: "amor · voluntad", highlight: true },
              { qu: "Yachay", en: "knowing", es: "saber" },
              { qu: "Llankʼay", en: "work", es: "trabajo" },
            ].map((p) => (
              <div key={p.qu} style={{ background: p.highlight ? "color-mix(in oklab, var(--terracotta) 12%, var(--surface))" : "var(--surface)", border: p.highlight ? "1.5px solid var(--terracotta)" : "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "16px 14px", textAlign: "center" }}>
                <div className="serif" style={{ fontSize: 22, color: p.highlight ? "var(--terracotta)" : "var(--ink)", fontStyle: "italic" }}>{p.qu}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{t(p.en, p.es)}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--muted)", margin: 0, fontStyle: "italic", textAlign: "center" }}>{t("The three pillars of Andean being", "Los tres pilares del ser andino")}</p>
        </div>
      </section>
      <section style={{ background: "var(--ink)", color: "var(--bg)", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={14} />
        </div>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <DiamondMark size={36} color="var(--gold)" />
          <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.0, margin: "20px 0 0", letterSpacing: "-0.02em" }}>{t("Learn one Quechua word every day.", "Aprende una palabra de quechua cada día.")}</h2>
          <p style={{ fontSize: 16, color: "rgba(247,242,232,0.7)", maxWidth: 480, margin: "16px auto 0" }}>{t("Three minutes a day. Real Andean voices.", "Tres minutos al día. Voces andinas reales.")}</p>
          <button style={{ marginTop: 28, height: 56, padding: "0 32px", borderRadius: 999, background: "var(--accent)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10 }}>
            {t("Begin your kintu", "Comienza tu kintu")}
            <Icon name="arrow-r" size={16} stroke="#fff" />
          </button>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={14} />
        </div>
      </section>
    </div>
  );
};

export const LessonDesktop = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 48px", borderBottom: "1px solid var(--hairline)", display: "flex", alignItems: "center", gap: 24, background: "color-mix(in oklab, var(--surface) 80%, var(--bg))", backdropFilter: "blur(8px)" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={20} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 16 }}>Kintuq</div>
        </div>
        <div style={{ flex: 1, maxWidth: 480, margin: "0 auto", height: 6, background: "var(--hairline)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: "45%", height: "100%", background: "var(--accent)" }} />
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--terracotta)", fontWeight: 600, fontSize: 14 }}>
          <Icon name="heart" size={16} stroke="var(--terracotta)" />
          <span>5</span>
        </div>
        <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>2/5</div>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 380px", overflow: "hidden" }}>
        <div style={{ overflowY: "auto", padding: "56px 80px", display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", width: "100%" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{t("Listen and feel", "Escucha y siente")}</div>
            <div className="serif" style={{ fontSize: 28, color: "var(--ink-2)", lineHeight: 1.3, marginBottom: 36, letterSpacing: "-0.01em" }}>{t("Listen to the phrase, then reveal its meaning.", "Escucha la frase, luego revela su significado.")}</div>
            <div style={{ background: "var(--surface)", borderRadius: "var(--r-xl)", border: "1px solid var(--hairline)", padding: "40px 36px", boxShadow: "var(--shadow-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
                <button style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--ink)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)" }}>
                  <Icon name="play" size={28} stroke="var(--bg)" />
                </button>
                <div style={{ flex: 1 }}>
                  <Waveform playing={true} bars={26} color="var(--accent)" height={48} />
                </div>
              </div>
              <div className="serif" style={{ fontSize: 72, lineHeight: 1.0, color: "var(--ink)", letterSpacing: "-0.025em" }}>Allillanchu</div>
              <div className="mono" style={{ fontSize: 14, color: "var(--muted)", marginTop: 10 }}>/a.ʊiˈʎan.tʃu/</div>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--muted)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, var(--sage), var(--gold))" }} />
                María Quispe · San Blás
              </div>
            </div>
            <button style={{ marginTop: 20, width: "100%", background: "var(--surface)", border: "1.5px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "24px 28px", textAlign: "left" }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>{t("Meaning", "Significado")}</div>
              <div style={{ fontSize: 22, color: "var(--ink)", fontWeight: 500 }}>How are you? (Are you well?)</div>
              <div style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 6, fontStyle: "italic" }}>¿Cómo estás? (¿Estás bien?)</div>
            </button>
            <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
              <KButton variant="accent" size="lg" iconRight="arrow-r" style={{ minWidth: 280 }}>{t("Continue", "Continuar")}</KButton>
            </div>
          </div>
        </div>
        <aside style={{ borderLeft: "1px solid var(--hairline)", background: "color-mix(in oklab, var(--surface) 60%, var(--bg))", padding: "40px 32px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{t("The voice", "La voz")}</div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                <PhotoPlaceholder ratio="auto" tone="valley" style={{ height: "100%", borderRadius: 12 }} />
              </div>
              <div>
                <div className="serif" style={{ fontSize: 20 }}>María Quispe</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>San Blás, Cusco · 64</div>
                <button style={{ marginTop: 6, fontSize: 11, color: "var(--terracotta)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 2 }}>
                  {t("Read her story", "Leer su historia")}
                  <Icon name="arrow-up-right" size={11} stroke="var(--terracotta)" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>{t("From the highlands", "Desde las alturas")}</div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <DiamondMark size={20} color="var(--terracotta)" />
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", textWrap: "pretty" }}>
                {t("In Quechua, greetings often ask about wellness. Allillanchu literally asks: are you well? The expected reply is allillanmi — I am.", "En quechua, los saludos preguntan por el bienestar. Allillanchu literalmente pregunta: ¿estás bien? La respuesta esperada es allillanmi — sí, estoy bien.")}
              </p>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{t("Related phrases", "Frases relacionadas")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { qu: "Allillanmi", en: "I am well" },
                { qu: "Sumaq pʼunchaw", en: "Beautiful day" },
                { qu: "Tinkunakama", en: "See you later" },
              ].map((p, i) => (
                <button key={i} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="play" size={10} stroke="#fff" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="serif" style={{ fontSize: 16, color: "var(--ink)" }}>{p.qu}</div>
                    <div style={{ fontSize: 11, color: "var(--muted)" }}>{p.en}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>{t("Roots", "Raíces")}</div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: 10, padding: "12px 14px" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.5 }}>allin (good) + lla (kindly) + n (3rd) + chu (?)</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
