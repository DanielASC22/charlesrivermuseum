import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import museumLogo from "@/assets/museum-logo.png";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/charlesrivermuseum" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/charlesrivermuseum" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCSZlnLlvzNJ-ocJnzQGC-AA" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/charles-river-museum-of-industry-innovation" },
];

const quickLinks = [
  { name: "Visit", href: "/visit" },
  { name: "Events", href: "/events" },
  { name: "Exhibits", href: "/exhibits" },
  { name: "About", href: "/about" },
  { name: "Weddings & Rentals", href: "/weddings" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer id="support" className="text-cream relative overflow-hidden" style={{ backgroundColor: 'hsl(20, 20%, 10%)' }}>
      {/* Blueprint Grid Layer with Fade Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Newsletter Section */}
      <div className="border-b border-cream/10">
        <div className="section-container py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold mb-4"
            >
              Stay Connected
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cream/70 mb-6"
            >
              Subscribe to our newsletter for event updates, exhibit news, and special offers.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus:border-secondary"
              />
              <Button variant="copper" type="submit">
                <Send className="w-4 h-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={museumLogo} 
                alt="Charles River Museum" 
                className="w-14 h-14 object-contain rounded"
              />
              <div>
                <h4 className="font-display text-xl font-semibold">Charles River Museum</h4>
                <p className="text-sm text-cream/60">of Industry & Innovation</p>
              </div>
            </div>
            <p className="text-cream/70 mb-6 max-w-sm">
              Preserving the past, inspiring the future. Experience two centuries of 
              American innovation in our historic Waltham mill.
            </p>
            <div className="space-y-3 text-cream/70">
              <Link to="/directions" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <MapPin className="w-5 h-5" />
                154 Moody Street, Waltham, MA 02453
              </Link>
              <a href="tel:781-893-5410" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                781-893-5410
              </a>
              <a href="mailto:info@charlesrivermuseum.org" className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                info@charlesrivermuseum.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-display text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h5 className="font-display text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-cream/70 group-hover:text-cream transition-colors" />
                </a>
              ))}
            </div>

            <h5 className="font-display text-lg font-semibold mb-4">Hours</h5>
            <div className="text-cream/70 space-y-1 text-sm">
              <p>Wed - Fri: 10am - 3pm</p>
              <p>Saturday: 10am - 2:30pm</p>
              <p>Sun - Tue: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© 2026 Charles River Museum of Industry & Innovation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-cream transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
