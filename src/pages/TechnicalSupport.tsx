import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnicalSupport = () => {
  const { language } = useLanguage();

  const supportServices = [
    {
      title: language === 'UA' ? 'Цілодобова підтримка' : '24/7 Support',
      description: language === 'UA' 
        ? 'Наша команда технічних експертів доступна цілодобово для вирішення будь-яких питань'
        : 'Our team of technical experts is available 24/7 to resolve any issues',
      features: [
        language === 'UA' ? 'Гаряча лінія підтримки' : 'Support hotline',
        language === 'UA' ? 'Онлайн чат' : 'Online chat',
        language === 'UA' ? 'Email підтримка' : 'Email support',
        language === 'UA' ? 'Віддалена діагностика' : 'Remote diagnostics'
      ]
    },
    {
      title: language === 'UA' ? 'Діагностика та ремонт' : 'Diagnostics & Repair',
      description: language === 'UA' 
        ? 'Швидка діагностика проблем та професійний ремонт з використанням оригінальних запчастин'
        : 'Quick problem diagnosis and professional repair using original spare parts',
      features: [
        language === 'UA' ? 'Експрес-діагностика' : 'Express diagnostics',
        language === 'UA' ? 'Оригінальні запчастини' : 'Original spare parts',
        language === 'UA' ? 'Сертифіковані техніки' : 'Certified technicians',
        language === 'UA' ? 'Гарантія на ремонт' : 'Repair warranty'
      ]
    },
    {
      title: language === 'UA' ? 'Профілактичне обслуговування' : 'Preventive Maintenance',
      description: language === 'UA' 
        ? 'Регулярне технічне обслуговування для запобігання поломок та продовження терміну служби'
        : 'Regular technical maintenance to prevent breakdowns and extend service life',
      features: [
        language === 'UA' ? 'Планові перевірки' : 'Scheduled inspections',
        language === 'UA' ? 'Заміна витратних матеріалів' : 'Consumables replacement',
        language === 'UA' ? 'Калібрування систем' : 'System calibration',
        language === 'UA' ? 'Оновлення ПЗ' : 'Software updates'
      ]
    }
  ];

  const supportLevels = [
    {
      name: language === 'UA' ? 'Базовий' : 'Basic',
      responseTime: language === 'UA' ? '4 години' : '4 hours',
      availability: language === 'UA' ? 'Робочі години' : 'Business hours',
      features: [
        language === 'UA' ? 'Email підтримка' : 'Email support',
        language === 'UA' ? 'База знань' : 'Knowledge base',
        language === 'UA' ? 'Документація' : 'Documentation',
        language === 'UA' ? 'Базове навчання' : 'Basic training'
      ]
    },
    {
      name: language === 'UA' ? 'Стандартний' : 'Standard',
      responseTime: language === 'UA' ? '2 години' : '2 hours',
      availability: language === 'UA' ? '12 годин/день' : '12 hours/day',
      features: [
        language === 'UA' ? 'Телефонна підтримка' : 'Phone support',
        language === 'UA' ? 'Віддалена діагностика' : 'Remote diagnostics',
        language === 'UA' ? 'Пріоритетна обробка' : 'Priority processing',
        language === 'UA' ? 'Розширене навчання' : 'Extended training'
      ]
    },
    {
      name: language === 'UA' ? 'Преміум' : 'Premium',
      responseTime: language === 'UA' ? '30 хвилин' : '30 minutes',
      availability: language === 'UA' ? '24/7' : '24/7',
      features: [
        language === 'UA' ? 'Персональний менеджер' : 'Personal manager',
        language === 'UA' ? 'Виїзний сервіс' : 'On-site service',
        language === 'UA' ? 'Гарантовані SLA' : 'Guaranteed SLA',
        language === 'UA' ? 'VIP підтримка' : 'VIP support'
      ]
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
                {language === 'UA' ? 'Технічна підтримка' : 'Technical Support'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Професійна підтримка для забезпечення безперебійної роботи ваших систем'
                  : 'Professional support to ensure uninterrupted operation of your systems'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Наші послуги' : 'Our Services'}
              </h2>
            </div>
            <div className="space-y-8">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        {language === 'UA' ? 'Включає:' : 'Includes:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm">{feature}</span>
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

        {/* Support Levels */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Рівні підтримки' : 'Support Levels'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Оберіть оптимальний рівень підтримки для ваших потреб'
                  : 'Choose the optimal support level for your needs'
                }
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div key={index} className={`bg-background p-8 rounded-lg border-2 ${
                  index === 1 ? 'border-accent' : 'border-border'
                } relative`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      {language === 'UA' ? 'Популярний' : 'Popular'}
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4">{level.name}</h3>
                    <div className="space-y-2">
                      <div className="text-accent font-semibold">
                        {language === 'UA' ? 'Час відповіді:' : 'Response time:'} {level.responseTime}
                      </div>
                      <div className="text-muted-foreground">
                        {language === 'UA' ? 'Доступність:' : 'Availability:'} {level.availability}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    index === 1 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'border border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                  }`}>
                    {language === 'UA' ? 'Обрати план' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Потрібна допомога?' : 'Need Help?'}
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                {language === 'UA' 
                  ? 'Наша команда підтримки готова допомогти вам 24/7'
                  : 'Our support team is ready to help you 24/7'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+380441234567" className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                  {language === 'UA' ? 'Зателефонувати' : 'Call Now'}
                </a>
                <a href="/contact" className="inline-block border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
                  {language === 'UA' ? 'Написати повідомлення' : 'Send Message'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;
