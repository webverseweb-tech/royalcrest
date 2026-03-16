import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Royal Crest" className="h-8 w-8 object-contain" />
            <div className="leading-tight">
              <span className="block text-xs font-bold tracking-wide text-foreground">ROYAL CREST</span>
              <span className="block text-[9px] tracking-[0.15em] text-muted-foreground">INDUSTRIES LIMITED</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Royal Crest Industries Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#divisions" className="text-xs text-muted-foreground hover:text-primary transition-colors">Divisions</a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
