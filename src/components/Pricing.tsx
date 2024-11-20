import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video, Star } from 'lucide-react';
import { Language } from '../types';

interface PricingProps {
  language: Language;
}

const packages = [
  {
    icon: Camera,
    title: { EN: 'Photography Package', FR: 'Forfait Photo' },
    price: '200',
    features: {
      EN: [
        '10 Professional Photos',
        'Professional Editing',
        'High-Resolution Files',
        'Commercial Usage Rights',
        'Quick Delivery'
      ],
      FR: [
        '10 Photos Professionnelles',
        'Retouche Professionnelle',
        'Fichiers Haute Résolution',
        'Droits d\'Utilisation Commerciale',
        'Livraison Rapide'
      ]
    },
    cta: { EN: 'Book Now', FR: 'Réserver' }
  },
  {
    icon: Star,
    featured: true,
    title: { EN: 'Premium Package', FR: 'Forfait Premium' },
    price: '450',
    features: {
      EN: [
        '15 Professional Photos',
        '30-Second Video',
        'Advanced Editing',
        'Rush Delivery Available',
        'Priority Support'
      ],
      FR: [
        '15 Photos Professionnelles',
        'Vidéo de 30 Secondes',
        'Montage Avancé',
        'Livraison Express Disponible',
        'Support Prioritaire'
      ]
    },
    cta: { EN: 'Get Premium', FR: 'Obtenir Premium' }
  },
  {
    icon: Video,
    title: { EN: 'Short Video', FR: 'Vidéo Courte' },
    price: '300',
    features: {
      EN: [
        '30-Second Video',
        'Professional Editing',
        'Background Music',
        'Two Revisions',
        'Social Media Optimization'
      ],
      FR: [
        'Vidéo de 30 Secondes',
        'Montage Professionnel',
        'Musique de Fond',
        'Deux Révisions',
        'Optimisation Médias Sociaux'
      ]
    },
    cta: { EN: 'Start Project', FR: 'Démarrer le Projet' }
  }
];

export default function Pricing({ language }: PricingProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const content = {
    EN: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the package that fits your needs',
      customNote: 'Need a custom package? Contact us for personalized solutions.',
      contact: 'Contact Us'
    },
    FR: {
      title: 'Prix Simples et Transparents',
      subtitle: 'Choisissez le forfait qui correspond à vos besoins',
      customNote: 'Besoin d\'un forfait personnalisé ? Contactez-nous pour des solutions sur mesure.',
      contact: 'Contactez-Nous'
    }
  };

  return (
    <section id="pricing" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-medium text-primary mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-primary/80">
            {content[language].subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  pkg.featured 
                    ? 'bg-primary text-cream transform -translate-y-4' 
                    : 'bg-cream-dark text-primary'
                } p-8 shadow-lg`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-brown text-cream px-4 py-1 text-sm uppercase tracking-wider">
                      {language === 'EN' ? 'Most Popular' : 'Plus Populaire'}
                    </span>
                  </div>
                )}
                
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  pkg.featured ? 'bg-cream' : 'bg-primary'
                }`}>
                  <Icon className={`w-8 h-8 ${pkg.featured ? 'text-primary' : 'text-cream'}`} />
                </div>
                
                <h3 className="text-2xl font-serif text-center mb-4">
                  {pkg.title[language]}
                </h3>
                
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-opacity-80">+</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features[language].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 ${
                    pkg.featured
                      ? 'bg-cream text-primary hover:bg-cream-dark'
                      : 'bg-primary text-cream hover:bg-primary-light'
                  } transition-colors duration-300`}
                >
                  {pkg.cta[language]}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg text-primary/80 mb-6">
            {content[language].customNote}
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-primary text-primary px-8 py-3 hover:bg-primary hover:text-cream transition-colors duration-300"
          >
            {content[language].contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}