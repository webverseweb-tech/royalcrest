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
  {
    num: "01", icon: "☀️", title: "Renewable Energy",
    subtitle: "Division I - Renewable Energy",
    desc: "Royal Crest Renewable Energy delivers sustainable power solutions across Trinidad & Tobago. Solar packages, water heaters, and grid-tie systems for homes and businesses.",
    img: solarImg,
    offerings: [
      "Residential Solar Packages",
      "Commercial Solar Installations",
      "Solar Water Heaters",
      "Grid-Tie & Off-Grid Systems",
      "Energy Audits",
      "Ongoing Maintenance",
    ],
  },
  {
    num: "02", icon: "❄️", title: "Air Conditioning",
    subtitle: "Division II - Air Conditioning",
    desc: "Expert supply, installation, and maintenance of residential and commercial air conditioning systems. Keeping Trinidad & Tobago cool with reliable HVAC solutions.",
    img: acImg,
    offerings: [
      "Residential AC Installation",
      "Commercial HVAC Systems",
      "Split & Central AC Units",
      "Preventative Maintenance Plans",
      "Emergency Repair Services",
      "Energy-Efficient Upgrades",
    ],
  },
  {
    num: "03", icon: "🏗️", title: "Construction",
    subtitle: "Division III - Construction",
    desc: "Full-service construction solutions delivering quality builds from foundation to finish. Residential, commercial, and infrastructure projects across Trinidad & Tobago.",
    img: constructionImg,
    offerings: [
      "Residential Builds & Renovations",
      "Commercial Construction",
      "Infrastructure Development",
      "Project Management",
      "Architectural Planning",
      "Interior Fit-Out",
    ],
  },
  {
    num: "04", icon: "🏛️", title: "Real Estate",
    subtitle: "Division IV - Real Estate",
    desc: "Property sales, acquisitions, and investment opportunities across Trinidad & Tobago. Expert market knowledge and personalised service for every client.",
    img: realestateImg,
    offerings: [
      "Property Sales & Listings",
      "Land Acquisitions",
      "Investment Advisory",
      "Property Valuations",
      "Buyer Representation",
      "Market Analysis",
    ],
  },
  {
    num: "05", icon: "🔧", title: "Property Maintenance & Management",
    subtitle: "Division V - Property Management",
    desc: "End-to-end property management and maintenance services. Transparent reporting, proactive care, and professional service for residential and commercial clients.",
    img: propertyImg,
    offerings: [
      "Tenant Management",
      "Preventative Maintenance",
      "Landscaping & Groundskeeping",
      "Plumbing & Electrical Repairs",
      "Monthly Reporting",
      "Emergency Response",
    ],
  },
  {
    num: "06", icon: "📦", title: "Distribution",
    subtitle: "Division VI - Distribution",
    desc: "Import and distribution of quality goods and products across the Caribbean region. Reliable logistics and supply chain management.",
    img: distributionImg,
    offerings: [
      "Product Import & Export",
      "Warehousing & Storage",
      "Supply Chain Management",
      "Wholesale Distribution",
      "Inventory Management",
      "Regional Logistics",
    ],
  },
  {
    num: "07", icon: "💼", title: "Consultancy",
    subtitle: "Division VII - Consultancy",
    desc: "Strategic business consultation, investment advisory, and corporate planning services. Helping businesses grow with expert guidance and local insight.",
    img: consultancyImg,
    offerings: [
      "Business Strategy & Planning",
      "Investment Advisory",
      "Corporate Restructuring",
      "Feasibility Studies",
      "Financial Analysis",
      "Operational Consulting",
    ],
  },
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
              className="division-card group cursor-pointer"
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
                  <a
                    href="tel:+18682749675"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card border border-border rounded-lg max-w-xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={divisions[selected].img}
                alt={divisions[selected].title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-background/50 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                  {divisions[selected].subtitle}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{divisions[selected].icon}</span>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {divisions[selected].title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {divisions[selected].desc}
              </p>

              <div className="mb-6">
                <h4 className="font-display text-base font-bold text-foreground mb-4">
                  What We Offer
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {divisions[selected].offerings.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Phone size={14} className="text-primary" />
                <a
                  href="tel:+18682749675"
                  className="hover:text-primary transition-colors"
                >
                  +1 (868) 274-9675
                </a>
              </div>

              <a
                href="#contact"
                className="gold-button text-xs w-full justify-center"
                onClick={() => setSelected(null)}
              >
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
