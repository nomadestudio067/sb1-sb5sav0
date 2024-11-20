import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: Language;
}

const content = {
  EN: {
    title: "Enhance Your Image, Maximize Your Impact",
    subtitle: "Visuals Designed for Excellence",
    description: "Whether you're a demanding business or creative professional, we bring to life visuals that leave a lasting impression and connect with your audience.",
    exploreBtn: "Work With Us",
    contactBtn: "Get a Quote",
    scrollDown: "Discover"
  },
  FR: {
    title: "Sublimez Votre Image, Maximisez Votre Impact",
    subtitle: "Des Visuels Pensés pour l'Excellence",
    description: "Que vous soyez une entreprise ou un créatif exigeant, nous donnons vie à des visuels qui marquent les esprits et connectent avec votre audience.",
    exploreBtn: "Travaillez avec nous",
    contactBtn: "Obtenir un devis",
    scrollDown: "Découvrir"
  }
};

export default function Hero({ language }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized loading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/8FOnDeO.jpg"
          alt="Bridge pathway"
          className="w-full h-full object-cover brightness-50"
          loading="eager"
          priority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/75 to-primary/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-cream">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 tracking-wide leading-tight"
          >
            {content[language].title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-6 font-light tracking-wider text-cream/90"
          >
            {content[language].subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg mb-10 font-light tracking-wider max-w-2xl mx-auto leading-relaxed"
          >
            {content[language].description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="#contact" className="button-primary text-sm sm:text-base">
              {content[language].exploreBtn}
            </a>
            <a href="#contact" className="button-secondary text-sm sm:text-base">
              {content[language].contactBtn}
            </a>
          </motion.div>

          <motion.a
            href="#services"
            className="inline-flex flex-col items-center group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-cream/80 text-xs uppercase tracking-widest mb-4 group-hover:text-cream transition-colors">
              {content[language].scrollDown}
            </span>
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-cream/40 to-cream/0 group-hover:from-cream/60 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}