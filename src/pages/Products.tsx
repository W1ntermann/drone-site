import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Products = () => {
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
                {t.raybird}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {language === 'UA' 
                  ? 'Найсучасніша тактична безпілотна авіаційна система третього покоління'
                  : 'State-of-the-art third-generation tactical unmanned aerial system'
                }
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {language === 'UA' ? 'Технічні характеристики' : 'Technical Specifications'}
              </Button>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {language === 'UA' ? 'Огляд системи' : 'System Overview'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === 'UA' 
                      ? 'БпАК Raybird (ACS-3) - це багатоцільова безпілотна авіаційна система, розроблена для виконання широкого спектру тактичних завдань.'
                      : 'UAV Raybird (ACS-3) is a multi-purpose unmanned aerial system designed to perform a wide range of tactical tasks.'
                    }
                  </p>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  {language === 'UA' ? 'Ключові переваги' : 'Key Advantages'}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <strong>{language === 'UA' ? 'Висока надійність' : 'High reliability'}</strong>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <strong>{language === 'UA' ? 'Простота експлуатації' : 'Ease of operation'}</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;