import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-22 md:h-28">
        <a href="#home" className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full border-2 border-primary/40 bg-[hsl(222,47%,5%)] flex items-center justify-center overflow-hidden p-2.5 transition-transform duration-300 hover:scale-110">
            <img src={logo} alt="Royal Crest" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-bold tracking-wide text-foreground">ROYAL CREST</span>
            <span className="block text-sm tracking-[0.15em] text-muted-foreground">INDUSTRIES LIMITED</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-base">{item.label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="tel:+18682749675" className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
            <Phone size={16} />
            +1 (868) 274-9675
          </a>
          <a href="#contact" className="gold-button py-3 px-8 text-base">GET IN TOUCH</a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-xl py-2" onClick={() => setMobileOpen(false)}>{item.label}</a>
            ))}
            <a href="#contact" className="gold-button mt-2 text-base" onClick={() => setMobileOpen(false)}>GET IN TOUCH</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
