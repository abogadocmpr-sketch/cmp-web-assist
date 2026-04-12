import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => (
  <section id="contacto" className="py-20 lg:py-28 bg-navy">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">Contacto</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-6">
            Comunícate con nosotros
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-10">
            Atendemos en Bucaramanga, Cúcuta, Ocaña y en cualquier ciudad de Colombia.
            Cuéntanos tu caso y recibe asesoría legal personalizada.
          </p>

          <div className="space-y-6">
            {[
              { icon: Phone, label: "+57 314 223 1851", href: "tel:+573142231851" },
              { icon: Mail, label: "Abogado.cmpr@gmail.com", href: "mailto:Abogado.cmpr@gmail.com" },
              { icon: MapPin, label: "Bucaramanga, Santander 610001", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-base">{item.label}</span>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/573142231851"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-primary-foreground px-8 py-4 rounded-md text-base font-semibold hover:bg-[hsl(142,70%,35%)] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="bg-navy-light/50 border border-primary-foreground/10 rounded-xl p-8">
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
            Cuéntanos tu caso
          </h3>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name");
              const msg = formData.get("message");
              window.open(
                `https://wa.me/573142231851?text=${encodeURIComponent(`Hola, soy ${name}. ${msg}`)}`,
                "_blank"
              );
            }}
          >
            <div>
              <label className="text-sm text-primary-foreground/70 mb-1.5 block">Nombre completo</label>
              <input
                name="name"
                required
                className="w-full bg-navy border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm text-primary-foreground/70 mb-1.5 block">Correo electrónico</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-navy border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="text-sm text-primary-foreground/70 mb-1.5 block">Cuéntanos tu caso</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-navy border border-primary-foreground/20 rounded-md px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Describe brevemente tu situación legal..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3.5 rounded-md font-semibold hover:bg-gold-dark transition-colors"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
