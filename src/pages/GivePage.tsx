import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Give } from "@/components/Give";
import { Footer } from "@/components/Footer";

const GivePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Support Us"
          subtitle="Help preserve America's industrial heritage for future generations"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1633637054271-1B8TAGECCX6RSZANOLC0/Museum+wide+angle+test.jpg"
        />
        <Give />
      </main>
      <Footer />
    </div>
  );
};

export default GivePage;
