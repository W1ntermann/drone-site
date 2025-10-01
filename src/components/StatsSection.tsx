import { useLanguage } from "@/contexts/LanguageContext";

export const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "350,000+", label: t.missionHours },
    { value: "500+", label: t.specialists },
    { value: "100+", label: t.engineers },
    { value: "19", label: t.experience },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.statsTitle}</h2>
          <p className="text-xl text-primary-foreground/80">
            {t.statsDescription}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">
                {stat.value}
              </div>
              <div className="text-lg text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
