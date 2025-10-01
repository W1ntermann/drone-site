import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Suspense, lazy, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { debugCurrentState, checkForCommonIssues } from "@/utils/testHelpers";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const History = lazy(() => import("./pages/History"));
const Team = lazy(() => import("./pages/Team"));
const Mission = lazy(() => import("./pages/Mission"));
const Products = lazy(() => import("./pages/Products"));
const Applications = lazy(() => import("./pages/Applications"));
const Military = lazy(() => import("./pages/Military"));
const Intelligence = lazy(() => import("./pages/Intelligence"));
const Services = lazy(() => import("./pages/Services"));
const TechnicalSupport = lazy(() => import("./pages/TechnicalSupport"));
const Training = lazy(() => import("./pages/Training"));
const Consulting = lazy(() => import("./pages/Consulting"));
const Modernization = lazy(() => import("./pages/Modernization"));
const Monitoring = lazy(() => import("./pages/Monitoring"));
const SearchRescue = lazy(() => import("./pages/SearchRescue"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p>Завантаження...</p>
    </div>
  </div>
);

// Debug component for development
const DebugInfo = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      debugCurrentState();
      const issues = checkForCommonIssues();
      if (issues.length > 0) {
        console.warn('Found issues:', issues);
      } else {
        console.log('✅ No common issues detected');
      }
    }
  }, []);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <DebugInfo />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route path="/team" element={<Team />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/products" element={<Products />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/military" element={<Military />} />
              <Route path="/intelligence" element={<Intelligence />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technical-support" element={<TechnicalSupport />} />
              <Route path="/training" element={<Training />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/modernization" element={<Modernization />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/search-rescue" element={<SearchRescue />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
