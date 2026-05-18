"use client";
// Kintuq — App screens (mobile)
import * as React from "react";
import { Icon, KButton, TextileBand, DiamondMark, Waveform, StatPill, type Lang } from "./primitives";

// ─── Lesson data ─────────────────────────────────────────────────
export const LESSON = {
  title: { qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día" },
  unit: "Unit 1 · Cusco market",
  steps: [
    {
      id: 1,
      kind: "listen" as const,
      qu: "Allillanchu",
      en: "How are you? (Are you well?)",
      es: "¿Cómo estás? (¿Estás bien?)",
      ipa: "/a.ʊiLˈjan.tʃu/",
      voice: "María Quispe · San Blás",
      cultural: { en: "A common greeting at any time of day, used between equals.", es: "Saludo común a cualquier hora, usado entre iguales." },
    },
    {
      id: 2,
      kind: "choose" as const,
      qu: "Sumaq pʼunchaw",
      voice: "Tito Condori · Pisaq",
      options: [
        { qu: "Beautiful day", es: "Hermoso día", correct: true },
        { qu: "Good night", es: "Buenas noches", correct: false },
        { qu: "See you later", es: "Hasta luego", correct: false },
        { qu: "Thank you", es: "Gracias", correct: false },
      ],
    },
    {
      id: 3,
      kind: "speak" as const,
      qu: "Sulpayki",
      en: "Thank you",
      es: "Gracias",
      voice: "María Quispe · San Blás",
    },
  ],
};

type Step = (typeof LESSON.steps)[number];

export const DAILY_WORD = {
  qu: "Munay",
  ipa: "/ˈmu.naj/",
  pos: "noun · verb",
  en: { gloss: "love · will · to want", body: "In Andean philosophy, munay is one of three pillars of being — alongside yachay (knowing) and llankʼay (working). It is the loving will that animates all action." },
  es: { gloss: "amor · voluntad · querer", body: "En la filosofía andina, munay es uno de los tres pilares del ser — junto a yachay (saber) y llankʼay (trabajar). Es la voluntad amorosa que da vida a toda acción." },
  example: { qu: "Munaykim sunqoìmanta", en: "I love you from my heart", es: "Te amo desde mi corazón" },
};

const tr = (lang: Lang, en: string, es: string) => (lang === "en" ? en : es);

// ─── DASHBOARD ───────────────────────────────────────────────────
export const Dashboard = ({ lang, onStart, onWord }: { lang: Lang; onStart?: () => void; onWord?: () => void }) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  return (
    <div style={{ background: "var(--bg)", minHeight: "100%", paddingBottom: 100 }}>
      <div style={{ padding: "60px 22px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">{t("Sunday morning", "Domingo por la mañana")}</div>
            <div className="serif" style={{ fontSize: 34, lineHeight: 1.0, marginTop: 4, color: "var(--ink)" }}>
              Allillanchu,
              <br />
              <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>Sara</span>
            </div>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #D97757, #E5B86A)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 16 }}>S</div>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
          <StatPill icon="flame" value="7" label={t("day streak", "días")} tone="flame" />
          <StatPill icon="star" value="1,240" label="XP" tone="gold" />
          <StatPill icon="leaf" value="3/3" label={t("today", "hoy")} tone="sage" />
        </div>
      </div>

      <div style={{ padding: "24px 22px 0" }}>
        <button
          onClick={onStart}
          style={{
            width: "100%",
            textAlign: "left",
            background: "var(--ink)",
            color: "var(--bg)",
            borderRadius: "var(--r-lg)",
            padding: "20px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "var(--shadow-md)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.18 }}>
            <TextileBand height={14} />
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>{t("Continue lesson", "Continuar lección")}</div>
            <div className="serif" style={{ fontSize: 24, marginTop: 6 }}>{LESSON.title.qu}</div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{t(LESSON.title.en, LESSON.title.es)} · {t("5 min", "5 min")}</div>
          </div>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="play" size={20} stroke="#fff" />
          </div>
        </button>
      </div>

      <div style={{ padding: "32px 22px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <div className="eyebrow">{t("Word of the day", "Palabra del día")}</div>
          <button onClick={onWord} style={{ fontSize: 12, color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 2 }}>
            {t("Open", "Abrir")} <Icon name="chevron-r" size={14} stroke="var(--muted)" />
          </button>
        </div>
        <button
          onClick={onWord}
          style={{ width: "100%", textAlign: "left", background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "20px 22px", display: "flex", gap: 16, alignItems: "center", boxShadow: "var(--shadow-sm)" }}
        >
          <div style={{ width: 64, height: 64, borderRadius: 14, background: "linear-gradient(135deg, var(--gold), var(--terracotta))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <DiamondMark size={32} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="serif" style={{ fontSize: 28, color: "var(--ink)", lineHeight: 1.0 }}>{DAILY_WORD.qu}</div>
            <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>{lang === "en" ? DAILY_WORD.en.gloss : DAILY_WORD.es.gloss}</div>
          </div>
          <Icon name="volume" size={20} stroke="var(--muted)" />
        </button>
      </div>

      <div style={{ padding: "32px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Your journey", "Tu camino")}</div>
        {[
          { idx: 1, qu: "Napaykuy", en: "Greetings", es: "Saludos", state: "done" },
          { idx: 2, qu: "Allin pʼunchaw", en: "Greetings of the day", es: "Saludos del día", state: "active" },
          { idx: 3, qu: "Qhatu", en: "At the market", es: "En el mercado", state: "next" },
          { idx: 4, qu: "Mikhuna", en: "Andean food", es: "Comida andina", state: "lock" },
        ].map((row, i, arr) => (
          <div key={row.idx} style={{ display: "flex", gap: 14, alignItems: "stretch" }}>
            <div style={{ width: 32, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: row.state === "done" ? "var(--sage)" : row.state === "active" ? "var(--accent)" : row.state === "next" ? "var(--surface)" : "transparent",
                  border: row.state === "next" ? "1.5px dashed var(--hairline)" : row.state === "lock" ? "1.5px solid var(--hairline)" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: row.state === "done" || row.state === "active" ? "#fff" : "var(--muted)",
                  fontSize: 12,
                  fontWeight: 600,
                  boxShadow: row.state === "active" ? "0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)" : "none",
                }}
              >
                {row.state === "done" ? <Icon name="check" size={16} stroke="#fff" /> : row.state === "lock" ? <Icon name="lock" size={14} stroke="var(--muted)" /> : row.idx}
              </div>
              {i < arr.length - 1 && <div style={{ flex: 1, width: 1.5, minHeight: 18, background: row.state === "done" ? "var(--sage)" : "var(--hairline)" }} />}
            </div>
            <div style={{ flex: 1, paddingBottom: 18 }}>
              <div className="serif" style={{ fontSize: 20, color: row.state === "lock" ? "var(--muted)" : "var(--ink)" }}>{row.qu}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{t(row.en, row.es)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── LESSON SCREEN ───────────────────────────────────────────────
export const LessonScreen = ({ lang, onClose, onComplete }: { lang: Lang; onClose?: () => void; onComplete?: () => void }) => {
  const [stepIdx, setStepIdx] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [picked, setPicked] = React.useState<number | null>(null);
  const [revealed, setRevealed] = React.useState(false);
  const t = (en: string, es: string) => tr(lang, en, es);

  const step = LESSON.steps[stepIdx];
  const progress = (stepIdx + (revealed ? 1 : 0)) / LESSON.steps.length;

  React.useEffect(() => {
    const k = setTimeout(() => setPlaying(false), 1800);
    return () => clearTimeout(k);
  }, [stepIdx]);

  const next = () => {
    if (stepIdx + 1 < LESSON.steps.length) {
      setStepIdx(stepIdx + 1);
      setPlaying(true);
      setPicked(null);
      setRevealed(false);
    } else onComplete?.();
  };

  const chooseStep = step.kind === "choose" ? step : null;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 18px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Icon name="x" size={16} />
        </button>
        <div style={{ flex: 1, height: 6, background: "var(--hairline)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: `${progress * 100}%`, height: "100%", background: "var(--accent)", transition: "width .35s ease" }} />
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--terracotta)", fontWeight: 600, fontSize: 14 }}>
          <Icon name="heart" size={16} stroke="var(--terracotta)" />
          <span>5</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: "8px 22px 24px", display: "flex", flexDirection: "column" }}>
        {step.kind === "listen" && <ListenStep step={step} lang={lang} playing={playing} setPlaying={setPlaying} revealed={revealed} setRevealed={setRevealed} />}
        {step.kind === "choose" && <ChooseStep step={step} lang={lang} picked={picked} setPicked={setPicked} revealed={revealed} playing={playing} setPlaying={setPlaying} />}
        {step.kind === "speak" && <SpeakStep step={step} lang={lang} revealed={revealed} setRevealed={setRevealed} />}
      </div>

      <div
        style={{
          padding: "14px 22px 30px",
          background: revealed
            ? chooseStep
              ? picked !== null && chooseStep.options[picked].correct
                ? "color-mix(in oklab, var(--sage) 16%, var(--bg))"
                : "color-mix(in oklab, var(--terracotta) 14%, var(--bg))"
              : "var(--bg)"
            : "var(--bg)",
          borderTop: "1px solid var(--hairline)",
          transition: "background .2s ease",
        }}
      >
        {revealed && chooseStep && (
          <div style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: picked !== null && chooseStep.options[picked].correct ? "var(--sage)" : "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={picked !== null && chooseStep.options[picked].correct ? "check" : "x"} size={16} stroke="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: picked !== null && chooseStep.options[picked].correct ? "var(--sage-deep)" : "var(--terracotta-deep)" }}>
                {picked !== null && chooseStep.options[picked].correct ? t("Allin! That's right.", "¡Allin! Correcto.") : t("Not quite.", "Casi.")}
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-2)" }}>{chooseStep.qu} = {t("Beautiful day", "Hermoso día")}</div>
            </div>
          </div>
        )}
        <KButton
          variant="accent"
          size="lg"
          full
          iconRight={revealed ? "arrow-r" : null}
          onClick={revealed ? next : () => setRevealed(true)}
          disabled={!revealed && step.kind === "choose" && picked === null}
        >
          {revealed ? t("Continue", "Continuar") : t("Check", "Comprobar")}
        </KButton>
      </div>
    </div>
  );
};

const ListenStep = ({
  step,
  lang,
  playing,
  setPlaying,
  revealed,
  setRevealed,
}: {
  step: Extract<Step, { kind: "listen" }>;
  lang: Lang;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  revealed: boolean;
  setRevealed: (v: boolean) => void;
}) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Listen and feel", "Escucha y siente")}</div>
      <div className="serif" style={{ fontSize: 22, color: "var(--ink-2)", lineHeight: 1.25, marginBottom: 24 }}>
        {t("Listen to the phrase, then reveal its meaning.", "Escucha la frase, luego revela su significado.")}
      </div>
      <div style={{ background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "24px 22px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <button onClick={() => setPlaying((p) => !p)} style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={playing ? "pause" : "play"} size={22} stroke="var(--bg)" />
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Waveform playing={playing} bars={22} color="var(--accent)" height={32} />
          </div>
        </div>
        <div className="serif" style={{ fontSize: 44, lineHeight: 1.05, color: "var(--ink)", letterSpacing: "-0.01em" }}>{step.qu}</div>
        <div className="mono" style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>{step.ipa}</div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--muted)" }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "linear-gradient(135deg, var(--sage), var(--gold))" }} />
          {step.voice}
        </div>
      </div>
      <button
        onClick={() => setRevealed(true)}
        style={{
          marginTop: 16,
          width: "100%",
          background: "transparent",
          border: "1.5px dashed var(--hairline)",
          borderRadius: "var(--r-lg)",
          padding: "20px",
          textAlign: "left",
          position: "relative",
          overflow: "hidden",
          opacity: revealed ? 1 : 0.95,
          transition: "all .3s ease",
          ...(revealed ? { background: "var(--surface)", borderStyle: "solid" } : {}),
        }}
      >
        {!revealed ? (
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", fontSize: 14 }}>
            <Icon name="sparkle" size={16} stroke="var(--muted)" />
            {t("Tap to reveal meaning", "Toca para revelar")}
          </div>
        ) : (
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Meaning", "Significado")}</div>
            <div style={{ fontSize: 18, color: "var(--ink)", fontWeight: 500 }}>{step.en}</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4, fontStyle: "italic" }}>{step.es}</div>
            {step.cultural && (
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--hairline)", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5 }}>
                <span style={{ color: "var(--accent)", fontWeight: 600, marginRight: 6 }}>·</span>
                {t(step.cultural.en, step.cultural.es)}
              </div>
            )}
          </div>
        )}
      </button>
    </div>
  );
};

const ChooseStep = ({
  step,
  lang,
  picked,
  setPicked,
  revealed,
  playing,
  setPlaying,
}: {
  step: Extract<Step, { kind: "choose" }>;
  lang: Lang;
  picked: number | null;
  setPicked: (i: number) => void;
  revealed: boolean;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Choose the meaning", "Elige el significado")}</div>
      <div className="serif" style={{ fontSize: 22, color: "var(--ink-2)", lineHeight: 1.25, marginBottom: 20 }}>
        {t("Tap the audio, then pick the correct translation.", "Toca el audio, luego elige la traducción correcta.")}
      </div>
      <button onClick={() => setPlaying((p) => !p)} style={{ background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "20px", display: "flex", alignItems: "center", gap: 16, marginBottom: 20, boxShadow: "var(--shadow-sm)", textAlign: "left" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={playing ? "pause" : "play"} size={18} stroke="#fff" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Waveform playing={playing} bars={18} color="var(--ink)" height={28} />
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>{step.voice}</div>
        </div>
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {step.options.map((opt, i) => {
          const isPicked = picked === i;
          const showRight = revealed && opt.correct;
          const showWrong = revealed && isPicked && !opt.correct;
          const stateStyle: React.CSSProperties = showRight
            ? { background: "color-mix(in oklab, var(--sage) 14%, var(--surface))", borderColor: "var(--sage)" }
            : showWrong
            ? { background: "color-mix(in oklab, var(--terracotta) 12%, var(--surface))", borderColor: "var(--terracotta)" }
            : isPicked
            ? { background: "color-mix(in oklab, var(--accent) 8%, var(--surface))", borderColor: "var(--accent)" }
            : { background: "var(--surface)", borderColor: "var(--hairline)" };
          return (
            <button
              key={i}
              onClick={() => !revealed && setPicked(i)}
              style={{ padding: "16px 18px", borderRadius: "var(--r-md)", border: "1.5px solid", textAlign: "left", transition: "all .15s ease", display: "flex", alignItems: "center", gap: 12, ...stateStyle }}
            >
              <div style={{ width: 26, height: 26, borderRadius: 8, border: "1.5px solid var(--hairline)", background: isPicked ? "var(--ink)" : "transparent", color: isPicked ? "var(--bg)" : "var(--muted)", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {String.fromCharCode(65 + i)}
              </div>
              <div style={{ flex: 1, fontSize: 15, color: "var(--ink)" }}>{lang === "en" ? opt.qu : opt.es}</div>
              {showRight && <Icon name="check" size={18} stroke="var(--sage)" />}
              {showWrong && <Icon name="x" size={18} stroke="var(--terracotta)" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SpeakStep = ({ step, lang, revealed, setRevealed }: { step: Extract<Step, { kind: "speak" }>; lang: Lang; revealed: boolean; setRevealed: (v: boolean) => void }) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  const [recording, setRecording] = React.useState(false);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Repeat aloud", "Repite en voz alta")}</div>
      <div className="serif" style={{ fontSize: 22, color: "var(--ink-2)", lineHeight: 1.25, marginBottom: 24 }}>
        {t("Say it back. The mountain echoes.", "Repítelo. La montaña responde.")}
      </div>
      <div style={{ background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "28px 22px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
        <div className="serif" style={{ fontSize: 56, lineHeight: 1.0, color: "var(--ink)" }}>{step.qu}</div>
        <div style={{ marginTop: 10, fontSize: 14, color: "var(--ink-2)" }}>{t(step.en, step.es)}</div>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, padding: "32px 0" }}>
        <button
          onClick={() => {
            setRecording((r) => !r);
            setTimeout(() => {
              setRecording(false);
              setRevealed(true);
            }, 1600);
          }}
          style={{
            width: 92,
            height: 92,
            borderRadius: "50%",
            background: recording ? "var(--terracotta)" : "var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: recording ? "0 0 0 14px color-mix(in oklab, var(--terracotta) 18%, transparent)" : "var(--shadow-md)",
            transition: "all .25s ease",
          }}
        >
          <Icon name="mic" size={32} stroke="var(--bg)" />
        </button>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>
          {recording ? t("Listening…", "Escuchando…") : revealed ? t("Sumaq! Well spoken.", "¡Sumaq! Bien dicho.") : t("Tap to speak", "Toca para hablar")}
        </div>
      </div>
    </div>
  );
};

// ─── DAILY WORD ──────────────────────────────────────────────────
export const DailyWordScreen = ({ lang, onClose }: { lang: Lang; onClose?: () => void }) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  const w = DAILY_WORD;
  const text = lang === "en" ? w.en : w.es;
  return (
    <div style={{ background: "var(--bg)", minHeight: "100%" }}>
      <div style={{ position: "relative", paddingTop: 50, background: "linear-gradient(180deg, var(--terracotta) 0%, color-mix(in oklab, var(--gold) 60%, var(--terracotta)) 100%)", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={20} />
        </div>
        <div style={{ position: "absolute", bottom: -8, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={16} />
        </div>
        <div style={{ position: "absolute", top: 60, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,200,0.5), transparent 70%)" }} />
        <div style={{ padding: "12px 18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="chevron-l" size={18} stroke="#fff" />
          </button>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>{t("Day 7 · word of the day", "Día 7 · palabra del día")}</div>
          <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="share" size={16} stroke="#fff" />
          </button>
        </div>
        <div style={{ padding: "40px 22px 56px", textAlign: "center", position: "relative" }}>
          <div className="serif" style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.02em", fontStyle: "italic" }}>{w.qu}</div>
          <div style={{ marginTop: 14, display: "inline-flex", gap: 10, alignItems: "center", padding: "6px 14px", background: "rgba(0,0,0,0.18)", borderRadius: 999, fontSize: 12 }}>
            <span className="mono">{w.ipa}</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span style={{ fontStyle: "italic" }}>{w.pos}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 22px", marginTop: -28, position: "relative" }}>
        <button style={{ width: "100%", background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "18px 18px", display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-md)", textAlign: "left" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="play" size={18} stroke="var(--bg)" />
          </div>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={20} color="var(--ink-2)" height={26} />
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{t("Voice: María Quispe · San Blás, Cusco", "Voz: María Quispe · San Blás, Cusco")}</div>
          </div>
        </button>
      </div>

      <div style={{ padding: "32px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Meaning", "Significado")}</div>
        <div className="serif" style={{ fontSize: 28, lineHeight: 1.15, color: "var(--ink)" }}>{text.gloss}</div>
      </div>

      <div style={{ padding: "24px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>{t("From the highlands", "Desde las alturas")}</div>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <DiamondMark size={28} color="var(--terracotta)" />
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{text.body}</p>
        </div>
      </div>

      <div style={{ padding: "28px 22px 0" }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "20px" }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>{t("In a phrase", "En una frase")}</div>
          <div className="serif" style={{ fontSize: 22, color: "var(--ink)", fontStyle: "italic" }}>&quot;{w.example.qu}&quot;</div>
          <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 6 }}>{lang === "en" ? w.example.en : w.example.es}</div>
        </div>
      </div>

      <div style={{ padding: "28px 22px 120px", display: "flex", gap: 10 }}>
        <KButton variant="primary" full icon="share" size="lg">{t("Share the word", "Compartir")}</KButton>
      </div>
    </div>
  );
};

// ─── COMPLETION SCREEN ───────────────────────────────────────────
export const CompletionScreen = ({ lang, onDone }: { lang: Lang; onDone?: () => void }) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  return (
    <div style={{ background: "var(--bg)", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "70px 22px 0", textAlign: "center", flex: 1 }}>
        <div style={{ width: 120, height: 120, margin: "0 auto", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold), var(--terracotta))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 12px color-mix(in oklab, var(--gold) 18%, transparent)", marginBottom: 32 }}>
          <DiamondMark size={64} color="#fff" />
        </div>
        <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Lesson complete", "Lección completada")}</div>
        <div className="serif" style={{ fontSize: 44, lineHeight: 1.05, color: "var(--ink)" }}>Sumaqllataq!</div>
        <div style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 8 }}>{t("Beautifully done. The mountain heard you.", "Hermoso trabajo. La montaña te escuchó.")}</div>
        <div style={{ display: "flex", gap: 10, marginTop: 32, justifyContent: "center" }}>
          <StatPill icon="star" value="+30" label="XP" tone="gold" />
          <StatPill icon="flame" value="8" label={t("day streak", "días")} tone="flame" />
        </div>
      </div>
      <div style={{ padding: "24px 22px 40px" }}>
        <KButton variant="accent" full size="lg" iconRight="arrow-r" onClick={onDone}>{t("Continue journey", "Continuar")}</KButton>
      </div>
    </div>
  );
};

// ─── PROFILE SCREEN ──────────────────────────────────────────────
export const ProfileScreen = ({ lang }: { lang: Lang }) => {
  const t = (en: string, es: string) => tr(lang, en, es);
  const achievements = [
    { icon: "flame", label: t("7-day flame", "Llama 7 días"), got: true },
    { icon: "leaf", label: t("First kintu", "Primer kintu"), got: true },
    { icon: "star", label: t("1,000 XP", "1.000 XP"), got: true },
    { icon: "trophy", label: t("Apu summit", "Cumbre Apu"), got: false },
    { icon: "globe", label: t("Greeting world", "Mundo saludo"), got: false },
    { icon: "mic", label: t("First spoken", "Primera hablada"), got: true },
  ];
  return (
    <div style={{ background: "var(--bg)", minHeight: "100%", paddingBottom: 100 }}>
      <div style={{ padding: "60px 22px 0" }}>
        <div className="eyebrow">{t("Your journey", "Tu camino")}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 16 }}>
          <div style={{ width: 76, height: 76, borderRadius: "50%", background: "linear-gradient(135deg, var(--terracotta), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 30, fontFamily: "var(--font-display)" }}>S</div>
          <div>
            <div className="serif" style={{ fontSize: 28, lineHeight: 1.1 }}>Sara Mendoza</div>
            <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 2 }}>{t("Learning since March · A1", "Aprendiendo desde marzo · A1")}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 24 }}>
          {[
            { v: "1,240", l: "XP" },
            { v: "7", l: t("streak", "racha") },
            { v: "34", l: t("words", "palabras") },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "14px 12px", textAlign: "left" }}>
              <div className="serif" style={{ fontSize: 26, lineHeight: 1, color: "var(--ink)" }}>{s.v}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "32px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Last 12 weeks", "Últimas 12 semanas")}</div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4 }}>
            {Array.from({ length: 84 }, (_, i) => {
              const v = (Math.sin(i * 0.6) + 1) / 2;
              const intensity = i > 70 ? Math.max(0.2, v) : v * 0.85;
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: "1",
                    borderRadius: 3,
                    background:
                      intensity < 0.15
                        ? "var(--hairline)"
                        : intensity < 0.4
                        ? "color-mix(in oklab, var(--accent) 25%, var(--surface))"
                        : intensity < 0.7
                        ? "color-mix(in oklab, var(--accent) 55%, var(--surface))"
                        : "var(--accent)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ padding: "28px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Achievements", "Logros")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {achievements.map((a, i) => (
            <div
              key={i}
              style={{
                background: a.got ? "var(--surface)" : "transparent",
                border: "1px solid var(--hairline)",
                borderStyle: a.got ? "solid" : "dashed",
                borderRadius: "var(--r-md)",
                padding: "16px 10px",
                textAlign: "center",
                opacity: a.got ? 1 : 0.55,
              }}
            >
              <div style={{ width: 44, height: 44, margin: "0 auto", borderRadius: "50%", background: a.got ? "color-mix(in oklab, var(--accent) 14%, var(--surface))" : "var(--surface)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={a.icon} size={20} stroke={a.got ? "var(--accent)" : "var(--muted)"} />
              </div>
              <div style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 8, lineHeight: 1.3 }}>{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
