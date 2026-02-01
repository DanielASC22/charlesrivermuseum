import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const timelineYears = [
  { year: "1813", label: "Boston Manufacturing Company founded" },
  { year: "1814", label: "Francis Cabot Lowell Mill built" },
  { year: "1980", label: "Museum incorporated" },
  { year: "1988", label: "Museum opens to public" },
  { year: "2007", label: "Renamed to include 'Innovation'" },
  { year: "2018", label: "Boston Associates exhibit unveiled" },
];

export const About = () => {
  return (
    <div className="bg-primary text-cream">
      {/* Statement Section */}
      <section className="py-20 bg-primary">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Statement */}
            <div className="lg:col-span-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-cream/60 text-sm md:text-base tracking-widest uppercase mb-6 block"
              >
                About the Museum
              </motion.span>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8"
              >
                Located in the Francis Cabot Lowell Mill, an icon of the American Industrial Revolution, 
                we bring together intriguing artifacts, cultural insights, and inspiring stories to 
                delight people of all ages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-8 md:gap-16"
              >
                <div>
                  <p className="text-cream/60 text-sm mb-1">Volunteer Opportunities</p>
                  <a 
                    href="mailto:info@charlesrivermuseum.org" 
                    className="text-cream font-medium underline underline-offset-4 hover:text-secondary transition-colors"
                  >
                    Get involved with us
                  </a>
                </div>
                <div>
                  <p className="text-cream/60 text-sm mb-1">Contact Us</p>
                  <a 
                    href="mailto:info@charlesrivermuseum.org" 
                    className="text-cream font-medium underline underline-offset-4 hover:text-secondary transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <div className="hidden lg:block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-cream/60 text-sm tracking-widest uppercase mb-6 block"
              >
                Explore Our History
              </motion.span>
              
              <div className="space-y-1">
                {timelineYears.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <p className="font-display text-4xl xl:text-5xl font-bold text-cream/20 group-hover:text-secondary transition-colors duration-300">
                      {item.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-cream/70 text-sm tracking-widest uppercase mb-6 block"
            >
              Our Mission
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight"
            >
              To educate about America's industrial history and to encourage and inspire future innovation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cream/80 mt-8 leading-relaxed"
            >
              We do this by creating engaging experiences that highlight the many fascinating 
              technical and business innovations that have taken place in this region and 
              continue to change the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/eed0429d-c944-4bce-9aed-ff90eab51e0a/Michael+Folsom+and+boilers.jpg"
                alt="Museum Founder Michael Folsom"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <p className="text-sm text-muted-foreground mt-4 italic">
                Museum Founder Michael Folsom
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <span className="text-secondary text-sm tracking-widest uppercase mb-4">
                Our History
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Brief History of the Museum
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In 1980, members of the Waltham community, led by the passionate wisdom of 
                  industrial historian <strong className="text-foreground">Michael Folsom</strong>, 
                  who would be the Museum's first Executive Director, incorporated the Charles 
                  River Museum of Industry. The organization officially opened its doors as a 
                  Museum in 1988.
                </p>
                <p>
                  These cultural, civic, and business leaders believed "that the people of New 
                  England deserved a clearer understanding of the region's rich industrial heritage 
                  and the ways that heritage continues to shape their lives."
                </p>
                <p>
                  In 2007, the institution was renamed The Charles River Museum of Industry and 
                  Innovation. The term "innovation" not only relates to the process of creativity 
                  and ingenuity that allows for the perfection of machines over time, but also 
                  underlines a new mission for the Museum: to consider not just the past, but 
                  the present and the future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boston Associates Section */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-sm tracking-widest uppercase mb-4 block"
            >
              Featured History
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              The Boston Associates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              In 2018 the Museum unveiled an exhibit on the Boston Associates, America's First 
              Industrial Dynasty. The Boston Associates were a group of Boston-based businessmen 
              gathered and initially led by Francis Cabot Lowell. Together they founded the 
              Boston Manufacturing Company on our site in 1813 and proceeded to develop the 
              New England textile industry and supporting organizational, financial, and 
              transportation infrastructure until the Civil War.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/exhibits"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline underline-offset-4"
              >
                Explore Our Exhibits
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Card to Culture Section */}
      <section className="py-16 bg-primary text-cream">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-4"
            >
              Card to Culture Program
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-cream/80 leading-relaxed mb-6"
            >
              We are proud to participate in Mass Cultural Council's Card to Culture program, 
              making cultural programming accessible to those for whom cost is a participation barrier.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-secondary font-semibold text-lg"
            >
              EBT cardholders receive 50% off regular admission.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nonprofit Status */}
      <section className="py-8 bg-muted/50 border-t border-border">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            The Charles River Museum of Industry & Innovation is a registered 501(c)(3) nonprofit corporation.
          </p>
        </div>
      </section>
    </div>
  );
};
