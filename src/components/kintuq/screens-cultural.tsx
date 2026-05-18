"use client";
// Manifesto, Voices directory, Shareable card
import { Icon, Waveform, TextileBand, DiamondMark, PhotoPlaceholder, type Lang } from "./primitives";

const useT = (lang: Lang) => (en: string, es: string) => (lang === "en" ? en : es);

export const ManifestoScreen = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="chevron-l" size={16} />
        </button>
        <div className="eyebrow">{t("Manifesto", "Manifiesto")}</div>
        <div style={{ width: 36 }} />
      </div>
      <div style={{ padding: "32px 22px 0", textAlign: "center" }}>
        <DiamondMark size={48} color="var(--terracotta)" />
        <div className="serif" style={{ fontSize: 44, lineHeight: 1.0, color: "var(--ink)", marginTop: 18, letterSpacing: "-0.025em" }}>
          {t("Why we built", "Por qué hicimos")}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>Kintuq.</span>
        </div>
      </div>
      <div style={{ padding: "40px 28px 0" }}>
        <p className="serif" style={{ fontSize: 22, lineHeight: 1.45, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em", textWrap: "pretty" }}>
          {t("Quechua is spoken by ten million people. None of them learned it from an app.", "El quechua lo hablan diez millones de personas. Ninguna lo aprendió de una app.")}
        </p>
        <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", textWrap: "pretty" }}>
          {t("They learned it from grandmothers in highland kitchens. From shepherds talking to llamas. From children teasing each other in courtyards.", "Lo aprendieron de abuelas en cocinas altoandinas. De pastores hablándole a las llamas. De niños molestándose en patios.")}
        </p>
        <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)", textWrap: "pretty" }}>
          {t("We can’t put a grandmother on your phone. But we can put her voice. We can put her village. We can put her name.", "No podemos poner una abuela en tu teléfono. Pero podemos poner su voz. Su pueblo. Su nombre.")}
        </p>
      </div>
      <div style={{ padding: "40px 22px 0" }}>
        <div className="eyebrow" style={{ textAlign: "center", marginBottom: 22 }}>{t("Three commitments", "Tres compromisos")}</div>
        {[
          { num: "01", qu: "Munay", en: "Love", body: t("Every voice you hear consents to be heard. We don’t scrape, we ask. We pay.", "Cada voz consiente ser escuchada. No raspamos, pedimos. Pagamos.") },
          { num: "02", qu: "Yachay", en: "Wisdom", body: t("No synthetic Quechua. No translated-to-death simplifications. Real dialect, real people.", "Sin quechua sintético. Sin simplificaciones traducidas a la muerte. Dialecto real, gente real.") },
          { num: "03", qu: "Llankʼay", en: "Work", body: t("20% of every subscription goes to the village cooperatives that record with us.", "20% de cada suscripción va a las cooperativas de los pueblos que graban con nosotros.") },
        ].map((p) => (
          <div key={p.num} style={{ padding: "22px 0", borderTop: "1px solid var(--hairline)" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>{p.num}</span>
              <div>
                <div className="serif" style={{ fontSize: 28, lineHeight: 1.05, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                  {p.en} · <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{p.qu}</span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55, textWrap: "pretty" }}>{p.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "40px 22px 60px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6 }}>{t("Made with respect, between Cusco, Lima, and the open web.", "Hecho con respeto, entre Cusco, Lima y la web abierta.")}</p>
        <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>Allillanchu. Sulpayki.</p>
      </div>
    </div>
  );
};

export const VoicesDirectory = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  const regions = [
    { name: "Cusco", voices: [
      { name: "María Quispe", village: "San Blás", age: 64, phrases: 47, tone: "valley" as const },
      { name: "Tito Condori", village: "Pisaq", age: 38, phrases: 32, tone: "mountain" as const },
      { name: "Felipe Mamani", village: "Ollantaytambo", age: 52, phrases: 19, tone: "textile" as const },
    ] },
    { name: "Ayacucho", voices: [
      { name: "Rosa Huamán", village: "Chinchero", age: 71, phrases: 28, tone: "sky" as const },
      { name: "Inés Apaza", village: "Quinua", age: 45, phrases: 22, tone: "valley" as const },
    ] },
    { name: "Puno", voices: [{ name: "Pablo Chura", village: "Capachica", age: 58, phrases: 14, tone: "mountain" as const }] },
  ];
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--bg)", overflowY: "auto" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="chevron-l" size={16} />
        </button>
        <div className="eyebrow">{t("Voices", "Voces")}</div>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="menu" size={14} />
        </button>
      </div>
      <div style={{ padding: "24px 22px 0" }}>
        <div className="serif" style={{ fontSize: 36, lineHeight: 1.05, color: "var(--ink)", letterSpacing: "-0.01em" }}>
          {t("6 voices", "6 voces")}
          <br />
          <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{t("3 regions", "3 regiones")}</span>
        </div>
        <div style={{ marginTop: 22, display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
          {[t("All", "Todas"), "Cusco", "Ayacucho", "Puno", "Bolivia"].map((r, i) => (
            <button key={i} style={{ padding: "8px 14px", borderRadius: 999, flexShrink: 0, background: i === 0 ? "var(--ink)" : "var(--surface)", color: i === 0 ? "var(--bg)" : "var(--ink-2)", border: i === 0 ? "1px solid var(--ink)" : "1px solid var(--hairline)", fontSize: 12, fontWeight: 500, fontFamily: "var(--font-ui)" }}>{r}</button>
          ))}
        </div>
      </div>
      {regions.map((region) => (
        <div key={region.name} style={{ padding: "32px 22px 0" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
            <div className="serif" style={{ fontSize: 24, color: "var(--ink)" }}>{region.name}</div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>{region.voices.length} {t("voices", "voces")}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {region.voices.map((v) => (
              <button key={v.name} style={{ background: "var(--surface)", border: "1px solid var(--hairline)", borderRadius: "var(--r-md)", padding: 0, overflow: "hidden", display: "flex", textAlign: "left" }}>
                <div style={{ width: 84, flexShrink: 0 }}>
                  <PhotoPlaceholder ratio="auto" tone={v.tone} style={{ height: "100%", borderRadius: 0 }} />
                </div>
                <div style={{ flex: 1, padding: "12px 14px" }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{v.name}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{v.village} · {v.age}{t(" yrs", " años")} · {v.phrases} {t("phrases", "frases")}</div>
                  <div style={{ marginTop: 8 }}>
                    <Waveform playing={false} bars={14} color="var(--terracotta)" height={14} />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", paddingRight: 14 }}>
                  <Icon name="play" size={16} stroke="var(--accent)" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
      <div style={{ padding: "40px 22px 60px" }}>
        <div style={{ background: "color-mix(in oklab, var(--sage) 12%, var(--surface))", border: "1px solid color-mix(in oklab, var(--sage) 30%, var(--hairline))", borderRadius: "var(--r-md)", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: 14 }}>
          <Icon name="leaf" size={20} stroke="var(--sage-deep)" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--sage-deep)" }}>{t("Cooperative model", "Modelo cooperativo")}</div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.5 }}>{t("20% of every Pro subscription goes to the village cooperatives.", "El 20% de cada suscripción Pro va a las cooperativas.")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShareableCard = ({ lang = "en" }: { lang?: Lang }) => {
  const t = useT(lang);
  return (
    <div style={{ width: "100%", height: "100%", background: "var(--ink)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "60px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="x" size={16} stroke="var(--bg)" />
        </button>
        <div className="eyebrow" style={{ color: "rgba(247,242,232,0.7)" }}>{t("Share preview", "Vista previa")}</div>
        <div style={{ width: 36 }} />
      </div>
      <div style={{ flex: 1, padding: "32px 22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 340, aspectRatio: "9/16", background: "linear-gradient(180deg, var(--terracotta) 0%, color-mix(in oklab, var(--gold) 60%, var(--terracotta)) 100%)", borderRadius: "var(--r-xl)", overflow: "hidden", position: "relative", color: "#fff", boxShadow: "0 0 0 6px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.4)", padding: "36px 26px", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.3 }}>
            <TextileBand height={14} />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.3 }}>
            <TextileBand height={14} />
          </div>
          <div style={{ position: "absolute", top: 80, right: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,240,200,0.4), transparent 70%)" }} />
          <div style={{ position: "relative" }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,0.8)" }}>{t("I just learned", "Acabo de aprender")}</div>
            <div className="serif" style={{ fontSize: 72, lineHeight: 0.95, fontStyle: "italic", marginTop: 14, letterSpacing: "-0.025em" }}>Munay</div>
            <div style={{ fontSize: 18, opacity: 0.9, marginTop: 10, fontStyle: "italic" }}>{t("Love · will · to want", "Amor · voluntad · querer")}</div>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: 18 }}>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.45, opacity: 0.9, fontStyle: "italic" }}>
              &ldquo;{t("In Andean philosophy, munay is one of three pillars of being — alongside yachay and llankʼay.", "En la filosofía andina, munay es uno de tres pilares del ser — junto a yachay y llankʼay.")}&rdquo;
            </p>
            <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <DiamondMark size={18} color="#fff" />
                <div className="serif" style={{ fontSize: 14, fontStyle: "italic" }}>Kintuq</div>
              </div>
              <div className="mono" style={{ fontSize: 10, opacity: 0.7 }}>day 7 · 7 streak</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 22px 30px" }}>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 14 }}>
          {["Instagram", "Twitter", "WhatsApp", "Copy"].map((s) => (
            <button key={s} style={{ flex: 1, padding: "14px 8px", borderRadius: "var(--r-md)", background: "rgba(255,255,255,0.06)", color: "var(--bg)", fontSize: 11, fontWeight: 500, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.1)" }}>
              <Icon name="share" size={14} stroke="var(--gold)" />
              {s}
            </button>
          ))}
        </div>
        <button style={{ height: 56, width: "100%", borderRadius: 999, background: "#fff", color: "var(--ink)", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Icon name="arrow-up-right" size={16} stroke="var(--ink)" />
          {t("Save image", "Guardar imagen")}
        </button>
      </div>
    </div>
  );
};
