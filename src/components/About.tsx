import propertyImg from "@/assets/property.jpg";
import constructionImg from "@/assets/construction.jpg";
import solarImg from "@/assets/solar.jpg";

const stats = [
  { value: "7", label: "Divisions" },
  { value: "15+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "1000+", label: "Clients" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-eyebrow mb-5">Who We Are</div>
            <h2 className="section-heading mb-6">
              One Company.<br />
              <span className="text-primary italic">Multiple Strengths.</span>
            </h2>
            <p className="section-subheading mb-4">
              Royal Crest Industries Limited is a Trinidad &amp; Tobago conglomerate operating across seven key divisions delivering excellence through specialised teams focused on quality, sustainability, and value.
            </p>
            <p className="section-subheading mb-8">
              Our diverse portfolio serves both residential and commercial clients with comprehensive integrated solutions from construction and renewable energy to property management and strategic consultancy.
            </p>
            <a href="#divisions" className="gold-button mb-10">
              View Our Divisions ›
            </a>

            <div className="grid grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={propertyImg}
                alt="Property"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <img
              src={constructionImg}
              alt="Construction"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src={solarImg}
              alt="Solar"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-display">
              <span className="text-2xl font-bold">7</span>
              <span className="text-sm ml-1">Divisions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
