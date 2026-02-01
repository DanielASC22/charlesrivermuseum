import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  DollarSign,
  Ticket,
  Users,
  GraduationCap,
  Baby,
  AlertTriangle,
  BadgePercent,
  CreditCard,
  School,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const hours = [
  { day: "Wednesday - Friday", time: "10:00 AM - 3:00 PM" },
  { day: "Saturday", time: "10:00 AM - 2:30 PM" },
  { day: "Sunday - Tuesday", time: "Closed" },
];

export const Visit = () => {
  return (
    <section id="visit" className="py-20 bg-muted/50">
      <div className="section-container">
        {/* CRITICAL PARKING WARNING - Top Priority */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 rounded-xl bg-destructive/15 border-2 border-destructive shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-destructive flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold text-destructive uppercase tracking-wide mb-2">
                Important Parking Notice
              </h3>
              <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                There is <strong className="text-destructive">NO Museum Visitor Parking</strong> in the Francis Cabot
                Lowell Mill lots.
                <strong className="text-destructive"> ALL vehicles</strong> without a Mill-approved permit{" "}
                <strong className="text-destructive">WILL BE TOWED</strong> by Mill Management—including
                handicap-permitted vehicles.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-card border border-border">
                <p className="text-foreground font-semibold flex items-center gap-2">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>
                    Please use public parking: <span className="text-secondary">Embassy Parking Garage</span> (42 Cooper
                    St)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary font-medium"
            >
              Plan Your Trip
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-8"
            >
              Visit Us
            </motion.h2>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Hours of Operation</h3>
              </div>
              <div className="space-y-2 pl-13">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">* Final admission 30 minutes before closing</p>
            </motion.div>

            {/* Location & Directions - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 p-5 rounded-xl bg-secondary/5 border border-secondary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cream" />
                </div>
                <h3 className="font-display text-xl font-semibold">Find Us</h3>
              </div>
              <p className="text-foreground font-medium text-lg">154 Moody Street</p>
              <p className="text-muted-foreground">Waltham, MA 02453</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/directions"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-cream font-medium hover:bg-secondary/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </Link>
                <Link
                  to="/directions"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/30 text-secondary font-medium hover:bg-secondary/10 transition-colors"
                >
                  <Car className="w-4 h-4" />
                  Parking Info
                </Link>
              </div>
            </motion.div>

            {/* Parking */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Car className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Parking Options</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Embassy Parking Garage</strong> — 42 Cooper St
                </p>
                <p>
                  <strong className="text-foreground">Carter Street Lot</strong> — 3 Carter St
                </p>
                <p>
                  <strong className="text-foreground">Crescent Street Lot</strong> — 24 Crescent St
                </p>
                <p>
                  <strong className="text-foreground">Walnut Street Lot</strong> — 41 Walnut St
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Admission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Admission</h3>
                <p className="text-sm text-muted-foreground">Also available at the door</p>
              </div>
            </div>

            {/* $10 Section */}
            <div className="mb-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Adults (aged 18-64)</span>
                </div>
                <span className="font-display text-2xl font-bold text-foreground">$10.00</span>
              </div>
            </div>

            {/* $5 Section */}
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Baby className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Children & Teens (aged 6-17)</span>
                </div>
                <span className="font-display text-2xl font-bold text-foreground">$5.00</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">College Students (with current ID)</span>
                </div>
                <span className="font-display text-2xl font-bold text-foreground">$5.00</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Seniors (65 and over)</span>
                </div>
                <span className="font-display text-2xl font-bold text-foreground">$5.00</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Active Duty Military Personnel</span>
                </div>
                <span className="font-display text-2xl font-bold text-foreground">$5.00</span>
              </div>
            </div>

            {/* Free Section */}
            <div className="mb-6 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">FREE Admission</p>
                  <p className="text-sm text-muted-foreground">Museum Members & children aged 5 and under</p>
                </div>
                <span className="font-display text-2xl font-bold text-secondary">FREE</span>
              </div>
            </div>

            <Button variant="copper" size="xl" className="w-full">
              <Ticket className="w-5 h-5" />
              Buy Tickets Online
            </Button>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-sm text-center text-muted-foreground">
                <strong>Group visits?</strong> Contact us at{" "}
                <a href="mailto:info@charlesrivermuseum.org" className="text-secondary hover:underline">
                  info@charlesrivermuseum.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Discounts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <BadgePercent className="w-6 h-6 text-cream" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground">Discounts & Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* NARM */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">NARM</h3>
              <p className="text-sm text-muted-foreground mb-3">North American Reciprocal Museum Association</p>
              <p className="text-sm text-muted-foreground">
                Members at the Supporter Level ($150) or higher enjoy reciprocal memberships at over 1,300 museums
                across the country.
              </p>
            </div>

            {/* MA Educators */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <School className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-xl font-semibold text-foreground">MA Educators</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Massachusetts K-12, College and University education professionals receive a discounted admission rate
                of <strong className="text-foreground">$5.00</strong> when presenting a valid work ID or proof of
                affiliation.
              </p>
            </div>

            {/* AAA */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">AAA Members</h3>
              <p className="text-sm text-muted-foreground">
                Visitors get <strong className="text-foreground">20% off</strong> General Museum Admission upon
                presentation of a valid AAA card.
              </p>
            </div>

            {/* EBT / Card to Culture */}
            <div className="bg-card rounded-xl p-6 border border-border md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-secondary" />
                <h3 className="font-display text-xl font-semibold text-foreground">EBT & Card to Culture</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                EBT cardholders receive <strong className="text-foreground">50% off</strong> regular admission.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                We are proud to participate in Mass Cultural Council's Card to Culture program in collaboration with the
                Department of Transitional Assistance, the Department of Public Health's WIC Nutrition Program, the
                Massachusetts Health Connector, and hundreds of organizations.
              </p>
              <p className="text-sm text-muted-foreground">
                See the complete list of participating organizations offering{" "}
                <a
                  href="https://www.mass.gov/info-details/ebt-card-to-culture-organizations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  EBT
                </a>
                ,{" "}
                <a
                  href="https://www.mass.gov/info-details/get-discounts-with-your-wic-card#cultural-organizations-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  WIC
                </a>
                ,{" "}
                <a
                  href="https://www.wonderfundma.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  Wonderfund
                </a>
                , and{" "}
                <a
                  href="https://www.mahealthconnector.org/learn/plan-information/connectorcare-plans/connectorcare-card-to-culture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  ConnectorCare
                </a>{" "}
                discounts.
              </p>
            </div>

            {/* SUN Bucks */}
            <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">SUN Bucks</h3>
              <p className="text-sm text-muted-foreground">
                Mass Cultural Council's Card to Culture program's Sun Bucks accepted from{" "}
                <strong className="text-foreground">June 17 - September 1, 2025</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
