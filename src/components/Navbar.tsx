import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de Éxito", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Patiño & Asociados"
            className="h-10 md:h-11 w-auto rounded-md bg-primary-foreground object-contain p-1"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/573142231851"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            Consulta Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors uppercase tracking-wide border-b border-gold/10 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/573142231851"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-md text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Consulta Gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
