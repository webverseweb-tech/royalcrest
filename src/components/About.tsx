import portfolioRealestateImg from "@/assets/portfolio-realestate.jpg";
import portfolioConstructionImg from "@/assets/portfolio-construction.jpg";
import portfolioSolarImg from "@/assets/portfolio-solar.png";

const stats = [
  { value: "7", label: "Divisions" },
  { value: "15+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "1000+", label: "Clients" },
];

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left */}
          <div>
            <div className="section-eyebrow mb-8 text-base">Who We Are</div>
            <h2 className="section-heading mb-10 text-5xl md:text-6xl lg:text-7xl">
              One Company.<br />
              <span className="text-primary italic">Multiple Strengths.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              Royal Crest Industries Limited is a Trinidad &amp; Tobago conglomerate operating across seven key divisions delivering excellence through specialised teams focused on quality, sustainability, and value.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
              Our diverse portfolio serves both residential and commercial clients with comprehensive integrated solutions from construction and renewable energy to property management and strategic consultancy.
            </p>
            <a href="#divisions" className="gold-button text-lg px-12 py-5 mb-14">
              View Our Divisions ›
            </a>

            <div className="grid grid-cols-4 gap-8 mt-14 pt-12 border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-5xl md:text-6xl font-display font-bold text-primary">{s.value}</p>
                  <p className="text-base tracking-wider uppercase text-muted-foreground mt-3">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image grid */}
          <div className="relative grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <img
                src={portfolioRealestateImg}
                alt="Real Estate Property"
                className="w-full h-72 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <img
              src={portfolioConstructionImg}
              alt="Construction"
              className="w-full h-60 object-cover rounded-2xl shadow-xl"
            />
            <img
              src={portfolioSolarImg}
              alt="Solar Installation"
              className="w-full h-60 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-5 rounded-2xl font-display shadow-2xl">
              <span className="text-4xl font-bold">7</span>
              <span className="text-lg ml-2">Divisions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
