import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="About Us"
          subtitle="Preserving America's industrial heritage and inspiring future innovation"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1633637054271-1B8TAGECCX6RSZANOLC0/Museum+wide+angle+test.jpg"
        />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
