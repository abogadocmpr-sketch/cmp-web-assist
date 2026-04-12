import { Award, BookOpen, Users, MapPin } from "lucide-react";

const highlights = [
  { icon: Award, title: "Magíster en Derecho Laboral", desc: "Formación especializada de posgrado" },
  { icon: BookOpen, title: "+500 Procesos Ganados", desc: "En diferentes ciudades de Colombia" },
  { icon: Users, title: "Representación Nacional", desc: "Trabajadores, sindicatos y pensionados" },
  { icon: MapPin, title: "Cobertura Nacional", desc: "Bucaramanga, Cúcuta, Ocaña y más" },
];

const About = () => (
  <section id="nosotros" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">Nuestra Firma</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Liderada por Carlos Mario Patiño Ríos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuestro compromiso es defender los derechos de los trabajadores y pensionados en toda Colombia.
            La firma está liderada por Carlos Mario Patiño Ríos, abogado con más de 9 años de experiencia
            y una sólida trayectoria en derecho laboral y seguridad social.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Recuperación de salarios, prestaciones sociales, vacaciones e indemnizaciones por despido injusto.
            Éxitos en la nulidad de traslados pensionales frente a COLPENSIONES y fondos privados.
          </p>
          <a
            href="https://www.linkedin.com/in/carlos-mario-pati%C3%B1o-rios-945ba7293/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Ver perfil en LinkedIn →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
