import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Royal Crest" className="h-12 w-auto object-contain" />
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-foreground">ROYAL CREST</span>
              <span className="block text-xs tracking-[0.15em] text-muted-foreground">INDUSTRIES LIMITED</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Royal Crest Industries Limited. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#divisions" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Divisions</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
