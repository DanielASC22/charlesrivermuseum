import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DonateSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive to-destructive/80" />
      
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--cream)) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, hsl(var(--cream)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Support the Museum
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl mb-4 max-w-2xl mx-auto"
          >
            Your donations fund our day-to-day operations and are the life blood of our institution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            Help us celebrate our location as the foundation of the American Industrial Revolution, 
            connecting older generations' expertise with young people's curiosity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://secure.lglforms.com/form_engine/s/svs6O5JuILHp5jeZoFFYOQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-destructive px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all hover:gap-4 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/give"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
            >
              More Ways to Support
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 text-sm mt-8"
          >
            The Charles River Museum is a 501(c)(3) nonprofit. Your gift is tax-deductible.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
