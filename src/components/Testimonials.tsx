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
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-5">Client Voices</div>
          <h2 className="section-heading">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <span className="text-4xl text-primary font-display">"</span>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="text-xs text-primary mt-1">{t.division}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
