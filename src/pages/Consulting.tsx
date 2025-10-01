import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Consulting = () => {
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
                {language === 'UA' ? 'Консультаційні послуги' : 'Consulting Services'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Експертні консультації з впровадження та оптимізації БпАК систем'
                  : 'Expert consulting on UAV systems implementation and optimization'
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
                  {language === 'UA' ? 'Стратегічне планування' : 'Strategic Planning'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Розробка стратегії впровадження БпАК технологій у вашій організації'
                    : 'Development of UAV technology implementation strategy in your organization'
                  }
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Технічні рішення' : 'Technical Solutions'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Підбір оптимальних технічних рішень для ваших специфічних потреб'
                    : 'Selection of optimal technical solutions for your specific needs'
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

export default Consulting;
