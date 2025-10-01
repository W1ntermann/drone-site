import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroDrone from "@/assets/hero-drone.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDrone})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-hero-gradient-start/90 to-hero-gradient-end/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
            {t.heroTitle}
            <br />
            <span className="text-accent">{t.heroSubtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            {t.heroTagline}
          </p>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t.heroDescription}
          </p>

          <div className="pt-6">
            <Link to="/about">
              <Button size="lg" className="text-lg px-8 py-6 gap-2">
                {t.learnMore}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
