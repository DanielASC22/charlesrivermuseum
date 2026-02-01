import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-museum.jpg";
import { CornerGears } from "./DecorativeGears";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Charles River Museum interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Decorative Gears - Above the gradient */}
      <CornerGears position="bottom-right" opacity={0.35} />

      {/* Content */}
      <div className="relative section-container py-20">
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Where History
            <span className="block text-secondary">Meets Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-cream/80 mb-8 leading-relaxed"
          >
            Explore the machines, inventors, and innovations that shaped American industry. 
            From steam engines to robotics—experience centuries of ingenuity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="hero" size="xl">
              Plan Your Visit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-10 md:gap-16 mt-12 pt-8 border-t border-cream/30"
          >
            <div>
              <p className="text-5xl md:text-6xl font-display font-bold text-secondary drop-shadow-lg">200+</p>
              <p className="text-sm md:text-base text-cream mt-1">Historic Artifacts</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-display font-bold text-secondary drop-shadow-lg">1814</p>
              <p className="text-sm md:text-base text-cream mt-1">Mill Founded</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-display font-bold text-secondary drop-shadow-lg">5</p>
              <p className="text-sm md:text-base text-cream mt-1">Interactive Exhibits</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
