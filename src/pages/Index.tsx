import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TacticalSection } from "@/components/TacticalSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TacticalSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
