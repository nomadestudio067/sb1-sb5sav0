import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video, Palette, Users, X } from 'lucide-react';
import { Language } from '../types';

interface ServicesProps {
  language: Language;
}

const services = [
  {
    icon: Camera,
    title: { EN: 'Photography', FR: 'Photographie' },
    description: {
      EN: 'Professional photography services for events, portraits, and commercial projects.',
      FR: 'Services de photographie professionnelle pour événements, portraits et projets commerciaux.'
    },
    portfolioSection: 'photo',
    details: {
      EN: {
        features: [
          'High-resolution images',
          'Professional editing',
          'Quick delivery',
          'Multiple formats',
          'Commercial rights',
          'Backup storage'
        ],
        applications: [
          'Corporate events',
          'Product photography',
          'Portrait sessions',
          'Architecture',
          'Real estate',
          'Fashion shoots'
        ]
      },
      FR: {
        features: [
          'Images haute résolution',
          'Retouche professionnelle',
          'Livraison rapide',
          'Formats multiples',
          'Droits commerciaux',
          'Stockage de sauvegarde'
        ],
        applications: [
          'Événements corporatifs',
          'Photographie de produits',
          'Séances portraits',
          'Architecture',
          'Immobilier',
          'Séances mode'
        ]
      }
    }
  },
  {
    icon: Video,
    title: { EN: 'Videography', FR: 'Vidéographie' },
    description: {
      EN: 'High-quality video production for commercials, events, and corporate needs.',
      FR: 'Production vidéo de haute qualité pour publicités, événements et besoins corporatifs.'
    },
    portfolioSection: 'video',
    details: {
      EN: {
        features: [
          '4K resolution',
          'Professional audio',
          'Color grading',
          'Custom editing',
          'Multiple formats',
          'Drone footage'
        ],
        applications: [
          'Corporate videos',
          'Event coverage',
          'Commercials',
          'Product demos',
          'Interviews',
          'Aerial shots'
        ]
      },
      FR: {
        features: [
          'Résolution 4K',
          'Audio professionnel',
          'Étalonnage couleur',
          'Montage personnalisé',
          'Formats multiples',
          'Prises de vue drone'
        ],
        applications: [
          'Vidéos corporatives',
          'Couverture d\'événements',
          'Publicités',
          'Démos produits',
          'Interviews',
          'Prises aériennes'
        ]
      }
    }
  },
  {
    icon: Palette,
    title: { EN: 'Content Creation', FR: 'Création de Contenu' },
    description: {
      EN: 'Creative content development for social media and marketing campaigns.',
      FR: 'Développement de contenu créatif pour médias sociaux et campagnes marketing.'
    },
    portfolioSection: 'other',
    details: {
      EN: {
        features: [
          'Strategy planning',
          'Content calendar',
          'Multi-platform',
          'Analytics',
          'Engagement tracking',
          'Brand consistency'
        ],
        applications: [
          'Social media',
          'Marketing campaigns',
          'Brand storytelling',
          'Digital ads',
          'Website content',
          'Email marketing'
        ]
      },
      FR: {
        features: [
          'Planification stratégique',
          'Calendrier de contenu',
          'Multi-plateformes',
          'Analytiques',
          'Suivi d\'engagement',
          'Cohérence de marque'
        ],
        applications: [
          'Médias sociaux',
          'Campagnes marketing',
          'Narration de marque',
          'Publicités digitales',
          'Contenu web',
          'Marketing par courriel'
        ]
      }
    }
  },
  {
    icon: Users,
    title: { EN: 'Agency Services', FR: 'Services d\'Agence' },
    description: {
      EN: 'Full-service creative agency solutions for businesses.',
      FR: 'Solutions d\'agence créative complètes pour entreprises.'
    },
    portfolioSection: 'other',
    details: {
      EN: {
        features: [
          'Brand strategy',
          'Visual identity',
          'Campaign planning',
          'Content strategy',
          'Market analysis',
          'ROI tracking'
        ],
        applications: [
          'Brand launches',
          'Rebranding',
          'Marketing campaigns',
          'Digital presence',
          'Event planning',
          'Content strategy'
        ]
      },
      FR: {
        features: [
          'Stratégie de marque',
          'Identité visuelle',
          'Planification campagne',
          'Stratégie contenu',
          'Analyse marché',
          'Suivi ROI'
        ],
        applications: [
          'Lancements de marque',
          'Rebranding',
          'Campagnes marketing',
          'Présence digitale',
          'Planification événements',
          'Stratégie contenu'
        ]
      }
    }
  }
];

export default function Services({ language }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handlePortfolioClick = (section: string) => {
    setSelectedService(null);
    // Dispatch custom event to change portfolio filter
    window.dispatchEvent(new CustomEvent('setPortfolioFilter', { detail: section }));
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'EN' ? 'Our Services' : 'Nos Services'}
          </h2>
          <p className="text-lg text-gray-600">
            {language === 'EN' 
              ? 'Professional creative services tailored to your needs'
              : 'Services créatifs professionnels adaptés à vos besoins'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
                className={`bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer
                  transform duration-300 hover:-translate-y-1
                  ${selectedService === index ? 'scale-105 shadow-xl ring-2 ring-black' : ''}`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-colors duration-300
                  ${selectedService === index ? 'bg-black' : 'bg-gray-200'}`}>
                  <Icon className={`w-8 h-8 transition-colors duration-300
                    ${selectedService === index ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center transition-colors duration-300
                  ${selectedService === index ? 'text-black' : 'text-gray-900'}`}>
                  {service.title[language]}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description[language]}
                </p>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      {React.createElement(services[selectedService].icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {services[selectedService].title[language]}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      {language === 'EN' ? 'Features' : 'Caractéristiques'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[selectedService].details[language].features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      {language === 'EN' ? 'Applications' : 'Applications'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[selectedService].details[language].applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handlePortfolioClick(services[selectedService].portfolioSection)}
                        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all
                          transform hover:-translate-y-1 duration-300"
                      >
                        {language === 'EN' ? 'Discover Our Work' : 'Découvrir Nos Réalisations'}
                      </button>
                      <a
                        href="#contact"
                        onClick={() => setSelectedService(null)}
                        className="border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-all
                          transform hover:-translate-y-1 duration-300"
                      >
                        {language === 'EN' ? 'Get Started' : 'Commencer'}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}