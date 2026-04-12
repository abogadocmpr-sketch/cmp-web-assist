const Footer = () => (
  <footer className="bg-navy-dark border-t border-gold/10 py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-heading text-lg font-bold text-primary-foreground tracking-wide">
            PATIÑO <span className="text-accent">&</span> ASOCIADOS
          </span>
          <p className="text-sm text-primary-foreground/50 mt-1">Abogados Laborales · Bucaramanga, Santander</p>
        </div>
        <p className="text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Patiño & Asociados. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
