import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navigation    from "./components/Navigation";
import HeroSection   from "./components/HeroSection";
import TechMarquee   from "./components/TechMarquee";
import ProjectsSection from "./components/ProjectsSection";
import MobileAppsSection from "./components/MobileAppsSection";
import WhatsAppQRCodeSection from "./components/WhatsAppQRCodeSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection  from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer         from "./components/Footer";
import NotFound       from "./pages/NotFound";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const Portfolio = () => {
  useEffect(() => {
    // Smooth entry for all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navigation />
      <main>
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
