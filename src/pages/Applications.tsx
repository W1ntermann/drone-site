import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Applications = () => {
  const { language } = useLanguage();

  const applications = [
    {
      title: language === 'UA' ? 'Військові операції' : 'Military Operations',
      description: language === 'UA' 
        ? 'Розвідка, патрулювання та тактична підтримка військових підрозділів'
        : 'Intelligence, patrolling and tactical support for military units',
      link: '/military',
      icon: '🎖️'
    },
    {
      title: language === 'UA' ? 'Розвідка' : 'Intelligence',
      description: language === 'UA' 
        ? 'Збір та аналіз розвідувальної інформації в режимі реального часу'
        : 'Real-time intelligence gathering and analysis',
      link: '/intelligence',
      icon: '🔍'
    },
    {
      title: language === 'UA' ? 'Моніторинг' : 'Monitoring',
      description: language === 'UA' 
        ? 'Безперервний контроль територій та об\'єктів'
        : 'Continuous monitoring of territories and objects',
      link: '/monitoring',
      icon: '📡'
    },
    {
      title: language === 'UA' ? 'Пошук та рятування' : 'Search & Rescue',
      description: language === 'UA' 
        ? 'Швидкий пошук та координація рятувальних операцій'
        : 'Rapid search and coordination of rescue operations',
      link: '/search-rescue',
      icon: '🚁'
    }
  ];

  const sectors = [
    {
      name: language === 'UA' ? 'Оборона' : 'Defense',
      description: language === 'UA' 
        ? 'Системи для військових потреб та національної безпеки'
        : 'Systems for military needs and national security'
    },
    {
      name: language === 'UA' ? 'Правоохоронні органи' : 'Law Enforcement',
      description: language === 'UA' 
        ? 'Патрулювання, спостереження та контроль правопорядку'
        : 'Patrolling, surveillance and law enforcement control'
    },
    {
      name: language === 'UA' ? 'Екстрені служби' : 'Emergency Services',
      description: language === 'UA' 
        ? 'Підтримка рятувальних та пожежних служб'
        : 'Support for rescue and fire services'
    },
    {
      name: language === 'UA' ? 'Промисловість' : 'Industry',
      description: language === 'UA' 
        ? 'Моніторинг інфраструктури та промислових об\'єктів'
        : 'Infrastructure and industrial facilities monitoring'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                {language === 'UA' ? 'Застосування БпАК систем' : 'UAV Systems Applications'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Широкий спектр застосувань від військових операцій до цивільного використання'
                  : 'Wide range of applications from military operations to civilian use'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Основні напрямки' : 'Main Directions'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Наші системи ефективно працюють в різних сферах'
                  : 'Our systems work effectively in various fields'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Link key={index} to={app.link}>
                  <div className="bg-card p-8 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-5xl mb-4">{app.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                    <p className="text-muted-foreground">{app.description}</p>
                    <div className="mt-6 text-accent font-semibold flex items-center gap-2">
                      {language === 'UA' ? 'Детальніше' : 'Learn more'}
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Сектори застосування' : 'Application Sectors'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Наші рішення використовуються в різних галузях'
                  : 'Our solutions are used in various industries'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sectors.map((sector, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold mb-3">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Потрібна консультація?' : 'Need Consultation?'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Наші експерти допоможуть підібрати оптимальне рішення для ваших задач'
                  : 'Our experts will help you choose the optimal solution for your tasks'
                }
              </p>
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

export default Applications;
