import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Intelligence = () => {
  const { language } = useLanguage();

  const capabilities = [
    {
      title: language === 'UA' ? 'Візуальна розвідка' : 'Visual Intelligence',
      description: language === 'UA' 
        ? 'Високоякісна фото та відеозйомка з можливістю збільшення та аналізу зображень'
        : 'High-quality photo and video recording with zoom and image analysis capabilities',
      specs: [
        '4K/60fps відео',
        language === 'UA' ? '30x оптичний зум' : '30x optical zoom',
        language === 'UA' ? 'Стабілізація зображення' : 'Image stabilization'
      ]
    },
    {
      title: language === 'UA' ? 'Сигнальна розвідка' : 'Signal Intelligence',
      description: language === 'UA' 
        ? 'Перехоплення та аналіз радіосигналів, виявлення джерел електронних випромінювань'
        : 'Interception and analysis of radio signals, detection of electronic emission sources',
      specs: [
        language === 'UA' ? 'Широкий спектр частот' : 'Wide frequency range',
        language === 'UA' ? 'Автоматичний аналіз' : 'Automatic analysis',
        language === 'UA' ? 'Геолокація сигналів' : 'Signal geolocation'
      ]
    },
    {
      title: language === 'UA' ? 'Електронна розвідка' : 'Electronic Intelligence',
      description: language === 'UA' 
        ? 'Виявлення та класифікація електронних систем противника, аналіз їх характеристик'
        : 'Detection and classification of enemy electronic systems, analysis of their characteristics',
      specs: [
        language === 'UA' ? 'Пасивне виявлення' : 'Passive detection',
        language === 'UA' ? 'Класифікація загроз' : 'Threat classification',
        language === 'UA' ? 'База даних сигналів' : 'Signal database'
      ]
    }
  ];

  const features = [
    {
      icon: '🎯',
      title: language === 'UA' ? 'Точність' : 'Precision',
      value: '±1м',
      description: language === 'UA' ? 'Точність позиціонування' : 'Positioning accuracy'
    },
    {
      icon: '👁️',
      title: language === 'UA' ? 'Дальність виявлення' : 'Detection Range',
      value: '15км',
      description: language === 'UA' ? 'Максимальна дальність' : 'Maximum range'
    },
    {
      icon: '🔒',
      title: language === 'UA' ? 'Захищеність' : 'Security',
      value: 'AES-256',
      description: language === 'UA' ? 'Шифрування даних' : 'Data encryption'
    },
    {
      icon: '⚡',
      title: language === 'UA' ? 'Швидкість обробки' : 'Processing Speed',
      value: '<1с',
      description: language === 'UA' ? 'Час обробки даних' : 'Data processing time'
    }
  ];

  const advantages = [
    {
      title: language === 'UA' ? 'Безпека персоналу' : 'Personnel Safety',
      description: language === 'UA' 
        ? 'Дистанційний збір інформації без ризику для життя персоналу'
        : 'Remote information gathering without risk to personnel lives'
    },
    {
      title: language === 'UA' ? 'Швидкість реагування' : 'Response Speed',
      description: language === 'UA' 
        ? 'Миттєва передача даних та швидке прийняття рішень'
        : 'Instant data transmission and quick decision making'
    },
    {
      title: language === 'UA' ? 'Точність даних' : 'Data Accuracy',
      description: language === 'UA' 
        ? 'Високоточні датчики та системи аналізу інформації'
        : 'High-precision sensors and information analysis systems'
    },
    {
      title: language === 'UA' ? 'Мобільність' : 'Mobility',
      description: language === 'UA' 
        ? 'Швидке розгортання в будь-якій точці операційної зони'
        : 'Rapid deployment at any point in the operational zone'
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
                {language === 'UA' ? 'Розвідувальні операції' : 'Intelligence Operations'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Передові технології збору та аналізу розвідувальної інформації'
                  : 'Advanced technologies for intelligence gathering and analysis'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Розвідувальні можливості' : 'Intelligence Capabilities'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Комплексні рішення для збору та обробки розвідувальної інформації'
                  : 'Comprehensive solutions for intelligence gathering and processing'
                }
              </p>
            </div>
            <div className="space-y-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        {language === 'UA' ? 'Характеристики:' : 'Specifications:'}
                      </h4>
                      <ul className="space-y-2">
                        {capability.specs.map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Показники ефективності' : 'Performance Metrics'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <div className="text-3xl font-bold text-accent mb-2">{feature.value}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Переваги системи' : 'System Advantages'}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
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
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Отримайте детальну інформацію про наші розвідувальні системи'
                  : 'Get detailed information about our intelligence systems'
                }
              </p>
              <a href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                {language === 'UA' ? 'Запросити консультацію' : 'Request Consultation'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Intelligence;
