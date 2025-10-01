import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
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
                {language === 'UA' ? 'Про AEROTECH' : 'About AEROTECH'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Ми - провідний виробник безпілотних авіаційних систем з 19-річним досвідом інновацій та досконалості в оборонній галузі.'
                  : 'We are a leading manufacturer of unmanned aerial systems with 19 years of innovation and excellence in the defense industry.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {language === 'UA' ? 'Наша історія' : 'Our Story'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === 'UA' 
                      ? 'AEROTECH була заснована в 2005 році з метою створення найсучасніших безпілотних авіаційних систем для оборонних потреб.'
                      : 'AEROTECH was founded in 2005 with the goal of creating state-of-the-art unmanned aerial systems for defense needs.'
                    }
                  </p>
                  <p>
                    {language === 'UA' 
                      ? 'За роки роботи ми накопичили понад 350,000 годин бойових місій.'
                      : 'Over the years, we have accumulated over 350,000 hours of combat missions.'
                    }
                  </p>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'UA' ? 'Ключові досягнення' : 'Key Achievements'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{language === 'UA' ? '19 років досвіду' : '19 years of experience'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{language === 'UA' ? '350,000+ годин місій' : '350,000+ mission hours'}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{language === 'UA' ? '500+ фахівців' : '500+ specialists'}</span>
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

export default About;