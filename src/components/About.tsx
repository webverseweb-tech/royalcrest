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
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="section-eyebrow mb-6">Who We Are</div>
            <h2 className="section-heading mb-8">
              One Company.<br />
              <span className="text-primary italic">Multiple Strengths.</span>
            </h2>
            <p className="section-subheading mb-5">
              Royal Crest Industries Limited is a Trinidad &amp; Tobago conglomerate operating across seven key divisions delivering excellence through specialised teams focused on quality, sustainability, and value.
            </p>
            <p className="section-subheading mb-10">
              Our diverse portfolio serves both residential and commercial clients with comprehensive integrated solutions from construction and renewable energy to property management and strategic consultancy.
            </p>
            <a href="#divisions" className="gold-button mb-12">
              View Our Divisions ›
            </a>

            <div className="grid grid-cols-4 gap-6 mt-12 pt-10 border-t border-border">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image grid with real images */}
          <div className="relative grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <img
                src={portfolioRealestateImg}
                alt="Real Estate Property"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <img
              src={portfolioConstructionImg}
              alt="Construction"
              className="w-full h-52 object-cover rounded-xl shadow-xl"
            />
            <img
              src={portfolioSolarImg}
              alt="Solar Installation"
              className="w-full h-52 object-cover rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-display shadow-xl">
              <span className="text-3xl font-bold">7</span>
              <span className="text-base ml-2">Divisions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
