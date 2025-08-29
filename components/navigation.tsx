"use client";

import { useState, useEffect } from "react";
import { Menu, BookOpen, Home, FileText, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [
  { name: "Головна", href: "#hero", icon: Home },
  { name: "Структура курсу", href: "#course-structure", icon: BookOpen },
  { name: "Ресурси", href: "#resources", icon: Database },
  { name: "Силабус", href: "#syllabus", icon: FileText },
  { name: "Контакти", href: "#contact", icon: Users },
];

function Navigation() {

  console.log("Navigation component rendered");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    console.log("Setting up scroll listeners");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navigationItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    console.log(`Scrolling to section: ${href}`);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav 
      data-macaly="main-navigation" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            data-macaly="site-logo"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-lg text-primary">
              МІЗНД
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 pb-4 border-b border-primary/10">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-lg text-primary">
                      МІЗНД
                    </div>
                  </div>
                  
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href);
                        // Close sheet after navigation
                        const closeButton = document.querySelector('[data-dialog-close]') as HTMLButtonElement;
                        closeButton?.click();
                      }}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-md text-left transition-colors ${
                        activeSection === item.href.slice(1)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
