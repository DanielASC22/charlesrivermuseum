import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SingleGear } from "./DecorativeGears";

// Exhibit data from Charles River Museum
const featuredExhibits = [
  {
    id: "mill-at-falls",
    title: "The Mill at the Falls",
    subtitle: "The Evolution of the First Modern Factory",
    description: "A visual chronicle of two centuries of industrial history from Boston Manufacturing Company to Francis Cabot Lowell Mill.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/7be7102e-d27a-43a2-91c4-0a181f528d3f/IMG_8336.JPG",
    badge: "On Display Now",
    size: "large" as const,
  },
  {
    id: "beaver-surgical",
    title: "A Cut Above the Competition",
    subtitle: "Rudolph Beaver Company",
    description: "The story of precision surgical products and Rudolph Beaver's innovative journey from Gillette.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/934d837c-3110-444e-97cb-a5a373bc66f9/728ed986-40e3-6d2e-e665-e168eed6a3c3.jpg",
    badge: "Featured",
    size: "medium" as const,
  },
];

const miniTours = [
  {
    id: "waltham-watch",
    title: "The Waltham Watch Collection",
    subtitle: "Virtual Mini Tour",
    description: "Time to Get a Watch — a six-part video tour exploring the innovations of the Waltham Watch Company.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1620312677036-MYV03S0LLWDPLC6PWXFH/watch+screw+cutting+machine.jpg",
    hasVideo: true,
  },
  {
    id: "mechanized-transport",
    title: "Mechanized Transportation",
    subtitle: "Virtual Mini Tour",
    description: "Getting From Here to There — a six-part look at mechanized human transportation exhibits.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1623972140320-X8XALCEW1413RFZCKI2U/DSC00017v2.jpg",
    hasVideo: true,
  },
  {
    id: "docent-videos",
    title: "Docent Videos",
    subtitle: "Guided Artifact Tours",
    description: "Steam Pumper Engine, Watch Case Pantograph, Paper Bag Machine Repair, and more.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1620313411139-RP8BIA9ND739ESZ8F6TY/CRMII+Machine+shop.jpg",
    hasVideo: true,
  },
];

const artifacts = [
  {
    id: "measurement",
    title: "Measurement",
    curator: "Robert W. Timmerman, PE",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1620321583221-2E6W6MC6F553QXPSTRGU/Measurement_Thumbnail_IMG_6678.jpg",
  },
  {
    id: "lombard-governor",
    title: "Lombard Water Turbine Governor",
    curator: "Robert W. Timmerman PE, CEM, LEED AP",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1623970930085-1P69YJ3VBI07N0D5S24T/DSC00006.jpg",
  },
  {
    id: "bmc-bell",
    title: "The Boston Manufacturing Company Bell",
    description: "The second and last known bell in the cupola of the original building.",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1620321980451-3XTMBK2NQL18Q6JNXFCM/bell.jpg",
  },
];

// Gallery Card Component
const GalleryCard = ({ 
  item, 
  index, 
  variant = "default" 
}: { 
  item: typeof featuredExhibits[0] | typeof miniTours[0] | typeof artifacts[0];
  index: number;
  variant?: "featured" | "tour" | "artifact" | "default";
}) => {
  const isFeatured = variant === "featured";
  const isTour = variant === "tour";
  const isArtifact = variant === "artifact";
  
  // Type guards for different item types
  const hasBadge = "badge" in item;
  const hasVideo = "hasVideo" in item && item.hasVideo;
  const hasCurator = "curator" in item;
  const hasSubtitle = "subtitle" in item;
  const hasDescription = "description" in item;
  const size = "size" in item ? item.size : "small";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`
        group relative overflow-hidden cursor-pointer
        ${isFeatured && size === "large" ? "md:col-span-2 md:row-span-2" : ""}
        ${isFeatured && size === "medium" ? "md:row-span-2" : ""}
        ${isArtifact ? "aspect-square" : ""}
        ${isTour ? "aspect-[4/3]" : ""}
        ${!isArtifact && !isTour && size === "small" ? "aspect-[4/3]" : ""}
        ${isFeatured && size === "large" ? "aspect-[4/3] md:aspect-auto md:min-h-[500px]" : ""}
        ${isFeatured && size === "medium" ? "aspect-[3/4]" : ""}
      `}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Badge */}
      {hasBadge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider rounded">
            {item.badge}
          </span>
        </div>
      )}

      {/* Video Indicator */}
      {hasVideo && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary transition-colors">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Subtitle */}
        {hasSubtitle && (
          <motion.span 
            className="text-secondary text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          >
            {item.subtitle}
          </motion.span>
        )}

        {/* Title */}
        <h3 className={`
          font-display text-white leading-tight
          ${isFeatured && size === "large" ? "text-3xl md:text-4xl lg:text-5xl" : ""}
          ${isFeatured && size === "medium" ? "text-2xl md:text-3xl" : ""}
          ${isTour ? "text-xl md:text-2xl" : ""}
          ${isArtifact ? "text-lg md:text-xl" : ""}
          ${!isFeatured && !isTour && !isArtifact ? "text-xl" : ""}
        `}>
          {item.title}
        </h3>

        {/* Description - Shows on hover for featured items */}
        {hasDescription && isFeatured && (
          <p className="text-white/80 mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            {item.description}
          </p>
        )}

        {/* Curator */}
        {hasCurator && (
          <p className="text-white/60 text-sm mt-2 italic">
            Curated by {item.curator}
          </p>
        )}

        {/* Arrow indicator */}
        <div className="flex items-center gap-2 mt-4 text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 delay-150">
          <span className="text-sm font-medium">Explore</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export const Exhibits = () => {
  return (
    <section id="exhibits" className="bg-background">
      {/* Featured Exhibits Section */}
      <div className="section-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">Now Showing</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Featured Exhibits</h2>
        </motion.div>

        {/* Masonry Grid for Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featuredExhibits.map((exhibit, index) => (
            <GalleryCard 
              key={exhibit.id} 
              item={exhibit} 
              index={index}
              variant="featured"
            />
          ))}
        </div>
      </div>

      {/* Mini Tours Section */}
      <div className="bg-muted/30">
        <div className="section-container py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Virtual Experience</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Mini Tours</h2>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="text-sm">6-part video series each</span>
            </div>
          </motion.div>

          {/* Tour Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {miniTours.map((tour, index) => (
              <GalleryCard 
                key={tour.id} 
                item={tour} 
                index={index}
                variant="tour"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Artifacts Collection Section */}
      <div className="section-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Collection</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-2">Artifacts</h2>
          </div>
          <Link 
            to="/visit" 
            className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
          >
            <MapPin className="w-5 h-5" />
            <span>Visit to see in person</span>
          </Link>
        </motion.div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {artifacts.map((artifact, index) => (
            <GalleryCard 
              key={artifact.id} 
              item={artifact} 
              index={index}
              variant="artifact"
            />
          ))}
        </div>
      </div>

      {/* Collaboratory CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-light" />
        
        {/* Decorative Gears */}
        <div className="absolute -top-16 -right-16 opacity-[0.2] pointer-events-none">
          <SingleGear size={280} teeth={18} duration={35} className="text-secondary" />
        </div>
        <div className="absolute top-32 right-48 opacity-[0.15] pointer-events-none">
          <SingleGear size={160} teeth={12} duration={22} reverse className="text-secondary" />
        </div>
        <div className="absolute top-56 right-16 opacity-[0.12] pointer-events-none">
          <SingleGear size={100} teeth={10} duration={15} className="text-secondary" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              Free Public Access • Thursdays 3-5pm
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              The Charles River Collaboratory
            </h2>
            <p className="text-cream/80 text-lg md:text-xl mb-8 max-w-2xl">
              Our makerspace features 3D printers, laser engravers, and hands-on workshops. 
              Innovation continues in the very building where American industry was born.
            </p>
            <Link
              to="/visit"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:gap-4"
            >
              Explore the Collaboratory
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
