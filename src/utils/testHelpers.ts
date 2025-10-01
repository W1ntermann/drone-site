// Simple test helpers to check for common issues

export const checkForCommonIssues = () => {
  const issues: string[] = [];

  // Check if React Router is properly configured
  if (typeof window !== 'undefined') {
    try {
      // Check if we can access location
      if (!window.location) {
        issues.push('Window location not available');
      }
    } catch (error) {
      issues.push(`Location error: ${error}`);
    }
  }

  return issues;
};

export const validateTranslations = (translations: any) => {
  const issues: string[] = [];
  
  if (!translations) {
    issues.push('Translations object is null or undefined');
    return issues;
  }

  // Check for required translation keys
  const requiredKeys = [
    'company', 'raybird', 'applications', 'services', 'careers', 'contacts',
    'aboutUs', 'history', 'team', 'mission',
    'heroTitle', 'heroSubtitle', 'heroDescription', 'learnMore'
  ];

  requiredKeys.forEach(key => {
    if (!translations[key]) {
      issues.push(`Missing translation key: ${key}`);
    }
  });

  return issues;
};

export const checkNavigationStructure = (navItems: any[]) => {
  const issues: string[] = [];

  if (!Array.isArray(navItems)) {
    issues.push('Navigation items is not an array');
    return issues;
  }

  navItems.forEach((item, index) => {
    if (!item.key) {
      issues.push(`Navigation item ${index} missing key`);
    }
    if (!item.label) {
      issues.push(`Navigation item ${index} missing label`);
    }
    if (item.hasDropdown && !item.dropdownItems) {
      issues.push(`Navigation item ${index} has dropdown but no dropdownItems`);
    }
  });

  return issues;
};

// Debug function to log current state
export const debugCurrentState = () => {
  if (typeof window !== 'undefined') {
    console.log('=== DEBUG INFO ===');
    console.log('Current URL:', window.location.href);
    console.log('Pathname:', window.location.pathname);
    console.log('User Agent:', navigator.userAgent);
    console.log('Screen size:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('==================');
  }
};
