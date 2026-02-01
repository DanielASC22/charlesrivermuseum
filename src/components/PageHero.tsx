import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
}

export const PageHero = ({ title, subtitle, image, imageAlt }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Content centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl mt-3 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};
