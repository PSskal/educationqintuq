"use client";
// Kintuq — Landing page (desktop, marketing)
import { Icon, KButton, TextileBand, DiamondMark, Waveform, PhotoPlaceholder, type Lang } from "./primitives";

export const Landing = ({ lang, onLaunchApp }: { lang: Lang; onLaunchApp?: () => void }) => {
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--font-ui)" }}>
      <div style={{ opacity: 0.55 }}>
        <TextileBand height={10} />
      </div>

      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <DiamondMark size={26} color="var(--ink)" />
          <div className="serif" style={{ fontSize: 24, letterSpacing: "-0.01em" }}>Kintuq</div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 14, color: "var(--ink-2)" }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>{t("The way", "El camino")}</a>
          <a href="#voices" style={{ color: "inherit", textDecoration: "none" }}>{t("Voices", "Voces")}</a>
          <a href="#culture" style={{ color: "inherit", textDecoration: "none" }}>{t("Culture", "Cultura")}</a>
          <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>{t("Pricing", "Precios")}</a>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button style={{ fontSize: 14, color: "var(--ink-2)" }}>{t("Sign in", "Entrar")}</button>
          <KButton variant="primary" size="sm" onClick={onLaunchApp}>{t("Open app", "Abrir app")}</KButton>
        </div>
      </nav>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1px solid var(--hairline)", borderRadius: 999, fontSize: 12, color: "var(--ink-2)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--terracotta)" }} />
              {t("Now in private beta · 12,400 learners", "En beta privada · 12,400 estudiantes")}
            </div>
            <h1 className="serif" style={{ fontSize: 88, lineHeight: 0.95, letterSpacing: "-0.025em", margin: 0, color: "var(--ink)", textWrap: "balance" }}>
              {t("Learn Quechua", "Aprende quechua")}
              <br />
              <span style={{ fontStyle: "italic", color: "var(--terracotta)" }}>{t("through real Andean voices.", "con voces andinas reales.")}</span>
            </h1>
            <p style={{ fontSize: 19, color: "var(--ink-2)", lineHeight: 1.5, marginTop: 28, maxWidth: 540, textWrap: "pretty" }}>
              {t(
                "Daily lessons, recorded in the mountain villages of Cusco. Three minutes a day to speak the language of the Andes — and the people who keep it alive.",
                "Lecciones diarias, grabadas en los pueblos de las montañas de Cusco. Tres minutos al día para hablar la lengua de los Andes — y de la gente que la mantiene viva."
              )}
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, alignItems: "center" }}>
              <KButton variant="accent" size="lg" iconRight="arrow-r" onClick={onLaunchApp}>{t("Begin your kintu", "Comienza tu kintu")}</KButton>
              <KButton variant="ghost" size="lg" icon="play">{t("Listen to a lesson", "Escucha una lección")}</KButton>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 48, alignItems: "center" }}>
              <div style={{ display: "flex" }}>
                {["#D97757", "#5B7C5A", "#E5B86A", "#8AA9B8"].map((c, i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${c}, color-mix(in oklab, ${c} 70%, white))`, border: "2px solid var(--bg)", marginLeft: i ? -10 : 0 }} />
                ))}
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", lineHeight: 1.4 }}>
                <div style={{ color: "var(--ink)", fontWeight: 600 }}>★★★★★ 4.9</div>
                <div>{t("From learners in 47 countries", "De estudiantes en 47 países")}</div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative", height: 640, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "var(--r-xl)", overflow: "hidden" }}>
              <PhotoPlaceholder ratio="auto" tone="mountain" style={{ height: "100%", borderRadius: "var(--r-xl)" }}>
                <div style={{ position: "absolute", top: 16, left: 16, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                  Salkantay · 6,271 m
                </div>
              </PhotoPlaceholder>
            </div>
            <div style={{ position: "absolute", top: 60, left: 30, background: "var(--surface)", borderRadius: 18, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow-lg)", border: "1px solid var(--hairline)", minWidth: 240, animation: "kintuq-float 6s ease-in-out infinite" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="play" size={14} stroke="#fff" />
              </div>
              <div>
                <div className="serif" style={{ fontSize: 18 }}>Allillanchu</div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>María · San Blás</div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 80, right: 20, background: "var(--surface)", borderRadius: 18, padding: "16px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--hairline)", minWidth: 200, animation: "kintuq-float 7s ease-in-out infinite reverse" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>{t("Word of the day", "Palabra del día")}</div>
              <div className="serif" style={{ fontSize: 32, fontStyle: "italic", lineHeight: 1, color: "var(--terracotta)" }}>Munay</div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 4 }}>{t("love · will · to want", "amor · voluntad · querer")}</div>
            </div>
            <div style={{ position: "absolute", top: 200, right: 50, background: "var(--ink)", color: "var(--bg)", padding: "10px 14px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, boxShadow: "var(--shadow-md)", animation: "kintuq-float 5s ease-in-out infinite" }}>
              <Icon name="flame" size={14} stroke="var(--terracotta)" />
              <span>{t("7 day streak", "Racha de 7 días")}</span>
            </div>
            <style>{`@keyframes kintuq-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); }}`}</style>
          </div>
        </div>
      </section>

      <div style={{ background: "var(--ink)", color: "var(--bg)", overflow: "hidden", padding: "22px 0", position: "relative" }}>
        <div style={{ display: "flex", gap: 56, animation: "kintuq-marquee 40s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
          {[
            { qu: "Allillanchu", tr: t("How are you?", "¿Cómo estás?") },
            { qu: "Sulpayki", tr: t("Thank you", "Gracias") },
            { qu: "Sumaq", tr: t("Beautiful", "Hermoso") },
            { qu: "Pacha", tr: t("Earth · time", "Tierra · tiempo") },
            { qu: "Ayllu", tr: t("Community", "Comunidad") },
            { qu: "Munay", tr: t("Love · will", "Amor · voluntad") },
            { qu: "Yachay", tr: t("Knowledge", "Saber") },
            { qu: "Llankʼay", tr: t("Work", "Trabajo") },
            { qu: "Kʼuychi", tr: t("Rainbow", "Arco iris") },
            { qu: "Apu", tr: t("Sacred mountain", "Montaña sagrada") },
          ]
            .concat([
              { qu: "Allillanchu", tr: t("How are you?", "¿Cómo estás?") },
              { qu: "Sulpayki", tr: t("Thank you", "Gracias") },
              { qu: "Sumaq", tr: t("Beautiful", "Hermoso") },
              { qu: "Pacha", tr: t("Earth · time", "Tierra · tiempo") },
              { qu: "Ayllu", tr: t("Community", "Comunidad") },
            ])
            .map((p, i) => (
              <div key={i} style={{ display: "inline-flex", alignItems: "baseline", gap: 14 }}>
                <span className="serif" style={{ fontSize: 36, fontStyle: "italic", color: "var(--gold)" }}>{p.qu}</span>
                <span style={{ fontSize: 14, color: "rgba(247,242,232,0.55)" }}>{p.tr}</span>
                <span style={{ color: "var(--terracotta)", marginLeft: 14 }}>◆</span>
              </div>
            ))}
        </div>
        <style>{`@keyframes kintuq-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); }}`}</style>
      </div>

      <section id="about" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "flex-start" }}>
          <div style={{ position: "sticky", top: 80 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>{t("The way", "El camino")}</div>
            <h2 className="serif" style={{ fontSize: 64, lineHeight: 0.98, margin: 0, letterSpacing: "-0.02em" }}>
              {t("Three leaves.", "Tres hojas.")}
              <br />
              <span style={{ fontStyle: "italic", color: "var(--ink-2)" }}>{t("Three minutes.", "Tres minutos.")}</span>
              <br />
              {t("A daily ritual.", "Un ritual diario.")}
            </h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 28, textWrap: "pretty" }}>
              {t(
                "In the Andes, a kintu is an offering of three coca leaves — given to the mountains, the earth, the ancestors. We built Kintuq the same way: three small things, every day.",
                "En los Andes, un kintu es una ofrenda de tres hojas de coca — para las montañas, la tierra, los ancestros. Construimos Kintuq igual: tres pequeñas cosas, cada día."
              )}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { n: "01", label: t("Listen", "Escucha"), qu: "Uyariy", body: t("Real voices, recorded in the highlands. No synthetic audio. Each phrase comes with the speaker, their village, their story.", "Voces reales, grabadas en las alturas. Sin audio sintético. Cada frase viene con el hablante, su pueblo, su historia."), tone: "mountain" as const },
              { n: "02", label: t("Speak", "Habla"), qu: "Rimay", body: t("Repeat aloud and we listen back. Your phone hears the difference between sumaq and suma. Gentle, never harsh.", "Repite en voz alta y escuchamos. Tu teléfono nota la diferencia entre sumaq y suma. Suave, nunca duro."), tone: "valley" as const },
              { n: "03", label: t("Understand", "Comprende"), qu: "Yachay", body: t("Every word arrives with its cultural ground. Why pacha means both earth and time. Why ayllu is more than community.", "Cada palabra llega con su raíz cultural. Por qué pacha significa tierra y tiempo. Por qué ayllu es más que comunidad."), tone: "sky" as const },
            ].map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "32px 0", borderTop: "1px solid var(--hairline)", ...(i === 2 ? { borderBottom: "1px solid var(--hairline)" } : {}) }}>
                <div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12 }}>{step.n}</div>
                  <PhotoPlaceholder ratio="4/5" tone={step.tone} style={{ borderRadius: "var(--r-md)" }} />
                </div>
                <div style={{ paddingTop: 24 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <h3 className="serif" style={{ fontSize: 40, margin: 0, letterSpacing: "-0.01em" }}>{step.label}</h3>
                    <span className="serif" style={{ fontSize: 22, color: "var(--terracotta)", fontStyle: "italic" }}>{step.qu}</span>
                  </div>
                  <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.55, marginTop: 14, maxWidth: 480, textWrap: "pretty" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voices" style={{ background: "var(--bg-2)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.35 }}>
          <TextileBand height={12} />
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{t("Voices", "Voces")}</div>
              <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.0, margin: 0, letterSpacing: "-0.02em", maxWidth: 700, textWrap: "balance" }}>
                {t("Every phrase you learn is recorded by someone with a name.", "Cada frase que aprendes está grabada por alguien con nombre.")}
              </h2>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-2)" }}>
              <div className="serif" style={{ fontSize: 32, color: "var(--terracotta)" }}>34</div>
              {t("native speakers", "hablantes nativos")}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { name: "María Quispe", village: "San Blás, Cusco", age: 64, qu: "Allillanchu, kawsay sumaq kachun", en: "Hello, may life be beautiful", tone: "valley" as const },
              { name: "Tito Condori", village: "Pisaq", age: 38, qu: "Apu Salkantay, yachachiwayku", en: "Apu Salkantay, teach us", tone: "mountain" as const },
              { name: "Rosa Huamán", village: "Chinchero", age: 71, qu: "Mama Pacha sunqoymanta", en: "Mother Earth, from my heart", tone: "sky" as const },
            ].map((v, i) => (
              <div key={i} style={{ background: "var(--surface)", borderRadius: "var(--r-lg)", border: "1px solid var(--hairline)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <PhotoPlaceholder ratio="5/4" tone={v.tone}>
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end", color: "#fff" }}>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.8 }}>{t("Recording from", "Grabación desde")}</div>
                      <div className="serif" style={{ fontSize: 22, marginTop: 2 }}>{v.village}</div>
                    </div>
                    <button style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="play" size={16} stroke="var(--ink)" />
                    </button>
                  </div>
                </PhotoPlaceholder>
                <div style={{ padding: "20px" }}>
                  <div className="serif" style={{ fontSize: 22, fontStyle: "italic", color: "var(--terracotta)", lineHeight: 1.2 }}>&quot;{v.qu}&quot;</div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 6, fontStyle: "italic" }}>{v.en}</div>
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--hairline)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{v.name}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>{v.age}{t(" years old", " años")}</div>
                    </div>
                    <Waveform playing={false} bars={10} color="var(--muted)" height={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" style={{ maxWidth: 1100, margin: "0 auto", padding: "140px 40px", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>{t("Why Quechua", "¿Por qué quechua?")}</div>
        <p className="serif" style={{ fontSize: 56, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, textWrap: "balance", color: "var(--ink)" }}>
          {t("Quechua is spoken by ", "El quechua es hablado por ")}
          <span style={{ color: "var(--terracotta)", fontStyle: "italic" }}>{t("8 to 10 million people", "8 a 10 millones de personas")}</span>
          {t(" across the Andes — and almost no app teaches it like a living language.", " en los Andes — y casi ninguna app lo enseña como lengua viva.")}
        </p>
        <div style={{ marginTop: 48, display: "inline-flex", gap: 56, color: "var(--ink-2)" }}>
          {[
            { n: "8M+", l: t("speakers today", "hablantes hoy") },
            { n: "500yr", l: t("continuous oral tradition", "tradición oral continua") },
            { n: "46", l: t("villages contributing", "pueblos contribuyendo") },
          ].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: 48, color: "var(--ink)", letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 13 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{ background: "var(--ink)", color: "var(--bg)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={14} />
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, opacity: 0.25 }}>
          <TextileBand height={14} />
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative" }}>
          <DiamondMark size={48} color="var(--gold)" />
          <h2 className="serif" style={{ fontSize: 72, lineHeight: 1.0, margin: "24px 0 0", letterSpacing: "-0.02em", textWrap: "balance" }}>
            {t("Begin your kintu.", "Comienza tu kintu.")}
            <br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>{t("Free, while we’re in beta.", "Gratis, durante la beta.")}</span>
          </h2>
          <p style={{ fontSize: 18, color: "rgba(247,242,232,0.7)", marginTop: 24, maxWidth: 540, marginLeft: "auto", marginRight: "auto", textWrap: "pretty" }}>
            {t(
              "20% of every future subscription will go directly to the village cooperatives recording our audio.",
              "El 20% de cada suscripción futura irá directo a las cooperativas de los pueblos que graban el audio."
            )}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40 }}>
            <KButton variant="accent" size="lg" iconRight="arrow-r" onClick={onLaunchApp}>{t("Open the app", "Abrir la app")}</KButton>
            <button style={{ padding: "16px 28px", borderRadius: 999, border: "1px solid rgba(247,242,232,0.25)", color: "var(--bg)", fontSize: 16, fontWeight: 500, fontFamily: "var(--font-ui)" }}>
              {t("Read the manifesto", "Leer el manifiesto")}
            </button>
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 40px 40px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", color: "var(--ink-2)", fontSize: 13 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <DiamondMark size={20} color="var(--ink)" />
            <div className="serif" style={{ fontSize: 20, color: "var(--ink)" }}>Kintuq</div>
          </div>
          <div style={{ maxWidth: 320 }}>{t("Made with respect, between Cusco, Lima, and the open web.", "Hecho con respeto, entre Cusco, Lima y la web abierta.")}</div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12, color: "var(--ink)" }}>{t("Product", "Producto")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("Lessons", "Lecciones")}</a>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("Word of the day", "Palabra del día")}</a>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("For travelers", "Para viajeros")}</a>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12, color: "var(--ink)" }}>{t("Roots", "Raíces")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("Our voices", "Nuestras voces")}</a>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("Cooperative model", "Modelo cooperativo")}</a>
              <a style={{ color: "inherit", textDecoration: "none" }}>{t("Manifesto", "Manifiesto")}</a>
            </div>
          </div>
        </div>
      </footer>

      <div style={{ opacity: 0.55 }}>
        <TextileBand height={10} />
      </div>
    </div>
  );
};
