"use client";
// Pronunciation deep, Story mode, lesson variants
import { Icon, KButton, Waveform, DiamondMark, PhotoPlaceholder, type Lang } from "./primitives";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const PronunciationDeep = ({ lang = "en", onClose }: { lang?: Lang; onClose?: () => void }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} />
        </button>
        <div className="eyebrow">{t("Pronunciation", "Pronunciación")}</div>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="sparkle" size={14} />
        </button>
      </div>
      <div style={{ padding: "32px 22px 0", textAlign: "center" }}>
        <div className="serif" style={{ fontSize: 64, lineHeight: 1.0, color: "var(--ink)", letterSpacing: "-0.025em" }}>Allillanchu</div>
        <div className="mono" style={{ fontSize: 13, color: "var(--muted)", marginTop: 10 }}>/a.ʊiˈʎan.tʃu/</div>
        <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>{t("How are you?", "¿Cómo estás?")}</div>
      </div>
      <div style={{ padding: "32px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 10 }}>{t("Native voice", "Voz nativa")}</div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="play" size={14} stroke="var(--bg)" />
          </div>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={20} color="var(--terracotta)" height={22} />
          </div>
          <div style={{ fontSize: 10, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>0.7s</div>
        </div>
        <div className="eyebrow" style={{ marginBottom: 10 }}>{t("Your voice", "Tu voz")}</div>
        <div style={{ background: "color-mix(in oklab, var(--sage) 8%, var(--surface))", border: "1.5px solid var(--sage)", borderRadius: "var(--r-md)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="play" size={14} stroke="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={20} color="var(--sage-deep)" height={22} />
          </div>
          <div style={{ fontSize: 10, color: "var(--sage-deep)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>0.8s</div>
        </div>
      </div>
      <div style={{ padding: "24px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>{t("Syllable by syllable", "Sílaba por sílaba")}</div>
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { syl: "a", score: 1.0 },
            { syl: "lli", score: 0.92 },
            { syl: "llan", score: 0.78 },
            { syl: "chu", score: 0.45 },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, background: s.score > 0.8 ? "color-mix(in oklab, var(--sage) 14%, var(--surface))" : s.score > 0.6 ? "color-mix(in oklab, var(--gold) 18%, var(--surface))" : "color-mix(in oklab, var(--terracotta) 14%, var(--surface))", border: `1px solid ${s.score > 0.8 ? "var(--sage)" : s.score > 0.6 ? "var(--gold-deep)" : "var(--terracotta)"}`, textAlign: "center" }}>
              <div className="serif" style={{ fontSize: 22, fontStyle: "italic", color: "var(--ink)" }}>{s.syl}</div>
              <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 4, fontFamily: "var(--font-mono)" }}>{Math.round(s.score * 100)}%</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 14, lineHeight: 1.5 }}>
          <span style={{ color: "var(--terracotta)", fontWeight: 600 }}>{t("Tip:", "Tip:")}</span>
          {t(' The "chu" needs a softer "ch" — like the ch in "much", not the harsh sh.', ' El "chu" necesita una "ch" suave — como en "mucho", no áspera.')}
        </p>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <button style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 14px color-mix(in oklab, var(--terracotta) 14%, transparent), var(--shadow-md)" }}>
            <Icon name="mic" size={36} stroke="#fff" />
          </button>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>{t("Tap to try again", "Toca para reintentar")}</div>
        </div>
      </div>
      <div style={{ padding: "20px 22px 30px", display: "flex", gap: 10 }}>
        <KButton variant="ghost" size="lg" full>{t("Slow it down", "Más lento")}</KButton>
        <KButton variant="accent" size="lg" full iconRight="arrow-r">{t("Next", "Siguiente")}</KButton>
      </div>
    </div>
  );
};

export const StoryMode = ({ lang = "en", onBack }: { lang?: Lang; onBack?: () => void }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ position: "relative", height: 280 }}>
        <PhotoPlaceholder ratio="auto" tone="mountain" style={{ height: "100%", borderRadius: 0 }}>
          <div style={{ position: "absolute", top: 50, left: 18, right: 18, display: "flex", justifyContent: "space-between" }}>
            <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="chevron-l" size={16} stroke="#fff" />
            </button>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="volume" size={14} stroke="#fff" />
              </button>
              <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="share" size={14} stroke="#fff" />
              </button>
            </div>
          </div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.5), transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: 22, left: 22, right: 22, color: "#fff" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>{t("Story · 8 min read", "Historia · 8 min")}</div>
            <div className="serif" style={{ fontSize: 36, fontStyle: "italic", marginTop: 6, letterSpacing: "-0.01em", lineHeight: 1.05 }}>{t("The mountain that remembers", "La montaña que recuerda")}</div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>{t("Told by María Quispe · San Blás", "Por María Quispe · San Blás")}</div>
          </div>
        </PhotoPlaceholder>
      </div>
      <div style={{ padding: "0 22px", marginTop: -28 }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow-md)" }}>
          <button style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="play" size={16} stroke="#fff" />
          </button>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={18} color="var(--ink-2)" height={20} />
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 4 }}>{t("Listen along · 1:24 / 7:42", "Escucha · 1:24 / 7:42")}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "36px 28px 0" }}>
        <p className="serif" style={{ fontSize: 24, lineHeight: 1.45, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em", textWrap: "pretty" }}>
          {t("My grandmother used to say that ", "Mi abuela decía que ")}
          <span style={{ color: "var(--terracotta)", fontStyle: "italic", borderBottom: "1px dashed var(--terracotta)", cursor: "help" }}>Apu</span>
          {t(" Salkantay knew her name. Every morning she would offer ", " Salkantay sabía su nombre. Cada mañana ofrecía ")}
          <span style={{ color: "var(--terracotta)", fontStyle: "italic", borderBottom: "1px dashed var(--terracotta)", cursor: "help" }}>kintu</span>
          {t(" — three coca leaves — toward the snow.", " — tres hojas de coca — hacia la nieve.")}
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", marginTop: 22, textWrap: "pretty" }}>
          {t("When I was small, I asked her: why? She said the mountain is a person too. He listens. He sees. If you forget him, he forgets you. And if you forget him for too long, your bones forget how to climb him.", "Cuando era pequeña, le pregunté: ¿por qué? Me dijo que la montaña también es persona. Escucha. Ve. Si lo olvidas, te olvida. Y si lo olvidas demasiado, tus huesos olvidan cómo subirla.")}
        </p>
        <div style={{ margin: "24px 0", padding: "16px 18px", background: "color-mix(in oklab, var(--gold) 10%, var(--surface))", border: "1px solid color-mix(in oklab, var(--gold) 30%, var(--hairline))", borderRadius: "var(--r-md)" }}>
          <div className="eyebrow" style={{ marginBottom: 8, color: "var(--gold-deep)" }}>{t("Word from the story", "Palabra de la historia")}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div className="serif" style={{ fontSize: 32, fontStyle: "italic", color: "var(--terracotta)", lineHeight: 1 }}>Apu</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>{t("Sacred mountain · lord", "Montaña sagrada · señor")}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>{t("Not a god. A relative.", "No un dios. Un pariente.")}</div>
            </div>
            <button style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="play" size={12} />
            </button>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", marginTop: 14, textWrap: "pretty" }}>
          {t("I am 64 now. My granddaughter is in Lima. I worry her bones will forget. So I record. So she remembers. So you remember too.", "Tengo 64 ahora. Mi nieta vive en Lima. Me preocupa que sus huesos olviden. Por eso grabo. Para que recuerde. Para que tú también recuerdes.")}
        </p>
      </div>
      <div style={{ padding: "36px 22px 40px" }}>
        <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: "var(--r-md)", padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <DiamondMark size={28} color="var(--gold)" />
          <div style={{ flex: 1 }}>
            <div className="eyebrow" style={{ color: "rgba(247,242,232,0.6)" }}>{t("Chapter 2", "Capítulo 2")}</div>
            <div className="serif" style={{ fontSize: 18, marginTop: 2 }}>{t("How the kintu is given", "Cómo se da el kintu")}</div>
          </div>
          <Icon name="arrow-r" size={16} stroke="var(--bg)" />
        </div>
      </div>
    </div>
  );
};

const LessonTopBar = ({ pct, onClose }: { pct: string; onClose?: () => void }) => (
  <div style={{ padding: "60px 18px 16px", display: "flex", alignItems: "center", gap: 12 }}>
    <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Icon name="x" size={16} />
    </button>
    <div style={{ flex: 1, height: 6, background: "var(--hairline)", borderRadius: 3, overflow: "hidden" }}>
      <div style={{ width: pct, height: "100%", background: "var(--accent)" }} />
    </div>
    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--terracotta)", fontWeight: 600, fontSize: 14 }}>
      <Icon name="heart" size={16} stroke="var(--terracotta)" />5
    </div>
  </div>
);

export const LessonMatching = ({ lang = "en", onClose }: { lang?: Lang; onClose?: () => void }) => {
  const t = useT(lang);
  const pairs = [
    { qu: "Allillanchu", en: "How are you?", state: "matched" },
    { qu: "Sumaq", en: "Beautiful", state: "matched" },
    { qu: "Sulpayki", en: "Thank you", state: "picked" },
    { qu: "Munay", en: "Love", state: "idle" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <LessonTopBar pct="60%" onClose={onClose} />
      <div style={{ padding: "16px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Match the pairs", "Empareja los pares")}</div>
        <div className="serif" style={{ fontSize: 22, lineHeight: 1.25, color: "var(--ink-2)", marginBottom: 20 }}>{t("Tap a word, then its meaning.", "Toca una palabra, luego su significado.")}</div>
      </div>
      <div style={{ flex: 1, padding: "0 22px", display: "flex", gap: 12 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {pairs.map((p, i) => (
            <button key={i} style={{ padding: "18px 14px", borderRadius: "var(--r-md)", background: p.state === "matched" ? "color-mix(in oklab, var(--sage) 14%, var(--surface))" : p.state === "picked" ? "var(--ink)" : "var(--surface)", border: p.state === "matched" ? "1.5px solid var(--sage)" : p.state === "picked" ? "1.5px solid var(--ink)" : "1.5px solid var(--hairline)", opacity: p.state === "matched" ? 0.7 : 1, textAlign: "center", color: p.state === "picked" ? "var(--bg)" : "var(--ink)" }}>
              <div className="serif" style={{ fontSize: 19, fontStyle: "italic" }}>{p.qu}</div>
            </button>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {[pairs[2], pairs[0], pairs[3], pairs[1]].map((p, i) => (
            <button key={i} style={{ padding: "18px 14px", borderRadius: "var(--r-md)", background: p.state === "matched" ? "color-mix(in oklab, var(--sage) 14%, var(--surface))" : "var(--surface)", border: p.state === "matched" ? "1.5px solid var(--sage)" : "1.5px solid var(--hairline)", opacity: p.state === "matched" ? 0.7 : 1, textAlign: "center" }}>
              <div style={{ fontSize: 15, color: "var(--ink)" }}>{p.en}</div>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "20px 22px 30px", borderTop: "1px solid var(--hairline)" }}>
        <KButton variant="accent" size="lg" full disabled>{t("Match all to continue", "Empareja todo")}</KButton>
      </div>
    </div>
  );
};

export const LessonType = ({ lang = "en", onClose }: { lang?: Lang; onClose?: () => void }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <LessonTopBar pct="40%" onClose={onClose} />
      <div style={{ padding: "16px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Type what you hear", "Escribe lo que escuchas")}</div>
        <div className="serif" style={{ fontSize: 22, lineHeight: 1.25, color: "var(--ink-2)", marginBottom: 24 }}>{t("Listen carefully, then write the Quechua word.", "Escucha bien, luego escribe la palabra en quechua.")}</div>
      </div>
      <div style={{ padding: "0 22px" }}>
        <button style={{ background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", padding: "24px 22px", display: "flex", alignItems: "center", gap: 16, boxShadow: "var(--shadow-sm)", width: "100%" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="play" size={22} stroke="var(--bg)" />
          </div>
          <div style={{ flex: 1 }}>
            <Waveform playing={false} bars={22} color="var(--accent)" height={32} />
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 6 }}>María Quispe · San Blás</div>
          </div>
        </button>
      </div>
      <div style={{ padding: "32px 22px 0", flex: 1 }}>
        <div style={{ border: "2px solid var(--accent)", borderRadius: "var(--r-md)", padding: "20px 22px", background: "var(--surface)", minHeight: 80, fontSize: 28, fontFamily: "var(--font-display)", color: "var(--ink)", letterSpacing: "-0.01em" }}>
          Sumaq <span style={{ borderRight: "2px solid var(--terracotta)", animation: "kintuq-blink 1s steps(2) infinite" }}>p</span>
          <style>{`@keyframes kintuq-blink { 50% { opacity: 0; } }`}</style>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          {["p'", "q", "ñ", "ʼ", "ch"].map((c) => (
            <button key={c} style={{ padding: "8px 14px", borderRadius: 999, background: "var(--surface)", border: "1px solid var(--hairline)", fontSize: 14, fontFamily: "var(--font-display)", color: "var(--ink)" }}>{c}</button>
          ))}
        </div>
        <button style={{ marginTop: 24, padding: "10px 14px", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--muted)" }}>
          <Icon name="sparkle" size={14} stroke="var(--muted)" />
          {t("Skip · costs 5 XP", "Saltar · cuesta 5 XP")}
        </button>
      </div>
      <div style={{ background: "color-mix(in oklab, var(--ink) 6%, var(--surface))", padding: "12px 8px 24px", borderTop: "1px solid var(--hairline)" }}>
        {[
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
          ["z", "x", "c", "v", "b", "n", "m"],
        ].map((row, r) => (
          <div key={r} style={{ display: "flex", gap: 4, marginTop: r ? 6 : 0, justifyContent: "center" }}>
            {row.map((k) => (
              <div key={k} style={{ width: 32, height: 38, borderRadius: 6, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontFamily: "var(--font-ui)", color: "var(--ink)", boxShadow: "0 1px 0 rgba(0,0,0,0.1)" }}>{k}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const LessonStory = ({ lang = "en", onClose }: { lang?: Lang; onClose?: () => void }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <LessonTopBar pct="80%" onClose={onClose} />
      <div style={{ padding: "16px 22px 0" }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>{t("Listen to the story", "Escucha la historia")}</div>
        <div className="serif" style={{ fontSize: 22, lineHeight: 1.25, color: "var(--ink-2)", marginBottom: 20 }}>{t("Where did the grandmother offer her kintu?", "¿Dónde ofreció su kintu la abuela?")}</div>
      </div>
      <div style={{ padding: "0 22px" }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-lg)", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <button style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="play" size={16} stroke="#fff" />
            </button>
            <div style={{ flex: 1 }}>
              <Waveform playing={false} bars={18} color="var(--ink-2)" height={22} />
              <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 4 }}>0:18 / 0:32</div>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "var(--ink-2)", fontStyle: "italic" }}>
            &ldquo;{t("My grandmother offered her kintu toward the mountain — Apu Salkantay — every dawn, before the sun touched the snow.", "Mi abuela ofrecía su kintu hacia la montaña — Apu Salkantay — cada amanecer, antes que el sol tocara la nieve.")}&rdquo;
          </p>
        </div>
      </div>
      <div style={{ padding: "24px 22px 0", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { en: "The river", es: "El río" },
            { en: "Apu Salkantay", es: "Apu Salkantay", correct: true },
            { en: "The market", es: "El mercado" },
            { en: "Home", es: "En casa" },
          ].map((o, i) => (
            <button key={i} style={{ padding: "14px 16px", borderRadius: "var(--r-md)", background: "var(--surface)", border: "1.5px solid var(--hairline)", display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, border: "1.5px solid var(--hairline)", color: "var(--muted)", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{String.fromCharCode(65 + i)}</div>
              <div style={{ fontSize: 15, color: "var(--ink)" }}>{t(o.en, o.es)}</div>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "14px 22px 30px", borderTop: "1px solid var(--hairline)" }}>
        <KButton variant="accent" size="lg" full disabled>{t("Pick an answer", "Elige una respuesta")}</KButton>
      </div>
    </div>
  );
};
