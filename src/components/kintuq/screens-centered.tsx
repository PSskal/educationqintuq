"use client";
// Centered web layout — brilliant.org inspired
import * as React from "react";
import { Icon, Waveform, TextileBand, DiamondMark, PhotoPlaceholder, StatPill, type Lang } from "./primitives";
import { DAILY_WORD, LESSON } from "./screens";
import type { KintuqDashboardData, KintuqUnit, KintuqVocabularyItem } from "@/lib/kintuq-demo";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const DashboardCentered = ({ lang = "en", data }: { lang?: Lang; data?: KintuqDashboardData | null }) => {
  const t = useT(lang);
  const userName = data?.user.name || "Sara";
  const stats = data?.stats ?? { streakDays: 7, xp: 1240, todayCompleted: 3, todayGoal: 3 };
  const lesson = data?.activeLesson;
  const dailyWord = data?.dailyWord;
  const units = data?.units;
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "color-mix(in oklab, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <DiamondMark size={22} color="var(--ink)" />
            <div className="serif" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>Kintuq</div>
          </div>
          <nav style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--ink-2)" }}>
            <a href="/dashboard" style={{ color: "var(--ink)", fontWeight: 600, textDecoration: "none" }}>{t("Home", "Inicio")}</a>
            <a href="/library" style={{ color: "inherit", textDecoration: "none" }}>{t("Lessons", "Lecciones")}</a>
            <a href="/word" style={{ color: "inherit", textDecoration: "none" }}>{t("Word", "Palabra")}</a>
            <a href="/voices" style={{ color: "inherit", textDecoration: "none" }}>{t("Voices", "Voces")}</a>
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
      <main style={{ maxWidth: 680, margin: "0 auto", padding: "72px 32px 90px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 28 }}>
          <div>
            <div className="eyebrow">{t("Sunday morning", "Domingo por la mañana")}</div>
            <h1 className="serif" style={{ fontSize: 56, lineHeight: 1.02, color: "var(--ink)", margin: "8px 0 0", letterSpacing: "-0.025em", textWrap: "balance" }}>
              Allillanchu,
              <br />
              <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>{userName.split(" ")[0]}</span>
            </h1>
          </div>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #D97757, #E5B86A)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 20, fontFamily: "var(--font-display)", flexShrink: 0 }}>{userName.charAt(0).toUpperCase()}</div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
          <StatPill icon="flame" value={stats.streakDays} label={t("day streak", "días")} tone="flame" />
          <StatPill icon="star" value={stats.xp.toLocaleString()} label="XP" tone="gold" />
          <StatPill icon="leaf" value={`${stats.todayCompleted}/${stats.todayGoal}`} label={t("today", "hoy")} tone="sage" />
        </div>

        <a href="/lesson" style={{ marginTop: 36, background: "var(--ink)", color: "var(--bg)", borderRadius: "var(--r-xl)", padding: "28px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden", textDecoration: "none" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.4 }}>
            <TextileBand height={10} />
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>{t("Continue lesson", "Continuar lección")}</div>
            <div className="serif" style={{ fontSize: 34, marginTop: 8, lineHeight: 1.05 }}>{lesson?.title ?? LESSON.title.qu}</div>
            <div style={{ fontSize: 14, opacity: 0.7, marginTop: 6 }}>{lesson ? t(lesson.titleEn, lesson.titleEs) : t(LESSON.title.en, LESSON.title.es)} · {lesson?.estimatedMinutes ?? 5} min</div>
          </div>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
            <Icon name="play" size={22} stroke="#fff" />
          </div>
        </a>

        <section style={{ marginTop: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
            <div className="eyebrow">{t("Word of the day", "Palabra del día")}</div>
            <a href="/word" style={{ fontSize: 13, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 3, textDecoration: "none" }}>
              {t("Open", "Abrir")} <Icon name="chevron-r" size={14} stroke="var(--muted)" />
            </a>
          </div>
          <a href="/word" style={{ textDecoration: "none", background: "var(--surface)", borderRadius: "var(--r-xl)", border: "1px solid var(--hairline)", padding: "24px 26px", display: "flex", alignItems: "center", gap: 20, boxShadow: "var(--shadow-sm)" }}>
            <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(135deg, var(--gold), var(--terracotta))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <DiamondMark size={36} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 38, color: "var(--ink)", lineHeight: 1 }}>{dailyWord?.quechua ?? DAILY_WORD.qu}</div>
              <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>{dailyWord ? (lang === "en" ? dailyWord.meaningEn : dailyWord.meaningEs) : lang === "en" ? DAILY_WORD.en.gloss : DAILY_WORD.es.gloss}</div>
            </div>
            <Icon name="volume" size={22} stroke="var(--muted)" />
          </a>
        </section>

        <section style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>{t("Your journey", "Tu camino")}</div>
          {(units?.slice(0, 4).map((unit, index) => ({
            idx: unit.order,
            qu: unit.title,
            en: unit.subtitleEn,
            es: unit.subtitleEs,
            state: unit.locked ? "lock" : unit.lessonsDone === unit.lessonsTotal ? "done" : index === 1 ? "active" : "next",
          })) ?? [
            { idx: 1, qu: "Napaykuy", en: "Greetings", es: "Saludos", state: "done" },
            { idx: 2, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", state: "active" },
            { idx: 3, qu: "Qhatu", en: "At the market", es: "En el mercado", state: "next" },
            { idx: 4, qu: "Mikhuna", en: "Andean food", es: "Comida andina", state: "lock" },
          ]).map((row, i, arr) => (
            <div key={row.idx} style={{ display: "flex", gap: 18, alignItems: "stretch" }}>
              <div style={{ width: 38, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: row.state === "done" ? "var(--sage)" : row.state === "active" ? "var(--accent)" : row.state === "next" ? "var(--surface)" : "transparent",
                    border: row.state === "next" ? "1.5px dashed var(--hairline)" : row.state === "lock" ? "1.5px solid var(--hairline)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: row.state === "done" || row.state === "active" ? "#fff" : "var(--muted)",
                    fontSize: 13,
                    fontWeight: 600,
                    boxShadow: row.state === "active" ? "0 0 0 5px color-mix(in oklab, var(--accent) 18%, transparent)" : "none",
                  }}
                >
                  {row.state === "done" ? <Icon name="check" size={17} stroke="#fff" /> : row.state === "lock" ? <Icon name="lock" size={15} stroke="var(--muted)" /> : row.idx}
                </div>
                {i < arr.length - 1 && <div style={{ flex: 1, width: 1.5, minHeight: 26, background: row.state === "done" ? "var(--sage)" : "var(--hairline)" }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: 24 }}>
                <div className="serif" style={{ fontSize: 25, color: row.state === "lock" ? "var(--muted)" : "var(--ink)" }}>{row.qu}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 3 }}>{t(row.en, row.es)}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export const LessonCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const [playing, setPlaying] = React.useState(true);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setPlaying(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px 32px", borderBottom: "1px solid var(--hairline)", background: "color-mix(in oklab, var(--bg) 92%, transparent)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 24 }}>
        <a href="/dashboard" aria-label={t("Close lesson", "Cerrar lección")} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink)", textDecoration: "none" }}>
          <Icon name="x" size={16} />
        </a>
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
            <button onClick={() => setPlaying((value) => !value)} style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px color-mix(in oklab, var(--ink) 6%, transparent), var(--shadow-md)" }}>
              <Icon name={playing ? "pause" : "play"} size={36} stroke="var(--bg)" />
            </button>
            <div style={{ width: 320 }}>
              <Waveform playing={playing} bars={24} color="var(--terracotta)" height={36} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--muted)" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, var(--sage), var(--gold))" }} />
              María Quispe · San Blás
            </div>
          </div>
          <button onClick={() => setRevealed(true)} style={{ marginTop: 56, width: "100%", background: revealed ? "var(--surface)" : "transparent", border: revealed ? "1px solid var(--hairline)" : "1.5px dashed var(--hairline)", borderRadius: "var(--r-lg)", padding: "28px 32px", textAlign: "left", display: "flex", alignItems: revealed ? "flex-start" : "center", gap: 14, color: revealed ? "var(--ink)" : "var(--muted)" }}>
            <Icon name="sparkle" size={18} stroke={revealed ? "var(--terracotta)" : "var(--muted)"} />
            {revealed ? (
              <span>
                <span style={{ display: "block", fontSize: 18, fontWeight: 500 }}>{t("How are you? (Are you well?)", "¿Cómo estás? (¿Estás bien?)")}</span>
                <span style={{ display: "block", fontSize: 13, color: "var(--ink-2)", marginTop: 8, lineHeight: 1.5 }}>
                  {t("A common greeting at any time of day, used between equals.", "Saludo común a cualquier hora, usado entre iguales.")}
                </span>
              </span>
            ) : (
              <span style={{ fontSize: 15 }}>{t("Tap to reveal meaning", "Toca para revelar el significado")}</span>
            )}
          </button>
        </main>
        <div style={{ borderTop: "1px solid var(--hairline)", background: "color-mix(in oklab, var(--bg) 95%, transparent)", backdropFilter: "blur(8px)", padding: "20px 32px", display: "flex", justifyContent: "center" }}>
          {revealed ? (
            <a href="/lesson/complete" style={{ height: 56, minWidth: 320, padding: "0 32px", borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none" }}>
              {t("Continue", "Continuar")}
              <Icon name="arrow-r" size={16} stroke="#fff" />
            </a>
          ) : (
            <button onClick={() => setRevealed(true)} style={{ height: 56, minWidth: 320, padding: "0 32px", borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              {t("Check", "Comprobar")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const DailyWordCentered = ({ lang = "en", word }: { lang?: Lang; word?: KintuqVocabularyItem | null }) => {
  const t = useT(lang);
  const selectedWord = word;
  const text = selectedWord
    ? {
        gloss: lang === "en" ? selectedWord.meaningEn : selectedWord.meaningEs,
        body: lang === "en" ? selectedWord.bodyEn ?? selectedWord.meaningEn : selectedWord.bodyEs ?? selectedWord.meaningEs,
      }
    : lang === "en"
      ? DAILY_WORD.en
      : DAILY_WORD.es;
  const [playing, setPlaying] = React.useState(false);

  const shareWord = async () => {
    const body = `${selectedWord?.quechua ?? DAILY_WORD.qu} - ${text.gloss}`;
    if (navigator.share) {
      await navigator.share({ title: "Kintuq", text: body, url: window.location.href });
      return;
    }
    await navigator.clipboard?.writeText(`${body} ${window.location.href}`);
  };

  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={20} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 18 }}>Kintuq</div>
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>{t("Word of the day · May 17", "Palabra del día · 17 mayo")}</div>
        <button onClick={shareWord} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 12, border: "1px solid var(--hairline)", color: "var(--ink-2)", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Icon name="share" size={12} stroke="var(--ink-2)" />
          {t("Share", "Compartir")}
        </button>
      </div>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "64px 32px 80px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 className="serif" style={{ fontSize: 168, lineHeight: 0.9, color: "var(--terracotta)", fontStyle: "italic", letterSpacing: "-0.04em", margin: 0 }}>{selectedWord?.quechua ?? DAILY_WORD.qu}</h1>
          <div style={{ marginTop: 24, display: "inline-flex", gap: 12, alignItems: "center", padding: "8px 16px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: 999, fontSize: 13 }}>
            <span className="mono" style={{ color: "var(--ink-2)" }}>{selectedWord?.ipa ?? DAILY_WORD.ipa}</span>
            <span style={{ color: "var(--muted)" }}>·</span>
            <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>{selectedWord?.partOfSpeech ?? DAILY_WORD.pos}</span>
          </div>
          <div className="serif" style={{ fontSize: 28, fontStyle: "italic", color: "var(--ink-2)", marginTop: 28, letterSpacing: "-0.01em" }}>{text.gloss}</div>
        </div>
        <div style={{ marginTop: 56, padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xl)", display: "flex", alignItems: "center", gap: 18, boxShadow: "var(--shadow-sm)" }}>
          <button onClick={() => setPlaying((value) => !value)} style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name={playing ? "pause" : "play"} size={20} stroke="var(--bg)" />
          </button>
          <div style={{ flex: 1 }}>
            <Waveform playing={playing} bars={24} color="var(--terracotta)" height={28} />
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>{t("Voice: María Quispe · San Blás, Cusco", "Voz: María Quispe · San Blás, Cusco")}</div>
          </div>
        </div>
        <div style={{ marginTop: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 18, textAlign: "center" }}>{t("From the highlands", "Desde las alturas")}</div>
          <p className="serif" style={{ fontSize: 26, lineHeight: 1.4, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em", textWrap: "pretty", textAlign: "center" }}>{text.body}</p>
        </div>
        <div style={{ marginTop: 72, padding: "40px 40px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{t("In a phrase", "En una frase")}</div>
          <div className="serif" style={{ fontSize: 38, color: "var(--terracotta)", fontStyle: "italic", lineHeight: 1.25, letterSpacing: "-0.01em" }}>&ldquo;{selectedWord?.exampleQuechua ?? DAILY_WORD.example.qu}&rdquo;</div>
          <div style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 12, fontStyle: "italic" }}>{selectedWord ? (lang === "en" ? selectedWord.exampleEn : selectedWord.exampleEs) : lang === "en" ? DAILY_WORD.example.en : DAILY_WORD.example.es}</div>
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
          <a href="/lesson" style={{ height: 56, padding: "0 36px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            {t("Learn a Quechua phrase today", "Aprende una frase de quechua hoy")}
            <Icon name="arrow-r" size={16} stroke="var(--bg)" />
          </a>
          <div style={{ marginTop: 16, fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>{t("Three minutes · real Andean voices", "Tres minutos · voces andinas reales")}</div>
        </div>
      </main>
    </div>
  );
};

const CenteredTopBar = ({ lang, active }: { lang: Lang; active: "home" | "lessons" | "word" | "profile" }) => {
  const t = useT(lang);
  const links = [
    { id: "home", label: t("Home", "Inicio"), href: "/dashboard" },
    { id: "lessons", label: t("Lessons", "Lecciones"), href: "/library" },
    { id: "word", label: t("Word", "Palabra"), href: "/word" },
    { id: "profile", label: t("Profile", "Perfil"), href: "/profile" },
  ] as const;
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 10, background: "color-mix(in oklab, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--hairline)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={22} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>Kintuq</div>
        </div>
        <nav style={{ display: "flex", gap: 26, fontSize: 13, color: "var(--ink-2)" }}>
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                color: active === link.id ? "var(--ink)" : "var(--ink-2)",
                fontWeight: active === link.id ? 600 : 500,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 13, fontFamily: "var(--font-display)" }}>S</div>
      </div>
    </div>
  );
};

export const LibraryCentered = ({ lang = "en", units: unitsProp }: { lang?: Lang; units?: KintuqUnit[] | null }) => {
  const t = useT(lang);
  const units = unitsProp ?? [
    { id: "1", order: 1, title: "Napaykuy", subtitleEn: "Greetings", subtitleEs: "Saludos", lessonsDone: 5, lessonsTotal: 5, tone: "valley" as const, locked: false },
    { id: "2", order: 2, title: "Allin pʼunchaw", subtitleEn: "Greetings of the day", subtitleEs: "Saludos del día", lessonsDone: 3, lessonsTotal: 5, tone: "mountain" as const, locked: false },
    { id: "3", order: 3, title: "Qhatu", subtitleEn: "At the market", subtitleEs: "En el mercado", lessonsDone: 0, lessonsTotal: 6, tone: "sky" as const, locked: false },
    { id: "4", order: 4, title: "Mikhuna", subtitleEn: "Andean food", subtitleEs: "Comida andina", lessonsDone: 0, lessonsTotal: 7, tone: "textile" as const, locked: true },
  ];
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <CenteredTopBar lang={lang} active="lessons" />
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "72px 32px 90px" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Course path", "Ruta del curso")}</div>
        <h1 className="serif" style={{ fontSize: 56, lineHeight: 1.02, color: "var(--ink)", margin: 0, letterSpacing: "-0.025em", textWrap: "balance" }}>
          {t("Build Quechua one small ritual at a time.", "Construye tu quechua con pequeños rituales.")}
        </h1>
        <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 16, maxWidth: 560 }}>
          {t("A focused path of listening, speaking, and cultural context. Each unit stays short enough to finish in a few minutes.", "Una ruta enfocada en escuchar, hablar y entender el contexto cultural. Cada unidad se mantiene breve.")}
        </p>
        <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 14 }}>
          {units.map((unit) => {
            const active = unit.lessonsDone > 0 && unit.lessonsDone < unit.lessonsTotal;
            return (
            <button key={unit.id} disabled={unit.locked} onClick={() => !unit.locked && (window.location.href = "/library/unit")} style={{ background: "var(--surface)", border: active ? "1.5px solid var(--terracotta)" : "1px solid var(--hairline)", borderRadius: "var(--r-xl)", padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "148px 1fr", textAlign: "left", boxShadow: active ? "var(--shadow-md)" : "var(--shadow-sm)", opacity: unit.locked ? 0.55 : 1, cursor: unit.locked ? "not-allowed" : "pointer" }}>
              <PhotoPlaceholder ratio="auto" tone={unit.tone} style={{ height: "100%", minHeight: 142, borderRadius: 0 }} />
              <div style={{ padding: "24px 28px", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div className="eyebrow">{t("Unit", "Unidad")} {String(unit.order).padStart(2, "0")}</div>
                  <div className="serif" style={{ fontSize: 34, color: "var(--ink)", lineHeight: 1.05, marginTop: 8, fontStyle: "italic" }}>{unit.title}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>{t(unit.subtitleEn, unit.subtitleEs)}</div>
                  <div style={{ marginTop: 18, height: 6, background: "var(--hairline)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${(unit.lessonsDone / unit.lessonsTotal) * 100}%`, height: "100%", background: unit.lessonsDone === unit.lessonsTotal ? "var(--sage)" : "var(--terracotta)" }} />
                  </div>
                </div>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: unit.locked ? "transparent" : "var(--ink)", border: unit.locked ? "1.5px dashed var(--hairline)" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={unit.locked ? "lock" : unit.lessonsDone === unit.lessonsTotal ? "check" : "arrow-r"} size={18} stroke={unit.locked ? "var(--muted)" : "var(--bg)"} />
                </div>
              </div>
            </button>
          );
          })}
        </div>
      </main>
    </div>
  );
};

export const UnitDetailCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const lessons = [
    { idx: 1, qu: "Imatataq sutiyki?", en: "What is your name?", es: "¿Cómo te llamas?", dur: 5, state: "done" },
    { idx: 2, qu: "Sutiyqa…", en: "My name is…", es: "Me llamo…", dur: 5, state: "done" },
    { idx: 3, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", dur: 5, state: "active" },
    { idx: 4, qu: "Sumaq tuta", en: "Beautiful night", es: "Hermosa noche", dur: 4, state: "next" },
    { idx: 5, qu: "Tinkunakama", en: "See you later", es: "Hasta luego", dur: 6, state: "lock" },
  ];
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <CenteredTopBar lang={lang} active="lessons" />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "54px 32px 90px" }}>
        <a href="/library" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--muted)", textDecoration: "none", fontSize: 13, marginBottom: 28 }}>
          <Icon name="arrow-l" size={15} stroke="var(--muted)" />
          {t("All units", "Todas las unidades")}
        </a>

        <section style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-xl)", boxShadow: "var(--shadow-md)", border: "1px solid var(--hairline)" }}>
          <PhotoPlaceholder ratio="21/9" tone="mountain" style={{ borderRadius: 0 }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(42,31,23,0.74), rgba(42,31,23,0.18))" }} />
            <div style={{ position: "absolute", inset: 0, padding: "42px 44px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div className="eyebrow" style={{ color: "rgba(255,255,255,0.72)" }}>{t("Unit 02", "Unidad 02")}</div>
              <h1 className="serif" style={{ fontSize: 64, lineHeight: 0.95, margin: "10px 0 0", letterSpacing: "-0.03em", fontStyle: "italic" }}>Allin p&apos;unchaw</h1>
              <div style={{ fontSize: 16, opacity: 0.86, marginTop: 10 }}>{t("Greetings of the day", "Saludos del día")}</div>
            </div>
          </PhotoPlaceholder>
        </section>

        <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
          <StatPill icon="book" value="5" label={t("lessons", "lecciones")} />
          <StatPill icon="star" value="120" label="XP" tone="gold" />
          <StatPill icon="leaf" value="3/5" label={t("complete", "completo")} tone="sage" />
        </div>

        <section style={{ marginTop: 44 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{t("Lessons in this unit", "Lecciones de esta unidad")}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {lessons.map((lesson) => {
              const locked = lesson.state === "lock";
              const active = lesson.state === "active";
              const href = active ? "/lesson" : locked ? undefined : "/lesson";
              const content = (
                <>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: lesson.state === "done" ? "var(--sage)" : active ? "var(--terracotta)" : locked ? "transparent" : "var(--surface)", border: locked || lesson.state === "next" ? "1.5px dashed var(--hairline)" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: lesson.state === "done" || active ? "#fff" : "var(--muted)", fontSize: 14, fontWeight: 600 }}>
                    {lesson.state === "done" ? <Icon name="check" size={17} stroke="#fff" /> : locked ? <Icon name="lock" size={15} stroke="var(--muted)" /> : lesson.idx}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="serif" style={{ fontSize: 26, color: locked ? "var(--muted)" : "var(--ink)", lineHeight: 1.05 }}>{lesson.qu}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 5 }}>{t(lesson.en, lesson.es)} · {lesson.dur} min</div>
                  </div>
                  {active && <Icon name="play" size={20} stroke="var(--terracotta)" />}
                  {lesson.state === "next" && <Icon name="chevron-r" size={19} stroke="var(--muted)" />}
                </>
              );

              if (href) {
                return (
                  <a key={lesson.idx} href={href} style={{ background: active ? "color-mix(in oklab, var(--terracotta) 8%, var(--surface))" : "var(--surface)", border: active ? "1.5px solid var(--terracotta)" : "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "18px 20px", textDecoration: "none", display: "flex", alignItems: "center", gap: 16, boxShadow: active ? "var(--shadow-sm)" : "none" }}>
                    {content}
                  </a>
                );
              }

              return (
                <div key={lesson.idx} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "18px 20px", display: "flex", alignItems: "center", gap: 16, opacity: 0.55 }}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <div style={{ marginTop: 42, display: "flex", justifyContent: "center" }}>
          <a href="/lesson" style={{ height: 56, padding: "0 34px", borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none" }}>
            {t("Continue lesson 3", "Continuar lección 3")}
            <Icon name="arrow-r" size={16} stroke="#fff" />
          </a>
        </div>
      </main>
    </div>
  );
};

export const VocabularyCentered = ({ lang = "en", vocabulary }: { lang?: Lang; vocabulary?: KintuqVocabularyItem[] | null }) => {
  const t = useT(lang);
  const [playingWord, setPlayingWord] = React.useState<string | null>(null);
  const words = vocabulary ?? [
    { id: "1", quechua: "Allillanchu", meaningEn: "How are you?", meaningEs: "¿Cómo estás?", strength: 1 },
    { id: "2", quechua: "Sulpayki", meaningEn: "Thank you", meaningEs: "Gracias", strength: 1 },
    { id: "3", quechua: "Sumaq", meaningEn: "Beautiful", meaningEs: "Hermoso", strength: 0.75 },
    { id: "4", quechua: "Munay", meaningEn: "Love · will", meaningEs: "Amor · voluntad", strength: 0.5 },
    { id: "5", quechua: "Pacha", meaningEn: "Earth · time", meaningEs: "Tierra · tiempo", strength: 0.25 },
  ];
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <CenteredTopBar lang={lang} active="word" />
      <main style={{ maxWidth: 680, margin: "0 auto", padding: "72px 32px 90px" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Vocabulary", "Vocabulario")}</div>
        <h1 className="serif" style={{ fontSize: 56, lineHeight: 1.02, margin: 0, color: "var(--ink)", letterSpacing: "-0.025em" }}>
          {t("34 words", "34 palabras")} <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>{t("in your heart.", "en tu corazón.")}</span>
        </h1>
        <div style={{ marginTop: 36, height: 56, padding: "0 20px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: 999, display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow-sm)" }}>
          <Icon name="sparkle" size={16} stroke="var(--muted)" />
          <span style={{ color: "var(--muted)", fontSize: 15 }}>{t("Search words...", "Buscar palabras...")}</span>
        </div>
        <div style={{ marginTop: 34, borderTop: "1px solid var(--hairline)" }}>
          {words.map((word) => (
            <button key={word.id} onClick={() => setPlayingWord((current) => (current === word.quechua ? null : word.quechua))} style={{ width: "100%", padding: "22px 0", borderBottom: "1px solid var(--hairline)", display: "flex", alignItems: "center", gap: 22, textAlign: "left" }}>
              <div style={{ flex: 1 }}>
                <div className="serif" style={{ fontSize: 32, color: "var(--ink)", fontStyle: "italic", lineHeight: 1 }}>{word.quechua}</div>
                <div style={{ marginTop: 8, fontSize: 14, color: "var(--ink-2)" }}>{t(word.meaningEn, word.meaningEs)}</div>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4].map((level) => (
                  <div key={level} style={{ width: 5, height: 24, borderRadius: 3, background: word.strength * 4 >= level ? "var(--sage)" : "var(--hairline)" }} />
                ))}
              </div>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={playingWord === word.quechua ? "pause" : "play"} size={14} stroke="var(--terracotta)" />
              </div>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="/lesson" style={{ height: 56, padding: "0 32px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            {t("Review weak words", "Repasar palabras débiles")}
            <Icon name="arrow-r" size={16} stroke="var(--bg)" />
          </a>
        </div>
      </main>
    </div>
  );
};

export const ProfileCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)" }}>
      <CenteredTopBar lang={lang} active="profile" />
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "72px 32px 90px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 38, fontFamily: "var(--font-display)", flexShrink: 0 }}>S</div>
          <div>
            <div className="eyebrow">{t("Your journey", "Tu camino")}</div>
            <h1 className="serif" style={{ fontSize: 52, lineHeight: 1.02, margin: "8px 0 0", color: "var(--ink)", letterSpacing: "-0.025em" }}>Sara Mendoza</h1>
            <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>{t("Learning since March · A1", "Aprendiendo desde marzo · A1")}</div>
          </div>
        </div>
        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {[
            { v: "1,240", l: "XP" },
            { v: "7", l: t("day streak", "días de racha") },
            { v: "34", l: t("words", "palabras") },
          ].map((stat) => (
            <div key={stat.l} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "24px 22px", boxShadow: "var(--shadow-sm)" }}>
              <div className="serif" style={{ fontSize: 40, lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.02em" }}>{stat.v}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>{stat.l}</div>
            </div>
          ))}
        </div>
        <section style={{ marginTop: 54 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{t("Last 12 weeks", "Últimas 12 semanas")}</div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 6 }}>
              {Array.from({ length: 84 }, (_, i) => {
                const value = (Math.sin(i * 0.6) + 1) / 2;
                return <div key={i} style={{ aspectRatio: "1", borderRadius: 4, background: value < 0.2 ? "var(--hairline)" : value < 0.55 ? "color-mix(in oklab, var(--accent) 38%, var(--surface))" : "var(--accent)" }} />;
              })}
            </div>
          </div>
        </section>
        <section style={{ marginTop: 54 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>{t("Achievements", "Logros")}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { icon: "flame", label: t("7-day flame", "Llama 7 días") },
              { icon: "leaf", label: t("First kintu", "Primer kintu") },
              { icon: "star", label: "1,000 XP" },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "22px 18px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "color-mix(in oklab, var(--terracotta) 12%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                  <Icon name={item.icon} size={20} stroke="var(--terracotta)" />
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 10 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export const CompletionCentered = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const finishLesson = async () => {
    await fetch("/api/kintuq/lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId: "lesson-day-greetings-3" }),
    }).catch(() => null);
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <CenteredTopBar lang={lang} active="home" />
      <main style={{ width: "100%", maxWidth: 680, margin: "0 auto", padding: "86px 32px 90px", textAlign: "center" }}>
        <div style={{ width: 140, height: 140, margin: "0 auto", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold), var(--terracotta))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 14px color-mix(in oklab, var(--gold) 18%, transparent), var(--shadow-md)" }}>
          <DiamondMark size={76} color="#fff" />
        </div>
        <div className="eyebrow" style={{ marginTop: 38, marginBottom: 10 }}>{t("Lesson complete", "Lección completada")}</div>
        <h1 className="serif" style={{ fontSize: 72, lineHeight: 0.98, color: "var(--ink)", margin: 0, letterSpacing: "-0.03em" }}>
          Sumaqllataq!
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", margin: "16px auto 0", lineHeight: 1.55, maxWidth: 460 }}>
          {t("Beautifully done. The mountain heard you.", "Hermoso trabajo. La montaña te escuchó.")}
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <StatPill icon="star" value="+30" label="XP" tone="gold" />
          <StatPill icon="flame" value="8" label={t("day streak", "días")} tone="flame" />
          <StatPill icon="leaf" value="3/3" label={t("today", "hoy")} tone="sage" />
        </div>

        <div style={{ marginTop: 54, background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-xl)", padding: "32px 36px", boxShadow: "var(--shadow-sm)", textAlign: "left" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>{t("Your journey", "Tu camino")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="check" size={20} stroke="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 28, lineHeight: 1, color: "var(--ink)" }}>Allin pʼunchaw</div>
              <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 6 }}>{t("Greetings of the day · completed", "Saludos del día · completado")}</div>
            </div>
            <div style={{ fontSize: 13, color: "var(--terracotta-deep)", fontWeight: 600 }}>+30 XP</div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 26 }}>
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ flex: 1, height: 7, borderRadius: 999, background: "var(--sage)" }} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 42, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <button onClick={finishLesson} style={{ height: 56, padding: "0 34px", borderRadius: 999, background: "var(--terracotta)", color: "#fff", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            {t("Continue journey", "Continuar")}
            <Icon name="arrow-r" size={16} stroke="#fff" />
          </button>
          <a href="/library" style={{ height: 56, padding: "0 30px", borderRadius: 999, background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--hairline)", fontSize: 16, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, textDecoration: "none" }}>
            {t("View lessons", "Ver lecciones")}
          </a>
        </div>
      </main>
    </div>
  );
};
