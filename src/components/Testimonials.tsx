import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "Royal Crest transformed our home with a complete build and interior fit-out. Professional, punctual, and remarkable quality. Truly world-class service right here in T&T.",
    name: "Marcus T.",
    role: "Homeowner, Port of Spain",
    division: "Construction Division",
  },
  {
    text: "From consultation to closing, the team guided us every step. Outstanding professionalism and deep local market knowledge.",
    name: "Serena Mohammed",
    role: "Property Investor",
    division: "Real Estate Division",
  },
  {
    text: "Their property management services are outstanding. Transparent reporting, proactive maintenance, always professional.",
    name: "David Chen",
    role: "Commercial Client",
    division: "Property Management",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <div className="section-eyebrow justify-center mb-6">Client Voices</div>
          <h2 className="section-heading">What Our Clients Say</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="testimonial-card">
                <span className="text-6xl text-primary font-display leading-none">"</span>
                <div className="flex gap-1 mb-5 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.text}</p>
                <div>
                  <p className="font-bold text-foreground text-lg">{t.name}</p>
                  <p className="text-base text-muted-foreground mt-1">{t.role}</p>
                  <p className="text-base text-primary mt-2 font-semibold">{t.division}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
