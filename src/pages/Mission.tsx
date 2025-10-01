import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Mission = () => {
  const { language } = useLanguage();

  const values = [
    {
      title: language === 'UA' ? 'Інновації' : 'Innovation',
      description: language === 'UA' 
        ? 'Ми постійно досліджуємо нові технології та впроваджуємо передові рішення у наших продуктах.'
        : 'We constantly research new technologies and implement advanced solutions in our products.',
      icon: '🚀'
    },
    {
      title: language === 'UA' ? 'Якість' : 'Quality',
      description: language === 'UA' 
        ? 'Кожен наш продукт проходить суворий контроль якості та відповідає найвищим стандартам.'
        : 'Each of our products undergoes strict quality control and meets the highest standards.',
      icon: '⭐'
    },
    {
      title: language === 'UA' ? 'Надійність' : 'Reliability',
      description: language === 'UA' 
        ? 'Наші системи працюють безвідмовно в найскладніших умовах та критичних ситуаціях.'
        : 'Our systems work flawlessly in the most difficult conditions and critical situations.',
      icon: '🛡️'
    },
    {
      title: language === 'UA' ? 'Партнерство' : 'Partnership',
      description: language === 'UA' 
        ? 'Ми будуємо довгострокові відносини з клієнтами, засновані на довірі та взаємній повазі.'
        : 'We build long-term relationships with clients based on trust and mutual respect.',
      icon: '🤝'
    },
    {
      title: language === 'UA' ? 'Відповідальність' : 'Responsibility',
      description: language === 'UA' 
        ? 'Ми усвідомлюємо важливість нашої роботи та несемо відповідальність за безпеку та ефективність.'
        : 'We understand the importance of our work and take responsibility for safety and efficiency.',
      icon: '⚖️'
    },
    {
      title: language === 'UA' ? 'Розвиток' : 'Development',
      description: language === 'UA' 
        ? 'Ми інвестуємо в розвиток наших співробітників та постійно вдосконалюємо наші процеси.'
        : 'We invest in the development of our employees and constantly improve our processes.',
      icon: '📈'
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
                {language === 'UA' ? 'Місія та цінності' : 'Mission & Values'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Принципи, які керують нашою діяльністю та визначають наше майбутнє'
                  : 'Principles that guide our activities and define our future'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  {language === 'UA' ? 'Наша місія' : 'Our Mission'}
                </h2>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <p className="text-xl leading-relaxed">
                    {language === 'UA' 
                      ? 'Створювати найкращі безпілотні авіаційні системи, які забезпечують безпеку, ефективність та надійність у критичних ситуаціях. Ми прагнемо бути лідерами інновацій у сфері безпілотних технологій, надаючи нашим клієнтам рішення, які перевершують очікування та встановлюють нові стандарти в галузі.'
                      : 'To create the best unmanned aerial systems that provide safety, efficiency and reliability in critical situations. We strive to be leaders of innovation in the field of unmanned technologies, providing our clients with solutions that exceed expectations and set new industry standards.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  {language === 'UA' ? 'Наше бачення' : 'Our Vision'}
                </h2>
                <div className="bg-background p-8 rounded-lg border border-border">
                  <p className="text-xl leading-relaxed">
                    {language === 'UA' 
                      ? 'Бути глобально визнаною компанією, яка формує майбутнє безпілотних технологій. Ми бачимо світ, де наші інноваційні рішення роблять життя людей безпечнішим, а критичні операції - більш ефективними. Наша мета - створити технології, які не просто відповідають сучасним потребам, а й передбачають виклики майбутнього.'
                      : 'To be a globally recognized company that shapes the future of unmanned technologies. We envision a world where our innovative solutions make people\'s lives safer and critical operations more efficient. Our goal is to create technologies that not only meet current needs, but also anticipate future challenges.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Наші цінності' : 'Our Values'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Фундаментальні принципи, які визначають нашу корпоративну культуру'
                  : 'Fundamental principles that define our corporate culture'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                {language === 'UA' ? 'Наші зобов\'язання' : 'Our Commitments'}
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {language === 'UA' ? 'Перед клієнтами' : 'To Clients'}
                  </h3>
                  <p className="text-primary-foreground/90">
                    {language === 'UA' 
                      ? 'Надавати найкращі рішення та підтримку'
                      : 'Provide the best solutions and support'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {language === 'UA' ? 'Перед співробітниками' : 'To Employees'}
                  </h3>
                  <p className="text-primary-foreground/90">
                    {language === 'UA' 
                      ? 'Створювати умови для професійного зростання'
                      : 'Create conditions for professional growth'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {language === 'UA' ? 'Перед суспільством' : 'To Society'}
                  </h3>
                  <p className="text-primary-foreground/90">
                    {language === 'UA' 
                      ? 'Сприяти безпеці та технологічному прогресу'
                      : 'Contribute to safety and technological progress'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
