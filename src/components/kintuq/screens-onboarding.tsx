"use client";
// Onboarding & Auth flow
import { Icon, KButton, TextileBand, DiamondMark, type Lang } from "./primitives";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const SplashScreen = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.35 }}>
        <TextileBand height={10} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.35 }}>
        <TextileBand height={10} />
      </div>
      <DiamondMark size={84} color="var(--terracotta)" />
      <div className="serif" style={{ fontSize: 48, color: "var(--ink)", letterSpacing: "-0.02em" }}>Kintuq</div>
      <div className="eyebrow" style={{ marginTop: -10 }}>{t("Three leaves, every day", "Tres hojas, cada día")}</div>
    </div>
  );
};

export const OnboardWelcome = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: "70px 28px 32px", display: "flex", flexDirection: "column" }}>
        <div className="eyebrow">{t("Welcome", "Bienvenida")}</div>
        <div className="serif" style={{ fontSize: 52, lineHeight: 1.0, color: "var(--ink)", marginTop: 12, letterSpacing: "-0.02em" }}>
          {t("Three leaves.", "Tres hojas.")}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{t("A daily ritual.", "Un ritual diario.")}</span>
        </div>
        <p style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 22, lineHeight: 1.55 }}>
          {t("In the Andes, a kintu is an offering — three coca leaves, given with care. We built Kintuq the same way.", "En los Andes, un kintu es una ofrenda — tres hojas de coca, dadas con cuidado. Así construimos Kintuq.")}
        </p>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 0" }}>
          <svg viewBox="0 0 240 200" width="220">
            <path d="M120 30 C90 60, 90 130, 120 170 C150 130, 150 60, 120 30 Z" fill="var(--sage)" opacity="0.85" />
            <path d="M120 30 L120 170" stroke="var(--sage-deep)" strokeWidth="1.5" />
            <path d="M70 50 C45 75, 50 135, 90 165 C100 130, 95 80, 70 50 Z" fill="var(--terracotta)" opacity="0.7" transform="rotate(-12 80 110)" />
            <path d="M170 50 C195 75, 190 135, 150 165 C140 130, 145 80, 170 50 Z" fill="var(--gold)" opacity="0.75" transform="rotate(12 160 110)" />
          </svg>
        </div>
      </div>
      <div style={{ padding: "20px 22px 40px", display: "flex", flexDirection: "column", gap: 10 }}>
        <KButton variant="accent" size="lg" full iconRight="arrow-r">{t("Begin", "Comenzar")}</KButton>
        <KButton variant="plain" size="md" full>{t("I already have an account", "Ya tengo cuenta")}</KButton>
      </div>
    </div>
  );
};

const OnboardProgress = ({ pct, step }: { pct: string; step: string }) => (
  <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Icon name="chevron-l" size={16} />
    </button>
    <div style={{ flex: 1, padding: "0 12px" }}>
      <div style={{ height: 4, background: "var(--hairline)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ width: pct, height: "100%", background: "var(--accent)" }} />
      </div>
    </div>
    <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--font-mono)" }}>{step}</div>
  </div>
);

export const OnboardMotivation = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const opts = [
    { id: "travel", icon: "mountain", en: "Travel to the Andes", es: "Viajar a los Andes" },
    { id: "heritage", icon: "heart", en: "Family heritage", es: "Herencia familiar" },
    { id: "curious", icon: "sparkle", en: "Just curious", es: "Por curiosidad" },
    { id: "culture", icon: "book", en: "Andean culture & history", es: "Cultura andina e historia" },
    { id: "other", icon: "globe", en: "Something else", es: "Otra cosa" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <OnboardProgress pct="33%" step="1/3" />
      <div style={{ flex: 1, padding: "32px 22px 0", display: "flex", flexDirection: "column" }}>
        <div className="eyebrow">{t("Tell us", "Cuéntanos")}</div>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.05, color: "var(--ink)", marginTop: 8, letterSpacing: "-0.01em" }}>{t("Why are you learning Quechua?", "¿Por qué estás aprendiendo quechua?")}</div>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8 }}>{t("We use this to shape your first weeks.", "Lo usamos para diseñar tus primeras semanas.")}</p>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          {opts.map((o, i) => (
            <button key={o.id} style={{ padding: "16px 18px", borderRadius: "var(--r-md)", border: i === 1 ? "1.5px solid var(--accent)" : "1.5px solid var(--hairline)", background: i === 1 ? "color-mix(in oklab, var(--accent) 8%, var(--surface))" : "var(--surface)", display: "flex", alignItems: "center", gap: 14, textAlign: "left", boxShadow: i === 1 ? "var(--shadow-sm)" : "none" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: i === 1 ? "var(--accent)" : "color-mix(in oklab, var(--accent) 10%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={o.icon} size={18} stroke={i === 1 ? "#fff" : "var(--accent)"} />
              </div>
              <div style={{ flex: 1, fontSize: 15, color: "var(--ink)", fontWeight: i === 1 ? 600 : 400 }}>{t(o.en, o.es)}</div>
              {i === 1 && <Icon name="check" size={18} stroke="var(--accent)" />}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "20px 22px 40px" }}>
        <KButton variant="primary" size="lg" full iconRight="arrow-r">{t("Continue", "Continuar")}</KButton>
      </div>
    </div>
  );
};

export const OnboardGoal = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const goals = [
    { min: 3, label: t("Gentle", "Suave"), desc: t("A daily kintu", "Un kintu diario") },
    { min: 5, label: t("Steady", "Constante"), desc: t("Recommended", "Recomendado"), highlight: true },
    { min: 10, label: t("Serious", "En serio"), desc: t("Real progress", "Progreso real") },
    { min: 20, label: t("Intense", "Intenso"), desc: t("Like a scholar", "Como un erudito") },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <OnboardProgress pct="66%" step="2/3" />
      <div style={{ flex: 1, padding: "32px 22px 0" }}>
        <div className="eyebrow">{t("Daily goal", "Meta diaria")}</div>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.05, color: "var(--ink)", marginTop: 8, letterSpacing: "-0.01em" }}>{t("How much time can you give?", "¿Cuánto tiempo puedes dar?")}</div>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8 }}>{t("Better small and daily than ambitious and quiet.", "Mejor poco y diario que ambicioso y silencioso.")}</p>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          {goals.map((g) => (
            <button key={g.min} style={{ padding: "18px 22px", borderRadius: "var(--r-md)", border: g.highlight ? "1.5px solid var(--accent)" : "1.5px solid var(--hairline)", background: g.highlight ? "color-mix(in oklab, var(--accent) 8%, var(--surface))" : "var(--surface)", display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}>
              <div className="serif" style={{ fontSize: 36, color: g.highlight ? "var(--terracotta)" : "var(--ink)", minWidth: 56, fontStyle: "italic" }}>
                {g.min}<span style={{ fontSize: 14, fontStyle: "normal", fontFamily: "var(--font-ui)", color: "var(--muted)", marginLeft: 2 }}>min</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>{g.label}</div>
                <div style={{ fontSize: 12, color: g.highlight ? "var(--terracotta-deep)" : "var(--muted)", marginTop: 2 }}>{g.desc}</div>
              </div>
              {g.highlight && <Icon name="check" size={18} stroke="var(--accent)" />}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: "20px 22px 40px" }}>
        <KButton variant="primary" size="lg" full iconRight="arrow-r">{t("Continue", "Continuar")}</KButton>
      </div>
    </div>
  );
};

export const OnboardNotifications = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <OnboardProgress pct="100%" step="3/3" />
      <div style={{ flex: 1, padding: "40px 22px 0", display: "flex", flexDirection: "column" }}>
        <div className="eyebrow">{t("A daily nudge", "Un recordatorio diario")}</div>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.05, color: "var(--ink)", marginTop: 8, letterSpacing: "-0.01em" }}>{t("Want a gentle reminder?", "¿Quieres un recordatorio suave?")}</div>
        <p style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 12, lineHeight: 1.55 }}>
          {t("We’ll send one notification a day, at a time you pick. Skip it freely — kintus aren’t homework.", "Te enviamos una notificación al día, a la hora que elijas. Sáltala con libertad — los kintus no son tarea.")}
        </p>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { time: "8:00", body: t("Allillanchu, Sara. Today’s kintu is ready.", "Allillanchu, Sara. Tu kintu del día está listo."), open: true },
            { time: "20:00", body: t("Sumaq! Your streak is at 7 days.", "¡Sumaq! Tu racha está en 7 días."), open: false },
          ].map((n, i) => (
            <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 12, boxShadow: n.open ? "var(--shadow-md)" : "none", opacity: n.open ? 1 : 0.7 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--terracotta)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <DiamondMark size={18} color="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Kintuq</span>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>{n.time}</span>
                </div>
                <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.4 }}>{n.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: "16px 18px", background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)" }}>
          <div className="eyebrow" style={{ marginBottom: 10 }}>{t("Best time for you", "Mejor hora para ti")}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { l: t("Morning", "Mañana"), v: "8:00" },
              { l: t("Lunch", "Almuerzo"), v: "13:00" },
              { l: t("Evening", "Noche"), v: "20:00", active: true },
            ].map((h) => (
              <button key={h.v} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, background: h.active ? "var(--ink)" : "transparent", color: h.active ? "var(--bg)" : "var(--ink)", border: h.active ? "1px solid var(--ink)" : "1px solid var(--hairline)", fontSize: 12, fontWeight: 500, display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
                <span style={{ opacity: h.active ? 0.7 : 0.6 }}>{h.l}</span>
                <span className="serif" style={{ fontSize: 18 }}>{h.v}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 22px 40px", display: "flex", flexDirection: "column", gap: 8 }}>
        <KButton variant="accent" size="lg" full>{t("Allow notifications", "Permitir notificaciones")}</KButton>
        <KButton variant="plain" size="md" full>{t("Maybe later", "Tal vez después")}</KButton>
      </div>
    </div>
  );
};

export const SignInScreen = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} />
        </button>
        <DiamondMark size={26} color="var(--ink)" />
        <div style={{ width: 36 }} />
      </div>
      <div style={{ flex: 1, padding: "40px 28px 0" }}>
        <div className="serif" style={{ fontSize: 44, lineHeight: 1.05, color: "var(--ink)", letterSpacing: "-0.02em" }}>{t("Welcome back.", "Bienvenida de vuelta.")}</div>
        <p style={{ fontSize: 15, color: "var(--ink-2)", marginTop: 8 }}>{t("Pick up your streak where you left off.", "Continúa donde dejaste tu racha.")}</p>
        <div style={{ marginTop: 32 }}>
          <label className="eyebrow" style={{ display: "block", marginBottom: 8 }}>{t("Email", "Correo")}</label>
          <input placeholder="sara@example.com" defaultValue="sara@example.com" style={{ width: "100%", height: 52, padding: "0 18px", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", background: "var(--surface)", fontSize: 15, color: "var(--ink)", fontFamily: "var(--font-ui)" }} />
        </div>
        <div style={{ marginTop: 14 }}>
          <label className="eyebrow" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>{t("Password", "Contraseña")}</span>
            <a style={{ textTransform: "none", letterSpacing: 0, color: "var(--terracotta)", fontWeight: 600 }}>{t("Forgot?", "¿Olvidaste?")}</a>
          </label>
          <input type="password" placeholder="••••••••" defaultValue="••••••••" style={{ width: "100%", height: 52, padding: "0 18px", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", background: "var(--surface)", fontSize: 15, color: "var(--ink)", fontFamily: "var(--font-ui)", letterSpacing: "0.2em" }} />
        </div>
        <div style={{ marginTop: 22 }}>
          <KButton variant="primary" size="lg" full iconRight="arrow-r">{t("Sign in", "Iniciar sesión")}</KButton>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
          <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{t("or", "o")}</div>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button style={{ height: 52, borderRadius: "var(--r-md)", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" /><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" /><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" /><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" /></svg>
            {t("Continue with Google", "Continuar con Google")}
          </button>
          <button style={{ height: 52, borderRadius: "var(--r-md)", background: "var(--ink)", border: "1px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 14, fontWeight: 500, color: "var(--bg)" }}>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="var(--bg)"><path d="M13.6 10.4c0-2.5 2.1-3.7 2.2-3.8-1.2-1.7-3-2-3.7-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9c-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.2 3.2-2.5 1-1.4 1.4-2.8 1.4-2.9-.1-.1-2.7-1-2.7-4z" /></svg>
            {t("Continue with Apple", "Continuar con Apple")}
          </button>
        </div>
      </div>
      <div style={{ padding: "20px 28px 40px", textAlign: "center" }}>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>{t("New here?", "¿Nueva aquí?")} </span>
        <a style={{ fontSize: 13, color: "var(--terracotta)", fontWeight: 600 }}>{t("Create an account", "Crea una cuenta")}</a>
      </div>
    </div>
  );
};
