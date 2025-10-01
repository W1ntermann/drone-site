import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Training = () => {
  const { language } = useLanguage();

  const courses = [
    {
      title: language === 'UA' ? 'Базовий курс оператора' : 'Basic Operator Course',
      duration: language === 'UA' ? '2 тижні' : '2 weeks',
      level: language === 'UA' ? 'Початковий' : 'Beginner',
      description: language === 'UA' 
        ? 'Основи управління БпАК, базові навички пілотування та розуміння систем'
        : 'UAV control basics, basic piloting skills and system understanding',
      modules: [
        language === 'UA' ? 'Теорія польоту' : 'Flight theory',
        language === 'UA' ? 'Управління системою' : 'System control',
        language === 'UA' ? 'Безпека польотів' : 'Flight safety',
        language === 'UA' ? 'Практичні вправи' : 'Practical exercises'
      ]
    },
    {
      title: language === 'UA' ? 'Професійний курс' : 'Professional Course',
      duration: language === 'UA' ? '4 тижні' : '4 weeks',
      level: language === 'UA' ? 'Середній' : 'Intermediate',
      description: language === 'UA' 
        ? 'Поглиблене вивчення систем, тактичне застосування та складні маневри'
        : 'In-depth system study, tactical application and complex maneuvers',
      modules: [
        language === 'UA' ? 'Тактичне застосування' : 'Tactical application',
        language === 'UA' ? 'Складні маневри' : 'Complex maneuvers',
        language === 'UA' ? 'Аварійні ситуації' : 'Emergency situations',
        language === 'UA' ? 'Місійне планування' : 'Mission planning'
      ]
    },
    {
      title: language === 'UA' ? 'Курс інструктора' : 'Instructor Course',
      duration: language === 'UA' ? '6 тижнів' : '6 weeks',
      level: language === 'UA' ? 'Експертний' : 'Expert',
      description: language === 'UA' 
        ? 'Підготовка інструкторів для навчання інших операторів та технічного персоналу'
        : 'Training instructors to teach other operators and technical staff',
      modules: [
        language === 'UA' ? 'Методики навчання' : 'Teaching methods',
        language === 'UA' ? 'Психологія навчання' : 'Learning psychology',
        language === 'UA' ? 'Оцінка навичок' : 'Skills assessment',
        language === 'UA' ? 'Сертифікація' : 'Certification'
      ]
    }
  ];

  const facilities = [
    {
      name: language === 'UA' ? 'Навчальний центр' : 'Training Center',
      description: language === 'UA' 
        ? 'Сучасний навчальний комплекс з симуляторами та обладнанням'
        : 'Modern training complex with simulators and equipment',
      area: language === 'UA' ? '2000 м²' : '2000 m²'
    },
    {
      name: language === 'UA' ? 'Льотне поле' : 'Flight Field',
      description: language === 'UA' 
        ? 'Спеціально обладнане поле для практичних польотів'
        : 'Specially equipped field for practical flights',
      area: language === 'UA' ? '50 гектарів' : '50 hectares'
    },
    {
      name: language === 'UA' ? 'Симулятори' : 'Simulators',
      description: language === 'UA' 
        ? 'Високоточні симулятори для безпечного навчання'
        : 'High-precision simulators for safe training',
      area: language === 'UA' ? '10 робочих місць' : '10 workstations'
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
                {language === 'UA' ? 'Навчання та сертифікація' : 'Training & Certification'}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {language === 'UA' 
                  ? 'Професійна підготовка операторів та технічного персоналу'
                  : 'Professional training for operators and technical staff'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Навчальні програми' : 'Training Programs'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Від початкового до експертного рівня'
                  : 'From beginner to expert level'
                }
              </p>
            </div>
            <div className="space-y-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border">
                  <div className="grid lg:grid-cols-4 gap-8 items-start">
                    <div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent mb-2">{course.duration}</div>
                        <div className="text-sm text-muted-foreground">{course.level}</div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        {language === 'UA' ? 'Модулі курсу:' : 'Course modules:'}
                      </h4>
                      <ul className="space-y-2">
                        {course.modules.map((module, moduleIndex) => (
                          <li key={moduleIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm">{module}</span>
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

        {/* Facilities */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Навчальна база' : 'Training Facilities'}
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Сучасне обладнання та інфраструктура для ефективного навчання'
                  : 'Modern equipment and infrastructure for effective training'
                }
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border border-border text-center">
                  <h3 className="text-xl font-bold mb-3">{facility.name}</h3>
                  <div className="text-2xl font-bold text-accent mb-3">{facility.area}</div>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                {language === 'UA' ? 'Сертифікація' : 'Certification'}
              </h2>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'UA' ? 'Міжнародні стандарти' : 'International Standards'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'UA' 
                      ? 'Наші програми навчання відповідають міжнародним стандартам та визнаються провідними організаціями.'
                      : 'Our training programs meet international standards and are recognized by leading organizations.'
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">ISO 9001:2015</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">EASA Part 147</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">NATO STANAG</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'UA' ? 'Сертифікати' : 'Certificates'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === 'UA' 
                      ? 'Після успішного завершення курсу ви отримаєте офіційний сертифікат.'
                      : 'Upon successful completion of the course, you will receive an official certificate.'
                    }
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{language === 'UA' ? 'Сертифікат оператора' : 'Operator certificate'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{language === 'UA' ? 'Сертифікат інструктора' : 'Instructor certificate'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{language === 'UA' ? 'Технічний сертифікат' : 'Technical certificate'}</span>
                    </li>
                  </ul>
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

export default Training;
