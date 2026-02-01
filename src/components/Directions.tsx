import { motion } from "framer-motion";
import { MapPin, Car, AlertTriangle, Train, Bus, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const otherParkingLots = [
  { 
    name: "Carter Street Lot", 
    address: "3 Carter St",
    mapUrl: "https://www.google.com/maps/place/Carter+Street+Lot/@42.3744325,-71.2356155"
  },
  { 
    name: "Crescent Street Parking Lot", 
    address: "24 Crescent St",
    mapUrl: "https://www.google.com/maps/place/24+Crescent+St,+Waltham,+MA+02453"
  },
  { 
    name: "Walnut Street Lot", 
    address: "41 Walnut St",
    mapUrl: "https://www.google.com/maps/place/41+Walnut+St,+Waltham,+MA+02453"
  },
  { 
    name: "Common Street Lot", 
    address: "68 Common St",
    mapUrl: "https://www.google.com/maps/place/68+Common+St,+Waltham,+MA+02451"
  },
];

const busRoutes = [
  { number: "70", url: "https://www.mbta.com/schedules/70/line" },
  { number: "505", url: "https://www.mbta.com/schedules/505/line" },
  { number: "553", url: "https://www.mbta.com/schedules/553/line" },
  { number: "554", url: "https://www.mbta.com/schedules/554/line" },
  { number: "556", url: "https://www.mbta.com/schedules/556/line" },
  { number: "558", url: "https://www.mbta.com/schedules/558/line" },
];

export const Directions = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="section-container">
        {/* CRITICAL PARKING WARNING */}
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
                There is <strong className="text-destructive">NO Museum Visitor Parking</strong> in the Francis Cabot Lowell Mill lots where we are located.
              </p>
              <p className="text-foreground mt-2">
                <strong className="text-destructive">ALL</strong> vehicles without a Mill-approved Parking Permit, <em>including</em> handicap permitted vehicles, <strong className="text-destructive">WILL BE SUBJECT TO TOW by Mill Management</strong>. This applies to ALL Museum Visitors, including Private Events.
              </p>
              <p className="text-muted-foreground mt-3">
                Please seek parking on street or at other public lots listed below.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Embassy Parking - Primary Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-8 rounded-xl bg-secondary/10 border-2 border-secondary shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <Car className="w-7 h-7 text-cream" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold text-secondary uppercase tracking-wide mb-2">
                Park at Embassy Parking Garage
              </h3>
              <p className="text-foreground font-semibold text-lg">
                Embassy Public Parking Garage — 42 Cooper St
              </p>
              <p className="text-muted-foreground mt-2">
                This is the <strong className="text-foreground">closest and most convenient parking</strong> for museum visitors. 
                Parking is <strong className="text-foreground">$1.00/hour</strong> in all municipal lots, or <strong className="text-foreground">$6.00 for a full day</strong>.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/42+Cooper+St,+Waltham,+MA+02453"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="copper" size="lg">
                    <Navigation className="w-4 h-4" />
                    Get Directions to Embassy Parking
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Museum Address & Walking Directions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cream" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Museum Location</h2>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border">
                <p className="text-foreground font-semibold text-xl">154 Moody Street</p>
                <p className="text-muted-foreground text-lg">Waltham, MA 02453</p>
                <p className="text-muted-foreground mt-1">781-893-5410</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=154+Moody+Street+Waltham+MA+02453"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      <Navigation className="w-4 h-4" />
                      Open in Google Maps
                    </Button>
                  </a>
                  <a
                    href="https://maps.apple.com/?address=154+Moody+Street,Waltham,MA+02453"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg">
                      Apple Maps
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Walking Directions from Embassy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 p-5 rounded-xl bg-secondary/10 border border-secondary/20"
            >
              <h3 className="font-display text-lg font-semibold mb-3">Walking from Embassy Parking</h3>
              <p className="text-muted-foreground">
                Once you've parked in the Cooper Street lot or the adjacent Embassy Parking Garage, take a short but thoroughly enjoyable, scenic walk on the <strong className="text-foreground">Landry footbridge</strong> across the Charles River, turning to your right (East) after you've crossed, and you'll see the Museum entrance about 100 yards ahead.
              </p>
              <p className="text-muted-foreground mt-3 italic">
                The footbridge is clearly indicated on the map below, immediately above (north) of the Embassy Parking Facility.
              </p>
            </motion.div>

            {/* Map Image - Walking Route */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg border border-border"
            >
              <a 
                href="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/2f639c9f-1124-4395-8d23-28fcfab0b6c9/Service+to+Cooper+map+final2.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/2f639c9f-1124-4395-8d23-28fcfab0b6c9/Service+to+Cooper+map+final2.jpg"
                  alt="Walking route from Embassy Parking to Museum"
                  className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer"
                />
              </a>
              <p className="text-sm text-muted-foreground p-3 text-center bg-muted/50">
                Click map to enlarge • Walking route from Embassy Parking to Museum
              </p>
            </motion.div>
          </div>

          {/* Right Column - Other Parking & Transit */}
          <div>
            {/* Other Parking Lots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <Car className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Other Public Parking</h2>
                  <p className="text-muted-foreground text-sm">$1.00/hour • $6.00 full day</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {otherParkingLots.map((lot) => (
                  <a
                    key={lot.name}
                    href={lot.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border bg-card border-border hover:bg-muted/50 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{lot.name}</p>
                        <p className="text-muted-foreground text-sm">{lot.address}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="http://bit.ly/WalthamParking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-secondary hover:underline font-medium"
              >
                <MapPin className="w-4 h-4" />
                View full parking map
              </a>
            </motion.div>

            {/* Area Parking Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 rounded-xl overflow-hidden shadow-lg border border-border"
            >
              <a 
                href="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/99be6406-73e8-4010-a557-83ba49bb5b38/CRMII+Large+Public+Lots+color.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/99be6406-73e8-4010-a557-83ba49bb5b38/CRMII+Large+Public+Lots+color.jpg"
                  alt="Area public parking lots map"
                  className="w-full h-auto hover:opacity-90 transition-opacity cursor-pointer"
                />
              </a>
              <p className="text-sm text-muted-foreground p-3 text-center bg-muted/50">
                Click map to enlarge • Area public parking lots
              </p>
            </motion.div>

            {/* Public Transit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Public Transit</h3>
              </div>

              <div className="space-y-4">
                {/* Commuter Rail */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Train className="w-4 h-4 text-secondary" />
                    MBTA Commuter Rail
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    <a 
                      href="http://www.mbta.com/schedules_and_maps/rail/lines/?route=FITCHBRG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      Fitchburg Line
                    </a>
                    {" "}— Waltham Center stop
                  </p>
                </div>

                {/* Bus Routes */}
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Bus className="w-4 h-4 text-secondary" />
                    MBTA Bus Routes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {busRoutes.map((route) => (
                      <a
                        key={route.number}
                        href={route.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                      >
                        Route {route.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* City Parking Info Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a
                href="https://www.city.waltham.ma.us/home/pages/parking-in-waltham"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:underline font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                City of Waltham Parking Information
              </a>
            </motion.div>
          </div>
        </div>

        {/* YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-6">
            Watch: Finding Our Visitor's Entrance
          </h3>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/2pUueGRAips"
                title="A few tips about PARKING when coming to visit us for the first time!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
