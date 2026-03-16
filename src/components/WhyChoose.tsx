const features = [
  { icon: "🛡️", title: "Quality Guaranteed", desc: "Every project delivered to the highest standards across all seven divisions." },
  { icon: "🌿", title: "Sustainable Solutions", desc: "From solar energy to eco-conscious construction, we prioritise sustainable practices." },
  { icon: "👥", title: "Expert Teams", desc: "Seasoned professionals with decades of combined expertise and local knowledge." },
  { icon: "📈", title: "Value for Money", desc: "Premium results at competitive rates ensuring maximum value for every investment." },
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-5">Our Promise</div>
          <h2 className="section-heading">Why Choose Royal Crest?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="why-card text-center">
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
