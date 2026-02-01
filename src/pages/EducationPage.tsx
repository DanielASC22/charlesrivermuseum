import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import heroImage from "@/assets/education-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Mic, MapPin, Lightbulb, GraduationCap } from "lucide-react";

const educationPrograms = [
  {
    id: "collaboratory",
    title: "Charles River Collaboratory",
    subtitle: "Youth-Led Innovation Space",
    description:
      "A youth-led innovation space where students from all backgrounds lead, learn, and create solutions to community challenges. In partnership with Boston College Lynch School of Education and Department of Engineering.",
    image:
      "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1708526034886-3HNTDC3JOTRHBY6XJWXN/Collab.jpg",
    highlights: [
      "10 3D printers, laser cutters, CNC machines, screen printers",
      "Led by Waltham High School Innovation Fellows",
      "Near-peer mentoring and youth leadership",
      "Community-centered STEM learning",
    ],
    link: "https://charlesrivercollab.org/",
    icon: Lightbulb,
    featured: true,
  },
  {
    id: "mill-talks",
    title: "Mill Talks",
    subtitle: "Our Lowell Lecture Series",
    description:
      "Free lectures and panel discussions on topics related to the Industrial Revolution, innovation across disciplines, and the future of American industry. Made possible by the generous support of the Lowell Institute.",
    image:
      "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1732206121551-S9TBAW1NBOYYH1750L93/Screen%252BShot%252B2020-04-29%252Bat%252B1.25.47%252BPM.jpg",
    highlights: [
      "Free and open to the public",
      "Partnership with GBH Forum Network",
      "Past talks available on YouTube",
      "Topics span history to modern innovation",
    ],
    link: "https://www.youtube.com/playlist?list=PLD4AeH5UmWDggs4pzPc7HSiNfbxZPVLwE",
    icon: Mic,
    featured: true,
  },
  {
    id: "tours",
    title: "Industry & Innovation Tours",
    subtitle: "Explore the World's First Modern Factory",
    description:
      "Discover the history and architecture of the 1813 Boston Manufacturing Company through guided tours that bring the Industrial Revolution to life.",
    image:
      "https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1736885898127-4D65HUELXSYYZDRL3DOI/Industry+and+Innoation+Tours+2.png",
    highlights: [
      "From Bale to Bolt: The First Integrated Factory",
      "The Mill Girls: In Story & Song",
      "Manufacturing the Modern World: Gallery Tour",
      "Time Along the Charles: Walking Tour",
    ],
    link: "/events",
    icon: MapPin,
    featured: false,
  },
];

const tourPrograms = [
  {
    title: "From Bale to Bolt",
    subtitle: "The First Integrated Factory",
    description:
      "Discover the history and architecture of the world's first modern factory. Learn how this maze of buildings developed from a single brick mill.",
    duration: "75 minutes",
    price: "FREE",
  },
  {
    title: "The Mill Girls",
    subtitle: "In Story & Song",
    description:
      "Explore the trials and triumphs of mill women who worked in Boston Manufacturing Company textile mills. Hear songs written by the mill women themselves.",
    duration: "45 minutes",
    price: "FREE",
  },
  {
    title: "Manufacturing the Modern World",
    subtitle: "A Gallery Tour",
    description:
      "A guided experience highlighting transformative advancements in manufacturing, precision engineering, and industrial technology.",
    duration: "60 minutes",
    price: "FREE",
  },
  {
    title: "Time Along the Charles",
    subtitle: "Walking Tour",
    description:
      "Learn about local watch and clock factories that were once known worldwide. A leisurely 2.5-mile loop through Watch City's horological history.",
    duration: "2.5 hours",
    price: "FREE",
  },
];

const collaboratoryValues = [
  "Create safe learning spaces where different values, beliefs, skills, and lived experiences are critical to solving problems",
  "Focus on building authentic and trusting relationships",
  "Encourage risk-taking, mistake-making, and imagination",
  "Create a space where youth trust that everyone has their best interests in mind",
];

const EducationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <PageHero
        title="LEARN WITH US"
        subtitle="Inspiring the next generation through hands-on learning, lectures, and guided experiences"
        image={heroImage}
        imageAlt="Charles River Museum Education Programs"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Museum's home for deep dives on industry, innovation, hands-on STEM learning, walking tours, and more.
              Explore our educational programs designed to inspire curiosity and connect the past to the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs Grid - Met Museum Style */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-secondary mb-12"
          >
            Featured Programs
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educationPrograms
              .filter((p) => p.featured)
              .map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <program.icon className="w-5 h-5 text-secondary" />
                        <span className="text-sm text-muted-foreground">{program.subtitle}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                      <ul className="space-y-2 mb-6">
                        {program.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Button variant="copper" asChild className="w-full">
                        <a href={program.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Charles River Collaboratory Deep Dive */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-medium">Youth-Led Innovation</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Collaboratory: An "Unmaker" Space
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike traditional maker spaces gatekept by adults, the Charles River Collaboratory is led by youth.
                Here, students are enabled, empowered, and engaged in learning and identifying what they want to
                explore, learn, and teach others.
              </p>
              <div className="space-y-4 mb-8">
                {collaboratoryValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-foreground text-sm">{value}</p>
                  </motion.div>
                ))}
              </div>
              <Button variant="copper" asChild>
                <a href="https://charlesrivercollab.org/" target="_blank" rel="noopener noreferrer">
                  Visit Collaboratory Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/9a60f115-d7c4-4ee6-b82d-d121afb59160/White+Board.jpeg"
                alt="Collaboratory whiteboard session"
                className="rounded-lg object-cover w-full h-48"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/601fe95b-05c3-40a5-bf82-6ddb6a8d2e15/Working.jpg"
                alt="Students working in the Collaboratory"
                className="rounded-lg object-cover w-full h-48"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/d71740ec-7b7f-425f-9590-edbae170357f/Mistakes.jpg"
                alt="Celebrating mistakes in learning"
                className="rounded-lg object-cover w-full h-48 col-span-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry & Innovation Tours */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="bg-card rounded-xl p-8 inline-block">
              <div className="inline-flex items-center justify-center gap-3 mb-4 bg-secondary px-4 py-2 rounded-full">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
                <span className="text-secondary-foreground font-medium">Guided Experiences</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">Industry & Innovation Tours</h2>
              <p className="text-cream/80 max-w-2xl mx-auto">
                Four unique tour programs exploring the world's first modern factory, the stories of mill workers, and the
                evolution of American manufacturing.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourPrograms.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">{tour.title}</h3>
                        <p className="text-secondary font-medium text-sm">{tour.subtitle}</p>
                      </div>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-bold">
                        {tour.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tour.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span>Duration: {tour.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button variant="outline" asChild>
              <a href="/events">View Tour Schedule</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mill Talks Section */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1732206121551-S9TBAW1NBOYYH1750L93/Screen%252BShot%252B2020-04-29%252Bat%252B1.25.47%252BPM.jpg"
                alt="Mill Talks lecture series"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-medium">Lowell Lecture Series</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mill Talks & Tech Talks
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our Mill Talks series features lectures and panel discussions on topics related to the Industrial
                Revolution, innovation across disciplines, and the mission of the Charles River Museum—to encourage and
                inspire future innovation in America.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Free and open to the public, made possible by the generous support of the Lowell Institute. Past talks
                are available on the Charles River Museum YouTube Channel and the GBH Forum Network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="copper" asChild>
                  <a
                    href="https://www.youtube.com/playlist?list=PLD4AeH5UmWDggs4pzPc7HSiNfbxZPVLwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Past Talks <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/events">Upcoming Talks</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funders Section */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Our Education Programs Are Made Possible By
            </h3>
            <p className="text-muted-foreground">
              Generous support from foundations and institutions committed to education
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1620605258644-IO8UI7KMVZ095LSFEQTC/Lowell+Inst.png"
              alt="Lowell Institute"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/e563c6e1-e2c5-45c7-a080-17a395b8546a/NSF_Logo.png"
              alt="National Science Foundation"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/c64878c9-36a0-45ac-97c2-58b2172c6249/Boston_College_seal.svg.png"
              alt="Boston College"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/37b85acc-5979-42ba-ad8b-2ebbb6d59b8a/Cummings-30-Mil.jpg"
              alt="Cummings Foundation"
              className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationPage;
