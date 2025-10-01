import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Monitoring = () => {
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
                {language === 'UA' ? 'Моніторинг та спостереження' : 'Monitoring & Surveillance'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Безперервний контроль територій та об\'єктів з високою точністю'
                  : 'Continuous monitoring of territories and objects with high precision'
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
                  {language === 'UA' ? 'Цивільний моніторинг' : 'Civil Monitoring'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Спостереження за інфраструктурою, екологічний моніторинг, контроль дорожнього руху'
                    : 'Infrastructure surveillance, environmental monitoring, traffic control'
                  }
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Промисловий контроль' : 'Industrial Control'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Моніторинг промислових об\'єктів, трубопроводів, енергетичних мереж'
                    : 'Monitoring of industrial facilities, pipelines, energy networks'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Дізнайтесь більше' : 'Learn More'}
              </h2>
              <a href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                {language === 'UA' ? 'Зв\'язатися з нами' : 'Contact Us'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Monitoring;
