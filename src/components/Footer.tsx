import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-full border-2 border-primary/30 bg-background/50 flex items-center justify-center overflow-hidden p-1.5">
              <img src={logo} alt="Royal Crest" className="h-full w-full object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block text-base font-bold tracking-wide text-foreground">ROYAL CREST</span>
              <span className="block text-sm tracking-[0.15em] text-muted-foreground">INDUSTRIES LIMITED</span>
            </div>
          </div>
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Royal Crest Industries Limited. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#home" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#divisions" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">Divisions</a>
            <a href="#contact" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
