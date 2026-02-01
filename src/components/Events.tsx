import { motion } from "framer-motion";
import { ArrowRight, Music, Mic, MapPin, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  category: "concert" | "talk" | "tour" | "workshop" | "special";
};

const events: Event[] = [
  // Concerts (2nd SHIFT Concert Series)
  {
    id: 1,
    title: "Winterpills",
    date: "Feb 27, 2026",
    time: "8:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764957061998-8JGBOPJBNDENY0X43ROQ/Winterpills%252BLindsey%252BTopham%252BPhoto-1653-.webp?format=750w",
    category: "concert",
  },
  {
    id: 2,
    title: "Ward Hayden & Greg Hall",
    date: "Mar 12, 2026",
    time: "8:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764959152785-HXEJ0SXOBUYGHWMMEEYR/314A0147.jpg?format=750w",
    category: "concert",
  },
  {
    id: 3,
    title: "Rachel Sumner & Traveling Light",
    date: "Mar 26, 2026",
    time: "8:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764959881611-J38CM7XJ8SEVDF0O633Y/Sumner%2Blight-69.jpeg?format=750w",
    category: "concert",
  },
  {
    id: 4,
    title: "Willy Porter",
    date: "Apr 9, 2026",
    time: "8:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764960262796-YSWDQS9I6C62EHXV61E4/willy-porter-hires-scaled.jpeg?format=750w",
    category: "concert",
  },
  {
    id: 5,
    title: "Laurie MacAllister",
    date: "Apr 30, 2026",
    time: "8:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764960820158-8PHTLB254CPBA87VB1T9/LM.jpg?format=750w",
    category: "concert",
  },

  // Mill Talks
  {
    id: 6,
    title: "Forging History: Saugus Iron Works NHS",
    date: "Feb 4, 2026",
    time: "7:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1768591671709-9UZBV62JPW7551NGQLH2/Untitled-1.jpg?format=750w",
    category: "talk",
  },
  {
    id: 7,
    title: "How To Fuel an Industrial Revolution",
    date: "Mar 4, 2026",
    time: "7:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1767897961119-PICO7JA1IGRD760A67ZP/05361u1_1.preview.jpg?format=750w",
    category: "talk",
  },
  {
    id: 8,
    title: "Chelsea Clock: 146 Years of Clockmaking",
    date: "Mar 11, 2026",
    time: "7:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1768591611193-VHYWTXUV6ZXIPXREH30M/Untitled-1.jpg?format=750w",
    category: "talk",
  },
  {
    id: 9,
    title: "Electronic Waste to Opportunity",
    date: "Mar 18, 2026",
    time: "7:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1768594923996-WBVTGVGFYOMUC303S7Y8/Untitled-1.jpg?format=750w",
    category: "talk",
  },

  // Tours
  {
    id: 10,
    title: "Manufacturing the Modern World",
    date: "Feb 13, 2026",
    time: "11:00 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/8fb97432-c609-4773-b7ef-e958ff675fce/Manufacturing+the+Modern+World.jpg?format=750w",
    category: "tour",
  },
  {
    id: 11,
    title: "The Mill Girls in Story & Song",
    date: "Feb 20, 2026",
    time: "11:00 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1736890434397-IMJO3Y3ESH28F6N3GENZ/Mill+Girls.jpg?format=750w",
    category: "tour",
  },
  {
    id: 12,
    title: "The Mill Girls in Story & Song",
    date: "Feb 21, 2026",
    time: "11:00 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1736890434397-IMJO3Y3ESH28F6N3GENZ/Mill+Girls.jpg?format=750w",
    category: "tour",
  },
  {
    id: 13,
    title: "The Mill Girls in Story & Song",
    date: "Feb 27, 2026",
    time: "11:00 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1736890434397-IMJO3Y3ESH28F6N3GENZ/Mill+Girls.jpg?format=750w",
    category: "tour",
  },

  // Workshops
  {
    id: 14,
    title: "Laser Engraving Workshop",
    date: "Feb 7, 2026",
    time: "1:00 PM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1766070835758-L4G3Z1W0YI9V8AVZVJY6/DSC02306.png?format=750w",
    category: "workshop",
  },
  {
    id: 15,
    title: "Waltham Repair Cafe",
    date: "Feb 14, 2026",
    time: "11:00 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1728651563044-CO1YPKDQXEXRCENLUUBA/462492255_10161621511400325_6659899635403741825_n.jpg?format=750w",
    category: "workshop",
  },

  // Special Events
  {
    id: 16,
    title: "MassDestruction: Robot Combat!",
    date: "Jan 31, 2026",
    time: "10:30 AM",
    image: "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1729793114062-MNOMGFYBSWZYHPY2RAQO/Mass+Destruction+VENGANCE%21.png?format=750w",
    category: "special",
  },
];

const categoryConfig = {
  concert: {
    label: "2nd SHIFT Concerts",
    icon: Music,
    color: "bg-secondary",
  },
  talk: {
    label: "Mill Talks",
    icon: Mic,
    color: "bg-secondary",
  },
  tour: {
    label: "Tours",
    icon: MapPin,
    color: "bg-secondary",
  },
  workshop: {
    label: "Workshops",
    icon: Wrench,
    color: "bg-secondary",
  },
  special: {
    label: "Special Events",
    icon: Sparkles,
    color: "bg-secondary",
  },
};

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const config = categoryConfig[event.category];

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group block relative overflow-hidden rounded-lg cursor-pointer"
    >
      <AspectRatio ratio={1}>
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <span className={`inline-block self-start px-2 py-1 ${config.color} text-white text-xs font-semibold uppercase tracking-wide rounded mb-2`}>
            {config.label}
          </span>
          <span className="text-cream/80 text-sm font-medium mb-1">
            {event.date} • {event.time}
          </span>
          <h3 className="font-display text-lg font-bold text-cream group-hover:text-secondary transition-colors line-clamp-2">
            {event.title}
          </h3>
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-4 h-4 text-cream" />
          </div>
        </div>
      </AspectRatio>
    </motion.a>
  );
};

const EventSection = ({
  title,
  icon: Icon,
  events,
  color,
}: {
  title: string;
  icon: React.ElementType;
  events: Event[];
  color: string;
}) => {
  if (events.length === 0) return null;

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <Icon className="w-6 h-6 text-secondary" />
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h3>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export const Events = () => {
  const concerts = events.filter((e) => e.category === "concert");
  const talks = events.filter((e) => e.category === "talk");
  const tours = events.filter((e) => e.category === "tour");
  const workshops = events.filter((e) => e.category === "workshop");
  const specials = events.filter((e) => e.category === "special");

  return (
    <section id="events" className="py-20 bg-card/90 backdrop-blur-sm">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-medium"
          >
            What's Happening
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2"
          >
            Upcoming Events
          </motion.h2>
        </div>

        {/* Special Events First */}
        <EventSection
          title="Special Events"
          icon={Sparkles}
          events={specials}
          color="bg-secondary"
        />

        {/* Concerts */}
        <EventSection
          title="2nd SHIFT Concert Series"
          icon={Music}
          events={concerts}
          color="bg-secondary"
        />

        {/* Mill Talks */}
        <EventSection
          title="Mill Talks"
          icon={Mic}
          events={talks}
          color="bg-secondary"
        />

        {/* Tours */}
        <EventSection
          title="Industry & Innovation Tours"
          icon={MapPin}
          events={tours}
          color="bg-secondary"
        />

        {/* Workshops */}
        <EventSection
          title="Workshops"
          icon={Wrench}
          events={workshops}
          color="bg-secondary"
        />

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="bg-card/50 backdrop-blur-sm border-cream/30 text-foreground hover:bg-secondary hover:text-secondary-foreground"
          >
            View Full Calendar
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
