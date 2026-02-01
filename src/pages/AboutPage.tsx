import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import aboutBackground from "@/assets/about-background.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-black/40" />
      <Header />
      <main>
        <PageHero
          title="About Us"
          subtitle="Preserving America's industrial heritage and inspiring future innovation"
          image={aboutBackground}
        />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
