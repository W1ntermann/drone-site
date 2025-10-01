import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Modernization = () => {
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
                {language === 'UA' ? 'Модернізація систем' : 'System Modernization'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Оновлення та покращення існуючих БпАК систем'
                  : 'Updating and improving existing UAV systems'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Апгрейд обладнання' : 'Hardware Upgrade'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Модернізація апаратної частини для покращення продуктивності'
                    : 'Hardware modernization to improve performance'
                  }
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Оновлення ПЗ' : 'Software Updates'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Регулярні оновлення програмного забезпечення з новими функціями'
                    : 'Regular software updates with new features'
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

export default Modernization;
