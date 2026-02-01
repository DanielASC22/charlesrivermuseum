import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Exhibits } from "@/components/Exhibits";
import { Footer } from "@/components/Footer";

const ExhibitsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Exhibits"
          subtitle="Explore our exhibits and artifacts from two centuries of American innovation"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1625026778839-L6T8B1SX4QVFGZ2QFFLR/Machine+Shop+150dpi.jpg"
        />
        <Exhibits />
      </main>
      <Footer />
    </div>
  );
};

export default ExhibitsPage;
