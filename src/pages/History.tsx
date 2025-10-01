import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const History = () => {
  const { language } = useLanguage();

  const milestones = [
    {
      year: "2005",
      title: language === 'UA' ? 'Заснування компанії' : 'Company Foundation',
      description: language === 'UA' 
        ? 'AEROTECH була заснована групою інженерів-ентузіастів з мрією створювати найкращі безпілотні системи.'
        : 'AEROTECH was founded by a group of enthusiastic engineers with a dream to create the best unmanned systems.'
    },
    {
      year: "2008",
      title: language === 'UA' ? 'Перший прототип' : 'First Prototype',
      description: language === 'UA' 
        ? 'Розробка та тестування першого прототипу безпілотної авіаційної системи.'
        : 'Development and testing of the first unmanned aerial system prototype.'
    },
    {
      year: "2012",
      title: language === 'UA' ? 'Серійне виробництво' : 'Mass Production',
      description: language === 'UA' 
        ? 'Початок серійного виробництва та перші комерційні поставки.'
        : 'Start of mass production and first commercial deliveries.'
    },
    {
      year: "2015",
      title: language === 'UA' ? 'Міжнародне визнання' : 'International Recognition',
      description: language === 'UA' 
        ? 'Отримання міжнародних сертифікатів та вихід на зарубіжні ринки.'
        : 'Obtaining international certificates and entering foreign markets.'
    },
    {
      year: "2018",
      title: language === 'UA' ? 'Технологічний прорив' : 'Technological Breakthrough',
      description: language === 'UA' 
        ? 'Впровадження штучного інтелекту та автономних систем навігації.'
        : 'Implementation of artificial intelligence and autonomous navigation systems.'
    },
    {
      year: "2020",
      title: language === 'UA' ? 'Розширення команди' : 'Team Expansion',
      description: language === 'UA' 
        ? 'Команда виросла до 500+ спеціалістів, включаючи 100+ інженерів R&D.'
        : 'The team grew to 500+ specialists, including 100+ R&D engineers.'
    },
    {
      year: "2024",
      title: language === 'UA' ? 'Сьогодення' : 'Present Day',
      description: language === 'UA' 
        ? 'Понад 350,000 годин бойових місій та статус провідного виробника в галузі.'
        : 'Over 350,000 hours of combat missions and status as a leading manufacturer in the industry.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                {language === 'UA' ? 'Наша історія' : 'Our History'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Шлях від невеликої команди ентузіастів до провідного виробника безпілотних систем'
                  : 'The journey from a small team of enthusiasts to a leading manufacturer of unmanned systems'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start mb-12 last:mb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    
                    {/* Content */}
                    <div className="ml-16">
                      <div className="bg-card p-6 rounded-lg border border-border">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Досягнення за роки' : 'Achievements Over the Years'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">19</div>
                <div className="text-muted-foreground">{language === 'UA' ? 'Років досвіду' : 'Years of Experience'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">350K+</div>
                <div className="text-muted-foreground">{language === 'UA' ? 'Годин місій' : 'Mission Hours'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">{language === 'UA' ? 'Спеціалістів' : 'Specialists'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <div className="text-muted-foreground">{language === 'UA' ? 'Інженерів R&D' : 'R&D Engineers'}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;
