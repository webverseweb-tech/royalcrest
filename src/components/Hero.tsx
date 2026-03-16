import logo from "@/assets/logo.png";
import portfolioRealestateImg from "@/assets/portfolio-realestate.jpg";
import portfolioSolarImg from "@/assets/portfolio-solar.png";
import portfolioConstructionImg from "@/assets/portfolio-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://comfy-tarsier-fd37a9.netlify.app/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Floating images decorations */}
      <img
        src={portfolioConstructionImg}
        alt=""
        className="hidden lg:block absolute top-32 left-8 w-44 h-28 object-cover rounded-xl opacity-20 blur-[1px]"
      />
      <img
        src={portfolioSolarImg}
        alt=""
        className="hidden lg:block absolute bottom-40 right-8 w-40 h-28 object-cover rounded-xl opacity-15 blur-[1px]"
      />
      <img
        src={portfolioRealestateImg}
        alt=""
        className="hidden lg:block absolute top-48 right-16 w-36 h-24 object-cover rounded-xl opacity-15 blur-[1px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="Royal Crest" className="h-24 md:h-32 w-auto mx-auto mb-8 drop-shadow-2xl" />

        <div className="section-eyebrow mb-8 justify-center">Trinidad &amp; Tobago Conglomerate</div>

        <h1 className="font-display mb-8">
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground">Royal Crest</span>
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem] italic text-primary font-bold">Industries</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-3">Limited</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          A Trinidad &amp; Tobago Conglomerate — Built on Excellence, Driven by Vision
        </p>

        <div className="w-20 h-0.5 bg-primary/50 mx-auto mb-10" />

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="#divisions" className="gold-button text-base">
            Explore Our Divisions ›
          </a>
          <a href="#contact" className="ghost-button text-base">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm tracking-[0.2em] uppercase">Scroll</span>
        <span className="animate-bounce-slow text-xl">↓</span>
      </a>
    </section>
  );
};

export default Hero;
