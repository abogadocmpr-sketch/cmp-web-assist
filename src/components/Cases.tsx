import { TrendingUp } from "lucide-react";

const cases = [
  {
    client: "CORMEDES",
    location: "Ocaña, Norte de Santander",
    desc: "Representamos a más de 300 trabajadores en procesos laborales colectivos contra la entidad.",
    result: "Reconocimiento de prestaciones e indemnizaciones.",
  },
  {
    client: "Hospital Emiro Quintero Cañizares",
    location: "Ocaña, Norte de Santander",
    desc: "Defendimos los derechos laborales de médicos y personal de salud frente a incumplimientos contractuales.",
    result: "Fallos favorables por más de $3.000.000.000 COP.",
  },
  {
    client: "Consorcio Salud del Caribe",
    location: "Cartagena",
    desc: "Asesoría y representación de un grupo de trabajadores despedidos sin justa causa.",
    result: "Indemnizaciones de hasta $70.000.000 por persona.",
  },
  {
    client: "COTAXI — Gerente despedido",
    location: "Bucaramanga, Santander",
    desc: "Representación de gerente de reconocida empresa de transporte por despido injusto.",
    result: "Reconocimiento superior a $100.000.000 COP.",
  },
];

const Cases = () => (
  <section id="casos" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">Resultados Comprobados</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
          Casos de Éxito
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{c.client}</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{c.location}</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
              <p className="text-sm font-semibold text-foreground">
                <span className="text-accent">Resultado:</span> {c.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Cases;
