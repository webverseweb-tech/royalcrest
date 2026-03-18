import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const divisionLinks = [
  { name: "Renewable Energy", phone: "1-868-267-6527", href: "tel:+18682676527" },
  { name: "Air Conditioning", phone: "1-868-333-2665", href: "tel:+18683332665" },
  { name: "Construction", phone: "1-868-274-9675", href: "tel:+18682749675" },
  { name: "Real Estate", phone: "1-868-389-4663", href: "tel:+18683894663" },
  { name: "Property Management", phone: "1-868-389-4663", href: "tel:+18683894663" },
  { name: "Distribution", phone: "1-868-274-9675", href: "tel:+18682749675" },
  { name: "Consultancy", phone: "1-868-270-6770", href: "tel:+18682706770" },
];

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-5 mb-6">
              <div className="h-16 w-16 rounded-full border-2 border-primary/30 bg-background/50 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Royal Crest" className="h-[140%] w-[140%] object-cover object-center" />
              </div>
              <div className="leading-tight">
                <span className="block text-lg font-bold tracking-wide text-foreground">ROYAL CREST</span>
                <span className="block text-sm tracking-[0.15em] text-muted-foreground">INDUSTRIES LIMITED</span>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              A Trinidad & Tobago conglomerate built on excellence and driven by vision across seven specialised divisions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-base text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="block text-base text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#divisions" className="block text-base text-muted-foreground hover:text-primary transition-colors font-medium">Divisions</a>
              <a href="#portfolio" className="block text-base text-muted-foreground hover:text-primary transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="block text-base text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>

          {/* Division Phones */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Division Lines</h4>
            <div className="space-y-3">
              {divisionLinks.map((d) => (
                <a key={d.name} href={d.href} className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="font-medium">{d.name}</span>
                  <span className="flex items-center gap-1 text-primary/70 group-hover:text-primary">
                    <Phone size={12} />
                    {d.phone}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Royal Crest Industries Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
