export type Language = 'UA' | 'EN';

export interface Translations {
  // Navigation
  company: string;
  raybird: string;
  applications: string;
  services: string;
  careers: string;
  contacts: string;
  
  // Company dropdown
  aboutUs: string;
  history: string;
  team: string;
  mission: string;
  
  // Applications dropdown
  military: string;
  intelligence: string;
  monitoring: string;
  searchRescue: string;
  
  // Services dropdown
  techSupport: string;
  training: string;
  consulting: string;
  modernization: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroDescription: string;
  learnMore: string;
  
  // Tactical section
  advantagesTitle: string;
  advantagesDescription: string;
  techBreakthrough: string;
  techDescription: string;
  battleTested: string;
  battleDescription: string;
  precision: string;
  precisionDescription: string;
  autonomy: string;
  autonomyDescription: string;
  deployment: string;
  deploymentDescription: string;
  
  // Stats section
  statsTitle: string;
  statsDescription: string;
  missionHours: string;
  specialists: string;
  engineers: string;
  experience: string;
  
  // Footer
  footerDescription: string;
  footerCompany: string;
  footerProducts: string;
  footerSupport: string;
  footerRights: string;
  privacyPolicy: string;
  termsOfUse: string;
  
  // Footer company links
  footerAbout: string;
  footerHistory: string;
  footerTeam: string;
  footerCareer: string;
  
  // Footer products links
  footerDroneSystems: string;
  footerTechnologies: string;
  footerInnovations: string;
  footerDocumentation: string;
  
  // Footer support links
  footerContacts: string;
  footerFaq: string;
  footerTechSupport: string;
  footerPartners: string;
}

export const translations: Record<Language, Translations> = {
  UA: {
    // Navigation
    company: "Компанія",
    raybird: "БпАК Raybird (ACS-3)",
    applications: "Застосування",
    services: "Послуги",
    careers: "Вакансії",
    contacts: "Контакти",
    
    // Company dropdown
    aboutUs: "Про нас",
    history: "Історія",
    team: "Команда",
    mission: "Місія та цінності",
    
    // Applications dropdown
    military: "Військові операції",
    intelligence: "Розвідка",
    monitoring: "Моніторинг",
    searchRescue: "Пошук та рятування",
    
    // Services dropdown
    techSupport: "Технічна підтримка",
    training: "Навчання",
    consulting: "Консультації",
    modernization: "Модернізація",
    
    // Hero section
    heroTitle: "ПЕРЕВАГА",
    heroSubtitle: "НАРОДЖЕНА У ВОГНІ",
    heroTagline: "Малі тактичні безпілотні авіаційні системи",
    heroDescription: "Інновації, створені для майбутнього. Виробник безпілотних авіаційних систем з багаторічною історією досконалості та інженерних досягнень.",
    learnMore: "ДІЗНАТИСЯ БІЛЬШЕ",
    
    // Tactical section
    advantagesTitle: "Переваги системи",
    advantagesDescription: "Наша безпілотна система створена з використанням найновіших технологій та досвіду експлуатації.",
    techBreakthrough: "Технологічний прорив",
    techDescription: "Що вчора вважалося неможливим, а сьогодні є перевагою",
    battleTested: "Загартований у випробуваннях",
    battleDescription: "Надійність, перевірена у найскладніших умовах",
    precision: "Точність і ефективність",
    precisionDescription: "Передові технології для максимальної продуктивності",
    autonomy: "Автономність польоту",
    autonomyDescription: "Розширені можливості для тривалих місій",
    deployment: "Швидке розгортання",
    deploymentDescription: "Готовність до дії за лічені хвилини",
    
    // Stats section
    statsTitle: "Цифри, що говорять самі за себе",
    statsDescription: "Результати, перевірені часом і досвідом",
    missionHours: "Годин бойових місій",
    specialists: "Спеціалістів у команді",
    engineers: "Інженерів R&D",
    experience: "Років досвіду",
    
    // Footer
    footerDescription: "Виробник безпілотних авіаційних систем нового покоління. Інновації для майбутнього.",
    footerCompany: "Компанія",
    footerProducts: "Продукти",
    footerSupport: "Підтримка",
    footerRights: "AEROTECH. Усі права захищені.",
    privacyPolicy: "Політика конфіденційності",
    termsOfUse: "Умови використання",
    
    // Footer company links
    footerAbout: "Про нас",
    footerHistory: "Історія",
    footerTeam: "Команда",
    footerCareer: "Кар'єра",
    
    // Footer products links
    footerDroneSystems: "БпАК Системи",
    footerTechnologies: "Технології",
    footerInnovations: "Інновації",
    footerDocumentation: "Документація",
    
    // Footer support links
    footerContacts: "Контакти",
    footerFaq: "FAQ",
    footerTechSupport: "Технічна підтримка",
    footerPartners: "Партнери",
  },
  
  EN: {
    // Navigation
    company: "Company",
    raybird: "UAV Raybird (ACS-3)",
    applications: "Applications",
    services: "Services",
    careers: "Careers",
    contacts: "Contacts",
    
    // Company dropdown
    aboutUs: "About Us",
    history: "History",
    team: "Team",
    mission: "Mission & Values",
    
    // Applications dropdown
    military: "Military Operations",
    intelligence: "Intelligence",
    monitoring: "Monitoring",
    searchRescue: "Search & Rescue",
    
    // Services dropdown
    techSupport: "Technical Support",
    training: "Training",
    consulting: "Consulting",
    modernization: "Modernization",
    
    // Hero section
    heroTitle: "ADVANTAGE",
    heroSubtitle: "BORN IN FIRE",
    heroTagline: "Small Tactical Unmanned Aerial Systems",
    heroDescription: "Innovations created for the future. Manufacturer of unmanned aerial systems with years of excellence and engineering achievements.",
    learnMore: "LEARN MORE",
    
    // Tactical section
    advantagesTitle: "System Advantages",
    advantagesDescription: "Our unmanned system is built using the latest technologies and operational experience.",
    techBreakthrough: "Technological Breakthrough",
    techDescription: "What was considered impossible yesterday is an advantage today",
    battleTested: "Battle Tested",
    battleDescription: "Reliability proven in the most challenging conditions",
    precision: "Precision & Efficiency",
    precisionDescription: "Advanced technologies for maximum performance",
    autonomy: "Flight Autonomy",
    autonomyDescription: "Extended capabilities for long missions",
    deployment: "Rapid Deployment",
    deploymentDescription: "Ready for action in minutes",
    
    // Stats section
    statsTitle: "Numbers That Speak for Themselves",
    statsDescription: "Results proven by time and experience",
    missionHours: "Combat Mission Hours",
    specialists: "Team Specialists",
    engineers: "R&D Engineers",
    experience: "Years of Experience",
    
    // Footer
    footerDescription: "Manufacturer of next-generation unmanned aerial systems. Innovations for the future.",
    footerCompany: "Company",
    footerProducts: "Products",
    footerSupport: "Support",
    footerRights: "AEROTECH. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    
    // Footer company links
    footerAbout: "About Us",
    footerHistory: "History",
    footerTeam: "Team",
    footerCareer: "Career",
    
    // Footer products links
    footerDroneSystems: "UAV Systems",
    footerTechnologies: "Technologies",
    footerInnovations: "Innovations",
    footerDocumentation: "Documentation",
    
    // Footer support links
    footerContacts: "Contacts",
    footerFaq: "FAQ",
    footerTechSupport: "Technical Support",
    footerPartners: "Partners",
  }
};

export const getTranslation = (language: Language): Translations => {
  return translations[language];
};
