import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Mobile", value: "+1 (868) 274-9675", href: "tel:+18682749675" },
  { icon: Mail, label: "Email", value: "info@royalcrest.co.tt", href: "mailto:info@royalcrest.co.tt" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 868-274-9675", href: "https://wa.me/18682749675" },
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
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-eyebrow justify-center mb-5">Get in Touch</div>
          <h2 className="section-heading">Contact Royal Crest</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Name *</label>
                <input
                  type="text"
                  required
                  className="contact-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  className="contact-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Division *</label>
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
                <label className="text-xs text-muted-foreground mb-1 block">Message</label>
                <textarea
                  rows={4}
                  className="contact-input resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="gold-button w-full">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Our Contact Details</h3>
            <p className="text-sm text-muted-foreground mb-8">We respond within 24 hours.</p>

            <div className="space-y-6">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 group"
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">{c.value}</p>
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
