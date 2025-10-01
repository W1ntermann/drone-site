import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Careers = () => {
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
                {language === 'UA' ? 'Кар\'єра в AEROTECH' : 'Careers at AEROTECH'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Приєднуйтесь до команди професіоналів, які створюють технології майбутнього'
                  : 'Join a team of professionals creating technologies of the future'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Чому варто працювати з нами' : 'Why Work With Us'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Ми створюємо умови для професійного та особистого розвитку кожного співробітника'
                  : 'We create conditions for professional and personal development of each employee'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'UA' ? 'Цікаві проекти' : 'Interesting Projects'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Робота над передовими технологіями'
                    : 'Working on cutting-edge technologies'
                  }
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'UA' ? 'Професійний розвиток' : 'Professional Development'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Навчання та кар\'єрне зростання'
                    : 'Training and career growth'
                  }
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'UA' ? 'Команда експертів' : 'Expert Team'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Робота з досвідченими фахівцями'
                    : 'Working with experienced professionals'
                  }
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'UA' ? 'Соціальний пакет' : 'Benefits Package'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'UA' 
                    ? 'Медичне страхування та бонуси'
                    : 'Health insurance and bonuses'
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
                {language === 'UA' ? 'Готові приєднатися?' : 'Ready to Join?'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Надішліть нам своє резюме'
                  : 'Send us your resume'
                }
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                {language === 'UA' ? 'Надіслати резюме' : 'Send Resume'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;