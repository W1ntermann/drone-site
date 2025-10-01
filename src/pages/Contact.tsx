import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
                {language === 'UA' ? 'Зв\'яжіться з нами' : 'Contact Us'}
              </h1>
              <p className="text-xl text-muted-foreground">
                {language === 'UA' 
                  ? 'Готові відповісти на ваші запитання та допомогти з вибором оптимального рішення'
                  : 'Ready to answer your questions and help you choose the optimal solution'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {language === 'UA' ? 'Надішліть повідомлення' : 'Send Message'}
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {language === 'UA' ? 'Ім\'я' : 'Name'}
                    </label>
                    <Input placeholder={language === 'UA' ? 'Ваше ім\'я' : 'Your name'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder={language === 'UA' ? 'ваш@email.com' : 'your@email.com'} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'UA' ? 'Повідомлення' : 'Message'}
                  </label>
                  <Textarea 
                    placeholder={language === 'UA' ? 'Опишіть ваш запит...' : 'Describe your request...'} 
                    rows={6}
                  />
                </div>
                <Button size="lg" className="w-full">
                  {language === 'UA' ? 'Надіслати повідомлення' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">
                {language === 'UA' ? 'Контактна інформація' : 'Contact Information'}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold mb-2">{language === 'UA' ? 'Телефон' : 'Phone'}</h3>
                  <p>+380 44 123 45 67</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p>info@aerotech.ua</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{language === 'UA' ? 'Адреса' : 'Address'}</h3>
                  <p>{language === 'UA' ? 'Київ, Україна' : 'Kyiv, Ukraine'}</p>
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

export default Contact;