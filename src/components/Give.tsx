import { motion } from "framer-motion";
import { Heart, Gift, Building2, Users, Mail, CreditCard, Landmark, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const givingOptions = [
  {
    icon: CreditCard,
    title: "Make a Gift Online",
    description: "Make a secure, tax-deductible donation through our online form.",
    cta: "Donate Now",
    href: "https://secure.lglforms.com/form_engine/s/svs6O5JuILHp5jeZoFFYOQ",
    primary: true,
  },
  {
    icon: Users,
    title: "Become a Member",
    description: "Join our community of supporters and enjoy exclusive benefits year-round.",
    cta: "Join Today",
    href: "https://charlesrivermuseum.org/join",
    primary: false,
  },
  {
    icon: Building2,
    title: "Employer Matching",
    description: "Double or triple your impact through your employer's matching gift program.",
    cta: "Learn More",
    href: "mailto:give@charlesrivermuseum.org?subject=Employer%20Matching%20Gift",
    primary: false,
  },
  {
    icon: Landmark,
    title: "Donor-Advised Fund (DAF)",
    description: "Give through your donor-advised fund for a convenient, tax-smart donation.",
    cta: "Contact Us",
    href: "mailto:give@charlesrivermuseum.org?subject=DAF%20Donation",
    primary: false,
  },
  {
    icon: Gift,
    title: "Gifts of Stock",
    description: "Donate appreciated securities for potential tax benefits while supporting our mission.",
    cta: "Learn More",
    href: "mailto:give@charlesrivermuseum.org?subject=Stock%20Gift",
    primary: false,
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Include the Museum in your will or trust and become part of The 1813 Society.",
    cta: "Plan Your Legacy",
    href: "https://www.charlesrivermuseum.org/the-1813-society",
    primary: false,
  },
];

const impactStats = [
  { value: "10K+", label: "Annual Visitors Inspired" },
  { value: "200+", label: "Artifacts Preserved" },
  { value: "50+", label: "Programs Annually" },
  { value: "1814", label: "Historic Mill Founded" },
];

export const Give = () => {
  return (
    <section className="bg-background">
      {/* Hero Message */}
      <div className="bg-primary text-cream py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6"
            >
              <Heart className="w-8 h-8 text-secondary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Thank You for Your Financial Support!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/90 text-lg md:text-xl leading-relaxed"
            >
              Your donations fund our day-to-day operations and are the life blood of our institution. 
              Contributions like yours pay for the care and maintenance of our exhibits and artifacts, 
              the planning and implementation of our public programming, as well as our daily operations, 
              infrastructure, and staff.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-secondary/10 py-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {impactStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="font-display text-4xl md:text-5xl font-bold text-secondary"
                >
                  {stat.value}
                </motion.p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ways to Give */}
      <div className="section-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Make an Impact</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Ways to Support</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {givingOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : undefined}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                block p-8 rounded-2xl border transition-all group
                ${option.primary 
                  ? 'bg-secondary text-cream border-secondary hover:bg-secondary/90 shadow-lg' 
                  : 'bg-card border-border hover:border-secondary/50 hover:shadow-lg'
                }
              `}
            >
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6
                ${option.primary ? 'bg-white/20' : 'bg-secondary/10'}
              `}>
                <option.icon className={`w-7 h-7 ${option.primary ? 'text-cream' : 'text-secondary'}`} />
              </div>
              <h3 className={`font-display text-xl font-semibold mb-3 ${option.primary ? 'text-cream' : 'text-foreground'}`}>
                {option.title}
              </h3>
              <p className={`mb-6 ${option.primary ? 'text-cream/80' : 'text-muted-foreground'}`}>
                {option.description}
              </p>
              <div className={`
                inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all
                ${option.primary ? 'text-cream' : 'text-secondary'}
              `}>
                {option.cta}
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mail a Check */}
      <div className="bg-muted/50 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Mail className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prefer to Mail a Check?
            </h3>
            <p className="text-muted-foreground mb-6">
              Please make checks payable to "Charles River Museum" and mail to:
            </p>
            <div className="bg-card rounded-xl p-6 border border-border inline-block">
              <p className="font-semibold text-foreground">Charles River Museum</p>
              <p className="text-muted-foreground">154 Moody Street</p>
              <p className="text-muted-foreground">Waltham, MA 02453</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="section-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center"
        >
          <Building2 className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Corporate Sponsorship
          </h3>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to sponsor a program, exhibition, or another facet of Museum operations. 
            Gain visibility while supporting our mission to preserve industrial history.
          </p>
          <a
            href="mailto:info@charlesrivermuseum.org?subject=Corporate%20Sponsorship%20Inquiry"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:gap-4"
          >
            Contact Us About Sponsorship
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Closing Message */}
      <div className="bg-secondary/10 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We are in a special place, with extraordinary stories to tell. Your gift will help us 
              celebrate our location in Waltham as a foundation of the American Industrial Revolution. 
              You'll help us connect the expertise of older generations with the inquisitiveness of 
              young people. We can only deliver on that promise and thrive with your generous support.
            </p>
            <p className="font-display text-2xl font-bold text-secondary mb-4">
              You can make a powerful difference.
            </p>
            <p className="text-muted-foreground text-sm">
              The Charles River Museum of Industry & Innovation is a 501(c)(3) nonprofit corporation. 
              Your gift is tax-deductible to the fullest extent allowed by law.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Have questions about giving?</p>
          <a
            href="mailto:give@charlesrivermuseum.org"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold text-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            give@charlesrivermuseum.org
          </a>
        </motion.div>
      </div>
    </section>
  );
};
