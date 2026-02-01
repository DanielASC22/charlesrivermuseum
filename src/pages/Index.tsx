import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Featured exhibits data
const exhibits = [
  {
    status: "On View",
    title: "The Boston Associates",
    description: "America's First Industrial Dynasty. Discover the businessmen who founded the Boston Manufacturing Company on our site in 1813.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1619564945377-GDPYZ7FZ1NQBEHT7SR7B/Northeast%2B001.jpg",
    href: "/exhibits",
  },
  {
    status: "Permanent",
    title: "Machine Shop Gallery",
    description: "Experience the working machinery that powered American industry, from textile looms to precision watchmaking tools.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1625026778839-L6T8B1SX4QVFGZ2QFFLR/Machine+Shop+150dpi.jpg",
    href: "/exhibits",
  },
  {
    status: "Interactive",
    title: "Watch City Bike Lab",
    description: "A community bicycle repair shop where volunteers teach bike maintenance and repair skills to youth and adults.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1665091590181-WRK22V5Y1MRV1H0PIVK7/Sign+and+stack.jpg",
    href: "/exhibits",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Keep existing */}
        <Hero />

        {/* Exhibits Horizontal Scroll Section */}
        <section className="py-0" style={{ backgroundColor: 'hsl(20, 35%, 18%)' }}>
          <div className="flex overflow-x-auto scrollbar-hide">
            {exhibits.map((exhibit, index) => (
              <motion.div
                key={exhibit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[90vw] md:w-[50vw] lg:w-[33.333vw] relative group"
              >
                <Link to={exhibit.href} className="block relative aspect-[4/3] overflow-hidden">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/60 to-primary/30" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-secondary text-sm font-medium tracking-wide uppercase">
                      {exhibit.status}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mt-2 group-hover:text-secondary transition-colors">
                      {exhibit.title}
                    </h3>
                    <p className="text-cream/70 mt-2 text-sm md:text-base line-clamp-2">
                      {exhibit.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-secondary mt-4 font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Statement Section - Chrysler Style */}
        <section className="py-12 md:py-20 bg-secondary text-cream">
          <div className="section-container">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-cream/60 text-sm tracking-widest uppercase mb-6"
              >
                Celebrating Innovation Since 1980
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Experience Two Centuries of American Ingenuity.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-cream/80 mt-8 leading-relaxed"
              >
                From the birth of the American Industrial Revolution right here in Waltham 
                to today's cutting-edge innovations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-10"
              >
                <Link to="/visit">
                  <Button variant="hero" size="xl" className="text-xl md:text-2xl px-10 py-6">
                    Plan Your Visit
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Two Column Feature Blocks */}
        <section className="grid md:grid-cols-2">
          {/* Weddings & Events */}
          <Link 
            to="/weddings" 
            className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] group overflow-hidden"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/7be7102e-d27a-43a2-91c4-0a181f528d3f/IMG_8336.JPG"
              alt="Historic venue for weddings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/60 to-primary/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-secondary text-sm font-medium tracking-wide uppercase mb-2">
                Weddings & Event Rentals
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-cream group-hover:text-secondary transition-colors">
                Host Your Special Event
              </h3>
              <p className="text-cream/70 mt-3 max-w-md">
                The perfect historic venue for your wedding, corporate event, or private celebration.
              </p>
              <span className="inline-flex items-center gap-2 text-secondary mt-6 font-medium group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Education Programs */}
          <Link 
            to="/events" 
            className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] group overflow-hidden"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/eed0429d-c944-4bce-9aed-ff90eab51e0a/Michael+Folsom+and+boilers.jpg"
              alt="Educational programs"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/60 to-primary/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-secondary text-sm font-medium tracking-wide uppercase mb-2">
                Programs & Workshops
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-cream group-hover:text-secondary transition-colors">
                Learn With Us
              </h3>
              <p className="text-cream/70 mt-3 max-w-md">
                Hands-on workshops, lectures, and educational programs for all ages.
              </p>
              <span className="inline-flex items-center gap-2 text-secondary mt-6 font-medium group-hover:gap-3 transition-all">
                See programs
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </section>

        {/* About Section with Image */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1717692453886-19NOEEV351GCGUTULU3N/IMG_4459.jpg"
                  alt="Charles River Museum entrance"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-xl -z-10" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-4">
                  About Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  To educate about America's industrial history and inspire future innovation.
                </h2>
                <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                  Located in the historic Francis Cabot Lowell Mill, we bring together intriguing 
                  artifacts, cultural insights, and inspiring stories to delight people of all ages.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-secondary font-semibold mt-8 hover:gap-3 transition-all"
                >
                  Read our story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Events Banner */}
        <section className="py-16 bg-primary text-cream">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Calendar className="w-10 h-10 text-secondary" />
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Workshops, talks, tours, and more.
                </h2>
              </div>
              <Link to="/events">
                <Button variant="hero" size="lg">
                  See the full event schedule
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom Feature Cards */}
        <section className="grid md:grid-cols-3">
          {/* Visit Card */}
          <Link 
            to="/visit" 
            className="bg-card p-8 md:p-12 border-r border-border group hover:bg-muted/50 transition-colors"
          >
            <Ticket className="w-10 h-10 text-secondary mb-6" />
            <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
              Plan Your Visit
            </h3>
            <p className="text-muted-foreground mt-3">
              Hours, admission, directions & parking information.
            </p>
            <span className="inline-flex items-center gap-2 text-secondary mt-6 font-medium group-hover:gap-3 transition-all">
              Get details
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {/* Support Card */}
          <a 
            href="https://secure.lglforms.com/form_engine/s/svs6O5JuILHp5jeZoFFYOQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary p-8 md:p-12 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cream/60 text-sm tracking-widest uppercase">Support the Museum</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cream leading-tight">
              Your donations fund our day-to-day operations and are the life blood of our institution.
            </h3>
            <span className="inline-flex items-center gap-2 text-cream mt-8 font-medium group-hover:gap-3 transition-all">
              Donate now
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Quote Card */}
          <div className="bg-primary p-8 md:p-12 text-cream">
            <p className="text-cream/60 text-sm tracking-widest uppercase mb-6">From Our Visitors</p>
            <blockquote className="font-display text-xl md:text-2xl font-medium italic leading-relaxed">
              "A hidden gem celebrating the industrial heritage that made America. 
              The artifacts and stories here are truly fascinating."
            </blockquote>
            <p className="text-cream/60 mt-6 text-sm">— Museum Visitor</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
