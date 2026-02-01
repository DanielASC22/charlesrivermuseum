import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Directions } from "@/components/Directions";
import { Footer } from "@/components/Footer";

const DirectionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Directions"
          subtitle="Parking information and how to find us"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1717692453886-19NOEEV351GCGUTULU3N/IMG_4459.jpg"
        />
        <Directions />
      </main>
      <Footer />
    </div>
  );
};

export default DirectionsPage;
