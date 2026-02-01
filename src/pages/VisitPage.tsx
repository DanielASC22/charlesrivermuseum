import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

const VisitPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Visit"
          subtitle="Plan your trip to the Charles River Museum of Industry & Innovation"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1625026778839-L6T8B1SX4QVFGZ2QFFLR/Machine+Shop+150dpi.jpg"
        />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default VisitPage;
