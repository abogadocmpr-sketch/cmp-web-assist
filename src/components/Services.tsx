import { FileText, Shield, Briefcase, Scale, Building2, Users } from "lucide-react";

const services = [
  { icon: Scale, title: "Despido Injusto", desc: "Reclamación de indemnizaciones por despido sin justa causa ante jurisdicción laboral." },
  { icon: FileText, title: "Salarios y Prestaciones", desc: "Recuperación de salarios adeudados, prestaciones sociales y vacaciones." },
  { icon: Shield, title: "Sistema Pensional", desc: "Nulidad de traslados pensionales y reconocimiento de pensiones ante COLPENSIONES." },
  { icon: Briefcase, title: "Contratos Laborales", desc: "Elaboración y revisión de contratos de trabajo y reglamentos internos." },
  { icon: Building2, title: "Asesoría Empresarial", desc: "Consultoría en temas laborales para empresas y empleadores." },
  { icon: Users, title: "Procesos Colectivos", desc: "Representación de grupos de trabajadores y sindicatos a nivel nacional." },
];

const Services = () => (
  <section id="servicios" className="py-20 lg:py-28 bg-navy">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">Servicios Legales</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
          ¿Cómo podemos ayudarte?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-navy-light/50 border border-primary-foreground/10 rounded-xl p-8 hover:border-accent/40 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">{s.title}</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
