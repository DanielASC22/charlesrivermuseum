import { motion } from "framer-motion";
import { Heart, Users, Calendar, Mail, Building, Sparkles, Presentation, Clock, Monitor, Coffee, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const venueFeatures = [
  {
    icon: Building,
    title: "Historic 19th-Century Mill",
    description: "Our textile mill overlooks the scenic Charles River, providing a picturesque backdrop.",
  },
  {
    icon: Users,
    title: "Up to 180 Guests",
    description: "Spacious venue including the Museum proper and Jackson Room function space.",
  },
  {
    icon: Sparkles,
    title: "Unique Ambiance",
    description: '"The space is absolutely beautiful... it\'s authentic, it\'s human, it\'s a little eccentric."',
  },
];

const fullVenueRates = [
  { day: "Monday - Thursday", price: "$3,000", offPeak: "$2,500", hours: "9.5" },
  { day: "Fridays & Sundays", price: "$4,000", offPeak: "$3,000", hours: "9.5" },
  { day: "Saturdays / Holiday Sundays", price: "$5,000", offPeak: "$4,000", hours: "9.5" },
  { day: "Holidays", price: "$6,000", offPeak: "$6,000", hours: "9.5", note: "NYE, Memorial Day, July 4th, Labor Day, Thanksgiving, Christmas" },
];

const microWeddingRates = [
  { day: "Sunday - Friday", price: "$2,000", hours: "7.5" },
  { day: "Holidays", price: "$2,250", hours: "7.5", note: "Labor Day, Columbus Day, Veterans Day, Memorial Day, Halloween" },
];


export const PrivateEvents = () => {
  return (
    <section id="private-events" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-medium"
          >
            Weddings & Private Events
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2"
          >
            Celebrate With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
          >
            Host your wedding, corporate event, or special celebration in one of Greater Boston's most memorable venues.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features & Image */}
          <div>
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              {venueFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-primary/5 border border-primary/10"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground italic">
                "Our guests LOVED the space… The venue truly allows you to be creative with your decor 
                and how you set up the space. I would highly recommend using the Charles River Museum 
                as part of your special day!"
              </p>
              <p className="text-sm text-muted-foreground mt-3">— Amanda, via WeddingWire</p>
            </motion.div>
          </div>

          {/* Right Column - Pricing & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Calendar className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Rental Rates</h3>
                <p className="text-xs text-muted-foreground">As of 1/1/2025 • Subject to change</p>
              </div>
            </div>

            <Tabs defaultValue="full-venue" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="full-venue" className="text-xs">Full Venue</TabsTrigger>
                <TabsTrigger value="micro" className="text-xs">Micro Wedding</TabsTrigger>
              </TabsList>

              <TabsContent value="full-venue" className="space-y-2">
                <p className="text-xs text-muted-foreground mb-2">Off-peak rates (Jan-Mar) shown in parentheses</p>
                {fullVenueRates.map((tier) => (
                  <div key={tier.day} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <span className="font-medium text-foreground text-sm">{tier.day}</span>
                      <span className="text-xs text-muted-foreground block">{tier.hours} hrs included</span>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-lg font-bold text-foreground">{tier.price}</span>
                      {tier.offPeak !== tier.price && (
                        <span className="text-xs text-muted-foreground block">({tier.offPeak})</span>
                      )}
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="micro" className="space-y-2">
                <p className="text-xs text-muted-foreground mb-2">Intimate celebrations with 7.5 hours included</p>
                {microWeddingRates.map((tier) => (
                  <div key={tier.day} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <span className="font-medium text-foreground text-sm">{tier.day}</span>
                      <span className="text-xs text-muted-foreground block">{tier.hours} hrs included</span>
                    </div>
                    <span className="font-display text-lg font-bold text-foreground">{tier.price}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">Not available Thanksgiving, Christmas Eve/Day, NYE/Day</p>
              </TabsContent>

            </Tabs>

            <p className="text-xs text-muted-foreground my-4">
              Includes venue rental, cleaning, security, tables & chairs.
            </p>

            <a
              href="https://www.charlesrivermuseum.org/contact-private-events"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="copper" size="lg" className="w-full">
                <Mail className="w-5 h-5" />
                Inquire About Your Event
              </Button>
            </a>

            <p className="text-xs text-center text-muted-foreground mt-3">
              Featured on WeddingWire & The Knot
            </p>
          </motion.div>
        </div>

        {/* Conferences & Meetings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Presentation className="w-6 h-6 text-cream" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Conferences & Meetings</h2>
              <p className="text-muted-foreground">Available Monday through Friday</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="lg:col-span-2 bg-card rounded-xl p-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Looking for a unique space to hold a lecture, conference, or meeting? Our historic, 
                19th-century textile mill overlooking the scenic Charles River provides an inspiring backdrop 
                for Greater Boston's most memorable professional gatherings.
              </p>

              {/* Lowell Room Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Users className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Lowell Room</p>
                    <p className="text-sm text-muted-foreground">Accommodates 8-35 guests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Monitor className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">A/V Included</p>
                    <p className="text-sm text-muted-foreground">Projector, screen & sound system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Coffee className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Museum Viewing</p>
                    <p className="text-sm text-muted-foreground">+1 hour included with package</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <Clock className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Flexible Timing</p>
                    <p className="text-sm text-muted-foreground">Before, during, or after your event</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Use the museum hour for pre-event coffee, lunch breaks, or post-event cocktails.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Conference Packages</h3>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground">Full Day</span>
                    <span className="font-display text-xl font-bold text-foreground">$900</span>
                  </div>
                  <p className="text-sm text-muted-foreground">8 hours of event + 1 hour museum viewing</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground">Half Day</span>
                    <span className="font-display text-xl font-bold text-foreground">$500</span>
                  </div>
                  <p className="text-sm text-muted-foreground">4 hours of event + 1 hour museum viewing</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Discounted rates available for qualifying non-profit organizations.
              </p>

              <a
                href="https://www.charlesrivermuseum.org/contact-private-events"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="navy" size="lg" className="w-full">
                  <Mail className="w-5 h-5" />
                  Inquire About Conferences
                </Button>
              </a>
            </div>

            {/* Partner Hotels Banner */}
            <div className="lg:col-span-3 bg-gradient-to-r from-secondary to-secondary/80 rounded-xl p-6 text-cream">
              <div className="flex items-center gap-3 mb-4">
                <Hotel className="w-6 h-6" />
                <h3 className="font-display text-xl font-bold">Preferred Partner Hotels</h3>
              </div>
              <p className="text-cream/80 mb-4">
                Stay at our partner hotels and 10% of your stay supports the Museum!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="http://www.marriott.com/hotels/travel/boswm-courtyard-boston-waltham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cream/10 hover:bg-cream/20 transition-colors text-sm font-medium"
                >
                  Marriott Courtyard
                </a>
                <a
                  href="https://www.ihg.com/holidayinnexpress/hotels/us/en/waltham/wtmma/hoteldetail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cream/10 hover:bg-cream/20 transition-colors text-sm font-medium"
                >
                  Holiday Inn Express
                </a>
                <a
                  href="http://www.westinwalthamboston.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cream/10 hover:bg-cream/20 transition-colors text-sm font-medium"
                >
                  Westin Waltham Boston
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
