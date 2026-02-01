import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Ticket, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import museumLogo from "@/assets/museum-logo.png";

const navLinks = [
  { name: "Visit", href: "/visit" },
  { name: "Events", href: "/events" },
  { name: "Exhibits", href: "/exhibits" },
  { name: "Learn With Us", href: "/education" },
  { name: "Weddings & Rentals", href: "/weddings" },
  { name: "About", href: "/about" },
  { name: "Support Us", href: "/give" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="section-container flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Wed-Fri: 10am-3pm • Sat: 10am-2:30pm</span>
          </div>
          <Link to="/directions" className="hidden md:flex items-center gap-2 hover:text-secondary transition-colors">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>154 Moody St, Waltham, MA</span>
          </Link>
          <a
            href="tel:781-893-5410"
            className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4 text-secondary" />
            781-893-5410
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-2"
            : "bg-background py-4"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={museumLogo} 
                alt="Charles River Museum of Industry & Innovation" 
                className="w-14 h-14 object-contain"
              />
              <h1 className="hidden sm:block font-display text-xl font-bold text-foreground leading-tight">
                Charles River Museum
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors font-medium ${
                    isActive(link.href)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.tickettailor.com/events/charlesrivermuseum/830937/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="copper" size="lg" className="hidden sm:flex">
                  <Ticket className="w-4 h-4" />
                  Buy Tickets
                </Button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg"
          >
            <nav className="section-container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transition-colors font-medium py-2 ${
                    isActive(link.href)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.tickettailor.com/events/charlesrivermuseum/830937/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="copper" size="lg" className="mt-4 w-full">
                  <Ticket className="w-4 h-4" />
                  Buy Tickets
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
};
