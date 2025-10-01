import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                {language === 'UA' ? 'Наші послуги' : 'Our Services'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Повний спектр послуг для забезпечення максимальної ефективності ваших систем'
                  : 'Full range of services to ensure maximum efficiency of your systems'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">{t.techSupport}</h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'UA' 
                    ? 'Цілодобова технічна підтримка, діагностика та ремонт систем.'
                    : '24/7 technical support, diagnostics and system repair.'
                  }
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">{t.training}</h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'UA' 
                    ? 'Комплексні програми навчання для операторів та технічного персоналу.'
                    : 'Comprehensive training programs for operators and technical staff.'
                  }
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">{t.consulting}</h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'UA' 
                    ? 'Експертні консультації з вибору оптимальних рішень.'
                    : 'Expert consulting on choosing optimal solutions.'
                  }
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">{t.modernization}</h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'UA' 
                    ? 'Модернізація існуючих систем та впровадження нових технологій.'
                    : 'Modernization of existing systems and implementation of new technologies.'
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

export default Services;