import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import TechMarquee from "./components/TechMarquee";
import ProjectsSection from "./components/ProjectsSection";
import MobileAppsSection from "./components/MobileAppsSection";
import WhatsAppQRCodeSection from "./components/WhatsAppQRCodeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
// import { inject } from "@vercel/analytics/react"
import { inject } from '@vercel/analytics';

inject();
const queryClient = new QueryClient();

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_0%,hsl(var(--signal)/0.16),transparent_60%),radial-gradient(ellipse_50%_35%_at_100%_10%,hsl(var(--signal)/0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-grid-signal opacity-40" />
      </div>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <TechMarquee />
        <ProjectsSection />
        <MobileAppsSection />
        <WhatsAppQRCodeSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
