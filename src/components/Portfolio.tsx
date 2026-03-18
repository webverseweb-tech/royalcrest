import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import portfolioConstructionImg from "@/assets/portfolio-construction.jpg";
import portfolioRealestateImg from "@/assets/portfolio-realestate.jpg";
import portfolioSolarImg from "@/assets/portfolio-solar.jpg";
import portfolioKitchenImg from "@/assets/portfolio-kitchen.jpg";
import portfolioAcImg from "@/assets/portfolio-ac.jpg";
import portfolioConsultancyImg from "@/assets/portfolio-consultancy.jpg";

const projects = [
  { img: portfolioConstructionImg, category: "Construction", title: "Modern Residential Complex", desc: "Contemporary multi-unit complex with glass railings and premium finishes." },
  { img: portfolioRealestateImg, category: "Real Estate", title: "Luxury Property", desc: "Breathtaking Trinidad property at night with manicured grounds." },
  { img: portfolioSolarImg, category: "Renewable Energy", title: "Rooftop Solar Installation", desc: "Residential rooftop solar providing clean energy year-round." },
  { img: portfolioKitchenImg, category: "Property Management", title: "Premium Kitchen Renovation", desc: "Full kitchen overhaul with grey cabinetry and black granite counters." },
  { img: portfolioAcImg, category: "Air Conditioning", title: "Commercial HVAC Installation", desc: "Full HVAC system for a commercial office building in Port of Spain." },
  { img: portfolioConsultancyImg, category: "Consultancy", title: "Professional Floor Plan Design", desc: "First floor layout for a medical office complex in Port of Spain." },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 md:py-36 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <div className="section-eyebrow mb-6">Portfolio</div>
            <h2 className="section-heading mb-4">Our Work</h2>
            <p className="section-subheading text-xl">Completed projects across our seven divisions.</p>
          </div>
          <a href="#contact" className="gold-button mt-6 md:mt-0 text-base">View All ›</a>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="portfolio-card group">
                <div className="relative h-80 overflow-hidden rounded-xl">
                  <img src={p.img} alt={p.title} loading="lazy" decoding="async" width={400} height={320} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-base font-semibold text-primary tracking-wider uppercase">{p.category}</span>
                      <span className="text-primary text-lg">→</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{p.title}</h3>
                    <p className="text-base text-muted-foreground mt-2">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
