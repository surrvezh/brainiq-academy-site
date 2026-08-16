'use client';

import { useState, FormEvent } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { buildWhatsAppUrl, SITE_CONFIG } from '@/lib/config';

const DEFAULT_MESSAGES: Record<string, string> = {
  'General Enquiry': 'Hi! I would like to know more about BrainIQ Academy.',
  'Enroll My Child': 'Hi! I would like to enroll my child in BrainIQ Academy. Please share class details and fees.',
  'Franchise Opportunity': 'Hi! I am interested in a BrainIQ Academy franchise. Please share the franchise details.',
};

interface FormState {
  name: string;
  phone: string;
  country: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    country: 'India',
    interest: 'General Enquiry',
    message: DEFAULT_MESSAGES['General Enquiry'],
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'interest') updated.message = DEFAULT_MESSAGES[value] ?? prev.message;
      return updated;
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `*BrainIQ Academy Enquiry*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Country:* ${form.country}\n*Interest:* ${form.interest}\n\n*Message:*\n${form.message}`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  }

  const inputClass =
    'w-full bg-navy/80 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-muted/60 text-sm focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition-all duration-200';

  return (
    <section id="contact" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Reach Out</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            Get in Touch
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto">
            Fill the form and we&apos;ll send your message directly via WhatsApp. We respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-navy/40 rounded-2xl p-6 md:p-8 border border-white/5"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)' }}
          >
            <div>
              <label className="block text-muted text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
              <input type="text" name="name" required placeholder="Your full name"
                value={form.name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="block text-muted text-xs font-semibold uppercase tracking-wider mb-2">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="+91 98765 43210"
                value={form.phone} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="block text-muted text-xs font-semibold uppercase tracking-wider mb-2">Country</label>
              <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Dubai">Dubai, UAE</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-muted text-xs font-semibold uppercase tracking-wider mb-2">I Am Interested In</label>
              <select name="interest" value={form.interest} onChange={handleChange} className={inputClass}>
                <option>General Enquiry</option>
                <option>Enroll My Child</option>
                <option>Franchise Opportunity</option>
              </select>
            </div>

            <div>
              <label className="block text-muted text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" rows={4} placeholder="Tell us more..."
                value={form.message} onChange={handleChange}
                className={`${inputClass} resize-none`} />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-navy font-bold text-base rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:bg-yellow-300"
              style={{ boxShadow: '0 8px 24px rgba(201,168,76,0.35)' }}
            >
              <Send size={18} />
              Send via WhatsApp
            </button>

            <p className="text-muted/60 text-xs text-center">
              Opens WhatsApp with your details pre-filled. No data stored.
            </p>
          </form>

          {/* Contact info */}
          <div className="space-y-5 md:pt-2">
            {[
              {
                icon: Phone,
                color: 'teal',
                title: 'Phone',
                content: (
                  <div className="space-y-1">
                    <a href="tel:+919629841966" className="block text-teal text-sm hover:text-gold transition-colors">+91 96298 41966</a>
                    <a href="tel:+918220026412" className="block text-teal text-sm hover:text-gold transition-colors">+91 82200 26412</a>
                  </div>
                ),
              },
              {
                icon: MessageCircle,
                color: 'teal',
                title: 'WhatsApp',
                content: (
                  <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="text-teal text-sm hover:text-gold transition-colors">
                    Chat with us on WhatsApp →
                  </a>
                ),
              },
              {
                icon: Mail,
                color: 'teal',
                title: 'Email',
                content: (
                  <a href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-teal text-sm hover:text-gold transition-colors">
                    {SITE_CONFIG.contact.email}
                  </a>
                ),
              },
              {
                icon: MapPin,
                color: 'gold',
                title: 'Offline Centers',
                content: (
                  <div>
                    <p className="text-muted text-sm">Sulur · Airforce Station Sulur</p>
                    <p className="text-muted text-sm">Kangayampalayam · Edappady · Lakshmi Nagar</p>
                  </div>
                ),
              },
            ].map(({ icon: Icon, color, title, content }) => (
              <div
                key={title}
                className="bg-navy rounded-2xl p-5 border border-white/8 flex items-start gap-4 hover:border-teal/30 transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color === 'gold' ? 'bg-gold/10' : 'bg-teal/10'}`}
                  style={{ boxShadow: color === 'gold' ? '0 0 16px rgba(201,168,76,0.2)' : '0 0 16px rgba(29,184,166,0.2)' }}>
                  <Icon className={color === 'gold' ? 'text-gold' : 'text-teal'} size={20} />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-1 text-sm">{title}</h3>
                  {content}
                </div>
              </div>
            ))}

            <div className="bg-navy/50 rounded-2xl p-5 border border-teal/20">
              <p className="text-muted text-sm leading-relaxed">
                For franchise enquiries in <span className="text-text-primary">USA, Dubai, UK, Germany, and Netherlands</span> — select &quot;Franchise Opportunity&quot; above and we will connect you with our regional team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
