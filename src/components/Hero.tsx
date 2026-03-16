import logo from "@/assets/logo.png";
import constructionImg from "@/assets/portfolio-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Construction Image Background */}
      <div className="absolute inset-0">
        <img
          src={constructionImg}
          alt="Royal Crest Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Circular Logo */}
        <div className="mx-auto mb-10 h-36 w-36 md:h-44 md:w-44 rounded-full border-4 border-primary/40 bg-background/60 backdrop-blur-md flex items-center justify-center p-4 shadow-2xl shadow-primary/10">
          <img src={logo} alt="Royal Crest" className="h-full w-full object-contain" />
        </div>

        <div className="section-eyebrow mb-10 justify-center text-base">Trinidad &amp; Tobago Conglomerate</div>

        <h1 className="font-display mb-10">
          <span className="block text-6xl md:text-8xl lg:text-9xl font-light text-foreground">Royal Crest</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-primary font-bold">Industries</span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4">Limited</span>
        </h1>

        <p className="text-muted-foreground text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          A Trinidad &amp; Tobago Conglomerate — Built on Excellence, Driven by Vision
        </p>

        <div className="w-24 h-1 bg-primary/50 mx-auto mb-12 rounded-full" />

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#divisions" className="gold-button text-lg px-12 py-5">
            Explore Our Divisions ›
          </a>
          <a href="#contact" className="ghost-button text-lg px-12 py-5">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm tracking-[0.2em] uppercase">Scroll</span>
        <span className="animate-bounce-slow text-2xl">↓</span>
      </a>
    </section>
  );
};

export default Hero;
