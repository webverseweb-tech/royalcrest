import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Mobile", value: "+1 (868) 274-9675", href: "tel:+18682749675" },
  { icon: Mail, label: "Email", value: "info@royalcrest.co.tt", href: "mailto:info@royalcrest.co.tt" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 868-274-9675", href: "https://wa.me/18682749675" },
  { icon: Send, label: "Messenger", value: "Royal Crest Industries Ltd.", href: "https://m.me/royalcrestindustries" },
  { icon: MapPin, label: "Location", value: "Trinidad & Tobago", href: "#" },
];

const divisions = [
  "Renewable Energy", "Air Conditioning", "Construction", "Real Estate",
  "Property Maintenance & Management", "Distribution", "Consultancy", "General Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", division: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll respond within 24 hours.");
    setForm({ name: "", email: "", division: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-eyebrow justify-center mb-6">Get in Touch</div>
          <h2 className="section-heading">Contact Royal Crest</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">Name *</label>
                <input
                  type="text"
                  required
                  className="contact-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  className="contact-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">Division *</label>
                <select
                  required
                  className="contact-input"
                  value={form.division}
                  onChange={(e) => setForm({ ...form, division: e.target.value })}
                >
                  <option value="">Select a division</option>
                  {divisions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">Message</label>
                <textarea
                  rows={5}
                  className="contact-input resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="gold-button w-full text-base">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Contact Details</h3>
            <p className="text-base text-muted-foreground mb-10">We respond within 24 hours.</p>

            <div className="space-y-8">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-5 group"
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-semibold">{c.label}</p>
                    <p className="text-base text-foreground group-hover:text-primary transition-colors font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
