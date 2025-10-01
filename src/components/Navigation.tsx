import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const { language, setLanguage, t } = useLanguage();
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const hoverTimeouts = useRef<Record<string, NodeJS.Timeout>>({});

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const closeAllDropdowns = useCallback(() => {
    setOpenDropdowns({});
    // Clear all timeouts
    Object.values(hoverTimeouts.current).forEach(timeout => {
      if (timeout) clearTimeout(timeout);
    });
    hoverTimeouts.current = {};
  }, []);

  const openDropdown = useCallback((key: string) => {
    // Clear any close timeout
    if (hoverTimeouts.current[key]) {
      clearTimeout(hoverTimeouts.current[key]);
      delete hoverTimeouts.current[key];
    }
    setOpenDropdowns(prev => ({ ...prev, [key]: true }));
  }, []);

  const scheduleCloseDropdown = useCallback((key: string) => {
    // Schedule close with timeout
    hoverTimeouts.current[key] = setTimeout(() => {
      setOpenDropdowns(prev => ({ ...prev, [key]: false }));
      delete hoverTimeouts.current[key];
    }, 100); // Коротший таймаут для швидшого закриття
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllDropdowns();
        setIsOpen(false);
      }
    };

    // Only add listener when menu is open
    if (isOpen || Object.values(openDropdowns).some(Boolean)) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, openDropdowns]);

  // Close dropdowns when pressing Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeAllDropdowns]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(hoverTimeouts.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  // Close dropdowns when route changes
  useEffect(() => {
    closeAllDropdowns();
    setIsOpen(false);
  }, [location.pathname, closeAllDropdowns]);

  const navItems = [
    { 
      key: "company",
      label: t.company, 
      hasDropdown: true,
      link: "/about",
      dropdownItems: [
        { key: "aboutUs", label: t.aboutUs, link: "/about" },
        { key: "history", label: t.history, link: "/history" },
        { key: "team", label: t.team, link: "/team" },
        { key: "mission", label: t.mission, link: "/mission" }
      ]
    },
    { 
      key: "raybird",
      label: t.raybird, 
      hasDropdown: false,
      link: "/products"
    },
    { 
      key: "applications",
      label: t.applications, 
      hasDropdown: true,
      link: "/applications",
      dropdownItems: [
        { key: "military", label: t.military, link: "/military" },
        { key: "intelligence", label: t.intelligence, link: "/intelligence" },
        { key: "monitoring", label: t.monitoring, link: "/monitoring" },
        { key: "searchRescue", label: t.searchRescue, link: "/search-rescue" }
      ]
    },
    { 
      key: "services",
      label: t.services, 
      hasDropdown: true,
      link: "/services",
      dropdownItems: [
        { key: "techSupport", label: t.techSupport, link: "/technical-support" },
        { key: "training", label: t.training, link: "/training" },
        { key: "consulting", label: t.consulting, link: "/consulting" },
        { key: "modernization", label: t.modernization, link: "/modernization" }
      ]
    },
    { 
      key: "careers",
      label: t.careers, 
      hasDropdown: false,
      link: "/careers"
    },
    { 
      key: "contacts",
      label: t.contacts, 
      hasDropdown: false,
      link: "/contact"
    },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={logoIcon} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">AEROTECH</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => openDropdown(item.key)}
                    onMouseLeave={() => scheduleCloseDropdown(item.key)}
                  >
                    <Link to={item.link || '#'}>
                      <Button 
                        variant="ghost" 
                        className={`flex items-center gap-1 transition-colors duration-200 ${
                          location.pathname === item.link ? 'bg-accent text-accent-foreground' : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.key);
                        }}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdowns[item.key] ? 'rotate-180' : ''}`} />
                      </Button>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {openDropdowns[item.key] && (
                      <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-xl z-50 min-w-[220px] animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={dropdownItem.key}
                              to={dropdownItem.link}
                              className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                              onClick={() => closeAllDropdowns()}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.link || '#'}>
                    <Button 
                      variant="ghost" 
                      className={`transition-colors duration-200 ${
                        location.pathname === item.link ? 'bg-accent text-accent-foreground' : ''
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              <Button
                variant={language === "UA" ? "default" : "ghost"}
                size="sm"
                className="rounded-full h-8 px-3"
                onClick={() => setLanguage("UA")}
              >
                UA
              </Button>
              <Button
                variant={language === "EN" ? "default" : "ghost"}
                size="sm"
                className="rounded-full h-8 px-3"
                onClick={() => setLanguage("EN")}
              >
                EN
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 border-t border-border">
            {navItems.map((item) => (
              <div key={item.key} className="border-b border-border/50 last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between py-4 px-4 text-left font-medium"
                      onClick={() => toggleDropdown(`mobile-${item.key}`)}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdowns[`mobile-${item.key}`] ? 'rotate-180' : ''
                      }`} />
                    </Button>
                    
                    {/* Mobile Dropdown Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openDropdowns[`mobile-${item.key}`] 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-secondary/30 rounded-lg mx-4 mb-3">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.key}
                            to={dropdownItem.link}
                            className="block py-3 px-4 text-sm text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => {
                              closeAllDropdowns();
                              setIsOpen(false);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={item.link || '#'} className="block">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start py-4 px-4 text-left font-medium ${
                        location.pathname === item.link ? 'bg-accent text-accent-foreground' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
