import { useState } from "react";
import { X, Phone } from "lucide-react";
import solarImg from "@/assets/solar.jpg";
import acImg from "@/assets/ac.jpg";
import constructionImg from "@/assets/construction.jpg";
import realestateImg from "@/assets/realestate.jpg";
import propertyImg from "@/assets/property.jpg";
import distributionImg from "@/assets/distribution.jpg";
import consultancyImg from "@/assets/consultancy.jpg";

const divisions = [
  { num: "01", icon: "☀️", title: "Renewable Energy", desc: "Solar panel packages, solar water heaters, and sustainable energy solutions for homes and businesses across Trinidad & Tobago.", img: solarImg },
  { num: "02", icon: "❄️", title: "Air Conditioning", desc: "Supply, installation, and maintenance of residential and commercial air conditioning systems.", img: acImg },
  { num: "03", icon: "🏗️", title: "Construction", desc: "Full-service construction solutions including residential builds, commercial projects, and infrastructure development.", img: constructionImg },
  { num: "04", icon: "🏛️", title: "Real Estate", desc: "Property sales, acquisitions, and investment opportunities across Trinidad & Tobago.", img: realestateImg },
  { num: "05", icon: "🔧", title: "Property Maintenance & Management", desc: "End-to-end property management and maintenance services for residential and commercial clients.", img: propertyImg },
  { num: "06", icon: "📦", title: "Distribution", desc: "Import and distribution of quality goods and products across the region.", img: distributionImg },
  { num: "07", icon: "💼", title: "Consultancy", desc: "Business consultation, strategic investment advisory, and corporate planning services.", img: consultancyImg },
];

const Divisions = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="divisions" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-5">Our Portfolio</div>
          <h2 className="section-heading mb-4">Our Divisions</h2>
          <p className="section-subheading mx-auto">
            Seven specialised divisions working in concert under the Royal Crest umbrella.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d, i) => (
            <div
              key={d.num}
              className="division-card cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold text-primary tracking-wider">{d.num}</span>
              </div>
              <div className="p-6">
                <span className="text-2xl mb-2 block">{d.icon}</span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="mt-4 flex items-center gap-4">
                  <a href="tel:+18682749675" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={12} /> 274-9675
                  </a>
                  <button className="text-xs text-primary hover:text-gold-light transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6" onClick={() => setSelected(null)}>
          <div className="bg-card border border-border rounded-lg max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={divisions[selected].img} alt={divisions[selected].title} className="w-full h-56 object-cover" />
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3 bg-background/50 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary">
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <h4 className="font-display text-xl font-bold text-foreground mb-1">What We Offer</h4>
              <span className="text-2xl">{divisions[selected].icon}</span>
              <h3 className="font-display text-lg font-bold text-foreground mt-2">{divisions[selected].title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{divisions[selected].desc}</p>
              <a href="#contact" className="gold-button mt-6 text-xs" onClick={() => setSelected(null)}>
                Get a Quote ›
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Divisions;
