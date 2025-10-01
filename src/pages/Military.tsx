import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Military = () => {
  const { language } = useLanguage();

  const applications = [
    {
      title: language === 'UA' ? 'Розвідка та спостереження' : 'Intelligence & Surveillance',
      description: language === 'UA' 
        ? 'Збір розвідувальної інформації в режимі реального часу з високою точністю та дискретністю.'
        : 'Real-time intelligence gathering with high accuracy and discretion.',
      features: [
        language === 'UA' ? 'Високоякісні камери' : 'High-quality cameras',
        language === 'UA' ? 'Нічне бачення' : 'Night vision',
        language === 'UA' ? 'Тепловізори' : 'Thermal imaging',
        language === 'UA' ? 'Захищений зв\'язок' : 'Secure communication'
      ]
    },
    {
      title: language === 'UA' ? 'Патрулювання кордонів' : 'Border Patrol',
      description: language === 'UA' 
        ? 'Автономне патрулювання великих територій з можливістю швидкого реагування на загрози.'
        : 'Autonomous patrolling of large territories with rapid threat response capability.',
      features: [
        language === 'UA' ? 'Тривалий час польоту' : 'Extended flight time',
        language === 'UA' ? 'Автоматичне виявлення' : 'Automatic detection',
        language === 'UA' ? 'GPS навігація' : 'GPS navigation',
        language === 'UA' ? 'Всепогодність' : 'All-weather operation'
      ]
    },
    {
      title: language === 'UA' ? 'Тактична підтримка' : 'Tactical Support',
      description: language === 'UA' 
        ? 'Надання тактичної інформації підрозділам в режимі реального часу для прийняття рішень.'
        : 'Providing real-time tactical information to units for decision making.',
      features: [
        language === 'UA' ? 'Швидке розгортання' : 'Rapid deployment',
        language === 'UA' ? 'Мобільний зв\'язок' : 'Mobile communication',
        language === 'UA' ? 'Картографування' : 'Mapping',
        language === 'UA' ? 'Координація дій' : 'Action coordination'
      ]
    }
  ];

  const advantages = [
    {
      title: language === 'UA' ? 'Безпека персоналу' : 'Personnel Safety',
      description: language === 'UA' 
        ? 'Мінімізація ризиків для військового персоналу завдяки дистанційному управлінню'
        : 'Minimizing risks to military personnel through remote control'
    },
    {
      title: language === 'UA' ? 'Економічна ефективність' : 'Cost Effectiveness',
      description: language === 'UA' 
        ? 'Значно нижча вартість експлуатації порівняно з пілотованою авіацією'
        : 'Significantly lower operating costs compared to manned aviation'
    },
    {
      title: language === 'UA' ? 'Оперативність' : 'Responsiveness',
      description: language === 'UA' 
        ? 'Швидке розгортання та негайна готовність до виконання завдань'
        : 'Rapid deployment and immediate readiness for mission execution'
    },
    {
      title: language === 'UA' ? 'Точність' : 'Precision',
      description: language === 'UA' 
        ? 'Високоточне виконання завдань завдяки сучасним системам навігації'
        : 'High-precision task execution thanks to modern navigation systems'
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
                {language === 'UA' ? 'Військові операції' : 'Military Operations'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Передові безпілотні системи для забезпечення національної безпеки та оборони'
                  : 'Advanced unmanned systems for national security and defense'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Сфери застосування' : 'Areas of Application'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Наші системи ефективно використовуються в різних військових операціях'
                  : 'Our systems are effectively used in various military operations'
                }
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                  <p className="text-muted-foreground mb-6">{app.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold mb-3">
                      {language === 'UA' ? 'Ключові можливості:' : 'Key capabilities:'}
                    </h4>
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Переваги використання' : 'Usage Advantages'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Чому військові підрозділи обирають наші БпАК системи'
                  : 'Why military units choose our UAV systems'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Технічні характеристики' : 'Technical Specifications'}
              </h2>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50км</div>
                  <div className="text-muted-foreground">{language === 'UA' ? 'Дальність польоту' : 'Flight range'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8год</div>
                  <div className="text-muted-foreground">{language === 'UA' ? 'Час польоту' : 'Flight time'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">120км/г</div>
                  <div className="text-muted-foreground">{language === 'UA' ? 'Максимальна швидкість' : 'Max speed'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5000м</div>
                  <div className="text-muted-foreground">{language === 'UA' ? 'Максимальна висота' : 'Max altitude'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Потрібна консультація?' : 'Need Consultation?'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Наші експерти допоможуть підібрати оптимальне рішення для ваших потреб'
                  : 'Our experts will help you choose the optimal solution for your needs'
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

export default Military;
