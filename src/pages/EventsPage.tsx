import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title="Events"
          subtitle="Concerts, talks, tours, and workshops at the museum"
          image="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/1764957061998-8JGBOPJBNDENY0X43ROQ/Winterpills%252BLindsey%252BTopham%252BPhoto-1653-.webp"
        />
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
