import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { language } = useLanguage();

  const leadership = [
    {
      name: language === 'UA' ? 'Олександр Петренко' : 'Alexander Petrenko',
      position: language === 'UA' ? 'Генеральний директор' : 'CEO',
      experience: language === 'UA' ? '15+ років досвіду в авіаційній галузі' : '15+ years of experience in aviation industry',
      description: language === 'UA' 
        ? 'Визнаний експерт у сфері безпілотних технологій з досвідом роботи в провідних авіаційних компаніях.'
        : 'Recognized expert in unmanned technologies with experience in leading aviation companies.'
    },
    {
      name: language === 'UA' ? 'Марія Коваленко' : 'Maria Kovalenko',
      position: language === 'UA' ? 'Технічний директор' : 'CTO',
      experience: language === 'UA' ? '12+ років у розробці БпАК' : '12+ years in UAV development',
      description: language === 'UA' 
        ? 'Провідний інженер з розробки автономних систем та штучного інтелекту для безпілотників.'
        : 'Leading engineer in autonomous systems and AI development for drones.'
    },
    {
      name: language === 'UA' ? 'Дмитро Іваненко' : 'Dmitry Ivanenko',
      position: language === 'UA' ? 'Директор з виробництва' : 'Production Director',
      experience: language === 'UA' ? '10+ років у серійному виробництві' : '10+ years in mass production',
      description: language === 'UA' 
        ? 'Експерт з оптимізації виробничих процесів та контролю якості продукції.'
        : 'Expert in production process optimization and product quality control.'
    }
  ];

  const departments = [
    {
      name: language === 'UA' ? 'Відділ R&D' : 'R&D Department',
      count: '100+',
      description: language === 'UA' 
        ? 'Інженери, які працюють над новими технологіями та інноваціями'
        : 'Engineers working on new technologies and innovations'
    },
    {
      name: language === 'UA' ? 'Виробництво' : 'Production',
      count: '200+',
      description: language === 'UA' 
        ? 'Спеціалісти з виробництва та контролю якості'
        : 'Production and quality control specialists'
    },
    {
      name: language === 'UA' ? 'Підтримка клієнтів' : 'Customer Support',
      count: '50+',
      description: language === 'UA' 
        ? 'Команда технічної підтримки та сервісу'
        : 'Technical support and service team'
    },
    {
      name: language === 'UA' ? 'Продажі та маркетинг' : 'Sales & Marketing',
      count: '30+',
      description: language === 'UA' 
        ? 'Фахівці з продажів та просування продукції'
        : 'Sales and product promotion specialists'
    },
    {
      name: language === 'UA' ? 'Адміністрація' : 'Administration',
      count: '20+',
      description: language === 'UA' 
        ? 'Управління, фінанси та HR'
        : 'Management, finance and HR'
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
                {language === 'UA' ? 'Наша команда' : 'Our Team'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Професіонали, які створюють технології майбутнього'
                  : 'Professionals who create technologies of the future'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Керівництво' : 'Leadership'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Досвідчені лідери, які ведуть компанію до успіху'
                  : 'Experienced leaders who guide the company to success'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-2xl font-bold text-accent">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.experience}</p>
                  <p className="text-muted-foreground">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Структура команди' : 'Team Structure'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Понад 500 спеціалістів у різних відділах'
                  : 'Over 500 specialists in various departments'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-accent mb-2">{dept.count}</div>
                    <h3 className="text-xl font-bold">{dept.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-center">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Приєднуйтесь до нашої команди' : 'Join Our Team'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Ми завжди шукаємо талановитих професіоналів'
                  : 'We are always looking for talented professionals'
                }
              </p>
              <a href="/careers" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                {language === 'UA' ? 'Переглянути вакансії' : 'View Vacancies'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
