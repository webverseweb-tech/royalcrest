import { useState } from "react";
import { X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import portfolioSolarImg from "@/assets/portfolio-solar.png";
import portfolioAcImg from "@/assets/portfolio-ac.png";
import portfolioConstructionImg from "@/assets/portfolio-construction.jpg";
import portfolioRealestateImg from "@/assets/portfolio-realestate.jpg";
import portfolioKitchenImg from "@/assets/portfolio-kitchen.jpg";
import distributionImg from "@/assets/distribution.jpg";
import portfolioConsultancyImg from "@/assets/portfolio-consultancy.jpg";

const divisions = [
  {
    num: "01", icon: "☀️", title: "Renewable Energy",
    subtitle: "Division I - Renewable Energy",
    phone: "1-868-26-SOLAR (267-6527)", phoneHref: "tel:+18682676527",
    desc: "Royal Crest Renewable Energy delivers sustainable power solutions across Trinidad & Tobago. Solar packages, water heaters, and grid-tie systems for homes and businesses.",
    img: portfolioSolarImg,
    offerings: ["Residential Solar Packages", "Commercial Solar Installations", "Solar Water Heaters", "Grid-Tie & Off-Grid Systems", "Energy Audits", "Ongoing Maintenance"],
  },
  {
    num: "02", icon: "❄️", title: "Air Conditioning",
    subtitle: "Division II - Air Conditioning",
    phone: "1-868-333-COOL (2665)", phoneHref: "tel:+18683332665",
    desc: "Expert supply, installation, and maintenance of residential and commercial air conditioning systems. Keeping Trinidad & Tobago cool with reliable HVAC solutions.",
    img: portfolioAcImg,
    offerings: ["Residential AC Installation", "Commercial HVAC Systems", "Split & Central AC Units", "Preventative Maintenance Plans", "Emergency Repair Services", "Energy-Efficient Upgrades"],
  },
  {
    num: "03", icon: "🏗️", title: "Construction",
    subtitle: "Division III - Construction",
    phone: "1-868-274-WORK (9675)", phoneHref: "tel:+18682749675",
    desc: "Full-service construction solutions delivering quality builds from foundation to finish. Residential, commercial, and infrastructure projects across Trinidad & Tobago.",
    img: portfolioConstructionImg,
    offerings: ["Residential Builds & Renovations", "Commercial Construction", "Infrastructure Development", "Project Management", "Architectural Planning", "Interior Fit-Out"],
  },
  {
    num: "04", icon: "🏛️", title: "Real Estate",
    subtitle: "Division IV - Real Estate",
    phone: "1-868-389-HOME (4663)", phoneHref: "tel:+18683894663",
    desc: "Property sales, acquisitions, and investment opportunities across Trinidad & Tobago. Expert market knowledge and personalised service for every client.",
    img: portfolioRealestateImg,
    offerings: ["Property Sales & Listings", "Land Acquisitions", "Investment Advisory", "Property Valuations", "Buyer Representation", "Market Analysis"],
  },
  {
    num: "05", icon: "🔧", title: "Property Maintenance & Management",
    subtitle: "Division V - Property Management",
    phone: "1-868-389-HOME (4663)", phoneHref: "tel:+18683894663",
    desc: "End-to-end property management and maintenance services. Transparent reporting, proactive care, and professional service for residential and commercial clients.",
    img: portfolioKitchenImg,
    offerings: ["Tenant Management", "Preventative Maintenance", "Landscaping & Groundskeeping", "Plumbing & Electrical Repairs", "Monthly Reporting", "Emergency Response"],
  },
  {
    num: "06", icon: "📦", title: "Distribution",
    subtitle: "Division VI - Distribution",
    phone: "1-868-274-WORK (9675)", phoneHref: "tel:+18682749675",
    desc: "Import and distribution of quality goods and products across the Caribbean region. Reliable logistics and supply chain management.",
    img: distributionImg,
    offerings: ["Product Import & Export", "Warehousing & Storage", "Supply Chain Management", "Wholesale Distribution", "Inventory Management", "Regional Logistics"],
  },
  {
    num: "07", icon: "💼", title: "Consultancy",
    subtitle: "Division VII - Consultancy",
    phone: "1-868-270-6770", phoneHref: "tel:+18682706770",
    desc: "Strategic business consultation, investment advisory, and corporate planning services. Helping businesses grow with expert guidance and local insight.",
    img: portfolioConsultancyImg,
    offerings: ["Business Strategy & Planning", "Investment Advisory", "Corporate Restructuring", "Feasibility Studies", "Financial Analysis", "Operational Consulting"],
  },
];

const Divisions = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="divisions" className="py-28 md:py-36 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <div className="section-eyebrow justify-center mb-6">Our Portfolio</div>
          <h2 className="section-heading mb-5">Our Divisions</h2>
          <p className="section-subheading mx-auto text-xl">
            Seven specialised divisions working in concert under the Royal Crest umbrella.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((d, i) => (
            <AnimatedSection key={d.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(40 55% 54% / 0.15)" }}
                transition={{ duration: 0.3 }}
                className="division-card group cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className="absolute top-4 left-4 text-sm font-bold text-primary tracking-wider">{d.num}</span>
                </div>
                <div className="p-8">
                  <span className="text-4xl mb-3 block">{d.icon}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">{d.desc}</p>
                  <a
                    href={d.phoneHref}
                    className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-gold-light transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone size={16} />
                    {d.phone}
                  </a>
                  <button className="block mt-3 text-base text-primary font-semibold hover:text-gold-light transition-colors">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-xl max-w-xl w-full overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={divisions[selected].img} alt={divisions[selected].title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full p-2.5 text-foreground hover:text-primary transition-colors">
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-base font-semibold text-primary tracking-wider uppercase">{divisions[selected].subtitle}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{divisions[selected].icon}</span>
                <h3 className="font-display text-3xl font-bold text-foreground">{divisions[selected].title}</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{divisions[selected].desc}</p>
              <div className="mb-8">
                <h4 className="font-display text-xl font-bold text-foreground mb-5">What We Offer</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {divisions[selected].offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0 text-lg">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3 text-lg text-muted-foreground mb-8 p-5 bg-secondary/50 rounded-lg">
                <Phone size={20} className="text-primary" />
                <a href={divisions[selected].phoneHref} className="hover:text-primary transition-colors font-bold text-foreground">
                  {divisions[selected].phone}
                </a>
              </div>
              <a href="#contact" className="gold-button w-full justify-center text-lg" onClick={() => setSelected(null)}>
                Get a Quote ›
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Divisions;
