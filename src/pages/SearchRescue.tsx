import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchRescue = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                {language === 'UA' ? 'Пошук та рятування' : 'Search & Rescue'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Швидкий пошук та координація рятувальних операцій'
                  : 'Rapid search and coordination of rescue operations'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Пошук людей' : 'People Search'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Швидкий пошук зниклих людей у важкодоступних місцях'
                    : 'Rapid search for missing people in hard-to-reach places'
                  }
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Координація рятування' : 'Rescue Coordination'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Координація дій рятувальних служб та надання оперативної інформації'
                    : 'Coordination of rescue services and providing operational information'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchRescue;
