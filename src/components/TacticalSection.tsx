import heroTactical from "@/assets/hero-tactical.jpg";
import { Shield, Target, Radio, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TacticalSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Shield,
      title: t.battleTested,
      description: t.battleDescription,
    },
    {
      icon: Target,
      title: t.precision,
      description: t.precisionDescription,
    },
    {
      icon: Radio,
      title: t.autonomy,
      description: t.autonomyDescription,
    },
    {
      icon: Zap,
      title: t.deployment,
      description: t.deploymentDescription,
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img
              src={heroTactical}
              alt="Tactical Operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                {t.techBreakthrough}
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                {t.techDescription}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">{t.advantagesTitle}</h2>
              <p className="text-muted-foreground text-lg">
                {t.advantagesDescription}
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
