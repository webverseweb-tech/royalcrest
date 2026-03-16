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

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="section-eyebrow mb-8">Trinidad &amp; Tobago Conglomerate</div>

        <h1 className="font-display mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-foreground">Royal Crest</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl italic text-primary font-bold">Industries</span>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-2">Limited</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl mx-auto">
          A Trinidad &amp; Tobago Conglomerate — Built on Excellence, Driven by Vision
        </p>

        <div className="w-16 h-0.5 bg-primary/50 mx-auto mb-8" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#divisions" className="gold-button">
            Explore Our Divisions ›
          </a>
          <a href="#contact" className="ghost-button">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <span className="animate-bounce-slow text-lg">↓</span>
      </a>
    </section>
  );
};

export default Hero;
