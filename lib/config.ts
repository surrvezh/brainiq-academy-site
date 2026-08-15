// lib/config.ts
export const SITE_CONFIG = {
  name: 'BrainIQ Academy',
  tagline: 'Enrich the brain with abacus',
  siteUrl: 'https://brainiqacademy.com',
  // Replace with your number: country code + number, no + or spaces
  // Example: '919876543210' for India +91 98765 43210
  whatsappNumber: 'YOUR_WHATSAPP_NUMBER',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  social: {
    facebook: 'https://facebook.com/brainiqacademy',
    instagram: 'https://instagram.com/brainiqacademy',
    youtube: 'https://youtube.com/@brainiqacademy',
  },
  contact: {
    email: 'info@brainiqacademy.com',
  },
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
