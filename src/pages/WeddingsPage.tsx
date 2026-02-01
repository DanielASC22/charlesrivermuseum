import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { PrivateEvents } from "@/components/PrivateEvents";
import { Footer } from "@/components/Footer";
import weddingsHero from "@/assets/weddings-hero.png";

const WeddingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Weddings & Events"
          subtitle="Host your celebration in one of Greater Boston's most memorable venues"
          image={weddingsHero}
        />
        <PrivateEvents />
      </main>
      <Footer />
    </div>
  );
};

export default WeddingsPage;
