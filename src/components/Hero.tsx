import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import constructionImg from "@/assets/portfolio-construction.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={constructionImg} alt="Royal Crest Construction" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-12 h-44 w-44 md:h-56 md:w-56 rounded-full border-4 border-primary/40 bg-background/70 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/15"
        >
          <img src={logo} alt="Royal Crest" className="h-[110%] w-[110%] object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-eyebrow mb-10 justify-center text-base"
        >
          Trinidad &amp; Tobago Conglomerate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display mb-10"
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl font-light text-foreground">Royal Crest</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl italic text-primary font-bold">Industries</span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-4">Limited</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Built on Excellence, Driven by Vision
        </motion.p>

        <div className="w-24 h-1 bg-primary/50 mx-auto mb-12 rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a href="#divisions" className="gold-button text-lg px-14 py-5">Explore Our Divisions ›</a>
          <a href="#contact" className="ghost-button text-lg px-14 py-5">Contact Us</a>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
        <span className="text-sm tracking-[0.2em] uppercase">Scroll</span>
        <span className="animate-bounce-slow text-2xl">↓</span>
      </a>
    </section>
  );
};

export default Hero;
