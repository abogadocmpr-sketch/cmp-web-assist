import { Scale, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center">
    <img
      src={heroBg}
      alt="Oficina de abogados"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--overlay-dark)" }} />

    <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
      <div className="max-w-3xl animate-fade-in-up">
        <div className="flex items-center gap-2 mb-6">
          <Scale className="w-5 h-5 text-accent" />
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">
            Abogados Laboralistas
          </span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
          Defendemos tus derechos laborales con{" "}
          <span className="text-accent">resultados comprobados</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
          Más de 500 procesos ganados en toda Colombia. Especialistas en salarios,
          prestaciones sociales, despidos y sistema pensional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="https://wa.me/573142231851"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-gold-dark transition-colors"
          >
            Habla con un Abogado
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md text-base font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-400">
        {[
          { num: "+500", label: "Procesos Ganados" },
          { num: "+9", label: "Años de Experiencia" },
          { num: "$3.000M+", label: "Recuperados" },
          { num: "100%", label: "Compromiso" },
        ].map((s) => (
          <div key={s.label} className="text-center border border-primary-foreground/10 rounded-lg p-4 bg-primary/20 backdrop-blur-sm">
            <div className="font-heading text-2xl md:text-3xl font-bold text-accent">{s.num}</div>
            <div className="text-sm text-primary-foreground/60 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
