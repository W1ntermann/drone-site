import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { Facebook, Twitter, Linkedin, Instagram, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const footerSections = [
    {
      title: t.footerCompany,
      links: [
        { key: "about", label: t.footerAbout, link: "/about" },
        { key: "history", label: t.footerHistory, link: "/about#history" },
        { key: "team", label: t.footerTeam, link: "/about#team" },
        { key: "career", label: t.footerCareer, link: "/careers" }
      ],
    },
    {
      title: t.footerProducts,
      links: [
        { key: "droneSystems", label: t.footerDroneSystems, link: "/products" },
        { key: "technologies", label: t.footerTechnologies, link: "/products#technologies" },
        { key: "innovations", label: t.footerInnovations, link: "/products#innovations" },
        { key: "documentation", label: t.footerDocumentation, link: "/products#documentation" }
      ],
    },
    {
      title: t.footerSupport,
      links: [
        { key: "contacts", label: t.footerContacts, link: "/contact" },
        { key: "faq", label: t.footerFaq, link: "/contact#faq" },
        { key: "techSupport", label: t.footerTechSupport, link: "/services#support" },
        { key: "partners", label: t.footerPartners, link: "/contact#partners" }
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoIcon} alt="Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">AEROTECH</span>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.footerDescription}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              {/* Desktop: Always show title and links */}
              <div className="hidden md:block">
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        to={link.link}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile: Collapsible dropdown */}
              <div className="md:hidden border-b border-border/30 last:border-b-0">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full font-semibold py-4 text-left hover:text-accent transition-colors duration-200"
                >
                  {section.title}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    openSections[section.title] ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Animated dropdown content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openSections[section.title] 
                    ? 'max-h-96 opacity-100 pb-4' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-secondary/20 rounded-lg p-3">
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.key}>
                          <Link
                            to={link.link}
                            className="block py-2 px-3 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded transition-colors duration-150"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {t.footerRights}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              {t.privacyPolicy}
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              {t.termsOfUse}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
