import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-center p-8">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">
            {language === 'UA' ? 'Сторінку не знайдено' : 'Page Not Found'}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === 'UA' 
              ? 'Вибачте, але сторінка, яку ви шукаєте, не існує.'
              : 'Sorry, the page you are looking for does not exist.'
            }
          </p>
          <Link to="/">
            <Button size="lg">
              {language === 'UA' ? 'Повернутися на головну' : 'Return to Home'}
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
