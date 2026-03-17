import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: "🛡️", title: "Quality Guaranteed", desc: "Every project delivered to the highest standards across all seven divisions." },
  { icon: "🌿", title: "Sustainable Solutions", desc: "From solar energy to eco-conscious construction, we prioritise sustainable practices." },
  { icon: "👥", title: "Expert Teams", desc: "Seasoned professionals with decades of combined expertise and local knowledge." },
  { icon: "📈", title: "Value for Money", desc: "Premium results at competitive rates ensuring maximum value for every investment." },
];

const WhyChoose = () => {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <div className="section-eyebrow justify-center mb-6">Our Promise</div>
          <h2 className="section-heading">Why Choose Royal Crest?</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 16px 32px -12px hsl(40 55% 54% / 0.12)" }}
                className="why-card text-center"
              >
                <span className="text-6xl mb-6 block">{f.icon}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{f.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
