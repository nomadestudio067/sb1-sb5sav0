import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';

type NavItem = {
  label: {
    EN: string;
    FR: string;
  };
  href: string;
};

const navItems: NavItem[] = [
  { label: { EN: 'Home', FR: 'Accueil' }, href: '#home' },
  { label: { EN: 'Services', FR: 'Services' }, href: '#services' },
  { label: { EN: 'Portfolio', FR: 'Portfolio' }, href: '#portfolio' },
  { label: { EN: 'About', FR: 'À Propos' }, href: '#about' },
  { label: { EN: 'Contact', FR: 'Contact' }, href: '#contact' },
];

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjusted offset for better mobile experience
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-24">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="h-12 md:h-16"
            >
              <img 
                src="https://i.imgur.com/yWRdg6S.png" 
                alt="Nomade Studio" 
                className="h-full w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-cream hover:text-cream/70 transition-colors uppercase tracking-wider text-sm font-sans"
              >
                {item.label[language]}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
              className="flex items-center space-x-2 text-cream hover:text-cream/70 transition-colors uppercase tracking-wider text-sm font-sans"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream hover:text-cream/70 transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-16 bg-primary/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="p-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-cream hover:text-cream/70 transition-colors uppercase tracking-wider text-sm font-sans py-3"
              >
                {item.label[language]}
              </a>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'EN' ? 'FR' : 'EN');
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 text-cream hover:text-cream/70 transition-colors uppercase tracking-wider text-sm font-sans py-3"
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}