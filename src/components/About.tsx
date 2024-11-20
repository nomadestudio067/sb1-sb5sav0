import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Award, Lightbulb, Users, Eye } from 'lucide-react';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const values = [
  {
    id: 'quality',
    icon: Award,
    title: {
      EN: 'Quality Excellence',
      FR: 'Excellence de Qualité'
    },
    description: {
      EN: 'We maintain the highest standards in every project, from pre-production to final delivery. Our commitment to excellence is reflected in our state-of-the-art equipment, meticulous attention to detail, and rigorous quality control process.',
      FR: 'Nous maintenons les plus hauts standards dans chaque projet, de la pré-production à la livraison finale. Notre engagement envers l\'excellence se reflète dans notre équipement de pointe, notre attention méticuleuse aux détails et notre processus rigoureux de contrôle qualité.'
    },
    features: {
      EN: [
        'Professional grade equipment',
        'Rigorous quality control',
        'Attention to detail',
        'Consistent results',
        'Regular equipment maintenance',
        'Backup systems'
      ],
      FR: [
        'Équipement professionnel',
        'Contrôle qualité rigoureux',
        'Attention aux détails',
        'Résultats constants',
        'Maintenance régulière',
        'Systèmes de backup'
      ]
    }
  },
  {
    id: 'innovation',
    icon: Lightbulb,
    title: {
      EN: 'Creative Innovation',
      FR: 'Innovation Créative'
    },
    description: {
      EN: 'We constantly push creative boundaries, exploring new techniques and approaches to deliver unique and impactful visual content. Our team stays at the forefront of industry trends and technological advancements.',
      FR: 'Nous repoussons constamment les limites créatives, explorant de nouvelles techniques et approches pour livrer un contenu visuel unique et percutant. Notre équipe reste à la pointe des tendances de l\'industrie et des avancées technologiques.'
    },
    features: {
      EN: [
        'Latest technology adoption',
        'Creative experimentation',
        'Unique perspectives',
        'Trend awareness',
        'Custom solutions',
        'Continuous learning'
      ],
      FR: [
        'Adoption des dernières technologies',
        'Expérimentation créative',
        'Perspectives uniques',
        'Veille des tendances',
        'Solutions personnalisées',
        'Apprentissage continu'
      ]
    }
  },
  {
    id: 'partnership',
    icon: Users,
    title: {
      EN: 'Client Partnership',
      FR: 'Partenariat Client'
    },
    description: {
      EN: 'We believe in building strong, lasting relationships with our clients. Through open communication, understanding of objectives, and collaborative approach, we ensure each project exceeds expectations.',
      FR: 'Nous croyons en l\'établissement de relations solides et durables avec nos clients. Grâce à une communication ouverte, une compréhension des objectifs et une approche collaborative, nous nous assurons que chaque projet dépasse les attentes.'
    },
    features: {
      EN: [
        'Clear communication',
        'Project transparency',
        'Regular updates',
        'Client feedback integration',
        'Flexible scheduling',
        'Long-term support'
      ],
      FR: [
        'Communication claire',
        'Transparence des projets',
        'Mises à jour régulières',
        'Intégration des retours',
        'Planification flexible',
        'Support à long terme'
      ]
    }
  },
  {
    id: 'vision',
    icon: Eye,
    title: {
      EN: 'Artistic Vision',
      FR: 'Vision Artistique'
    },
    description: {
      EN: 'Our unique artistic perspective sets us apart. We combine technical expertise with creative vision to create compelling visual narratives that resonate with audiences and achieve strategic objectives.',
      FR: 'Notre perspective artistique unique nous démarque. Nous combinons expertise technique et vision créative pour créer des récits visuels captivants qui résonnent avec les audiences et atteignent les objectifs stratégiques.'
    },
    features: {
      EN: [
        'Unique storytelling',
        'Visual innovation',
        'Brand alignment',
        'Emotional impact',
        'Artistic direction',
        'Creative consulting'
      ],
      FR: [
        'Narration unique',
        'Innovation visuelle',
        'Alignement de marque',
        'Impact émotionnel',
        'Direction artistique',
        'Conseil créatif'
      ]
    }
  }
];

export default function About({ language }: AboutProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const content = {
    EN: {
      title: 'About Nomade Studio',
      description: 'We are a creative studio specializing in photography, videography, and content creation. Our passion lies in capturing moments and telling stories that leave lasting impressions.',
      mission: 'Our mission is to deliver exceptional creative services that help our clients stand out in today\'s digital landscape.'
    },
    FR: {
      title: 'À Propos de Nomade Studio',
      description: 'Nous sommes un studio créatif spécialisé en photographie, vidéographie et création de contenu. Notre passion est de capturer des moments et de raconter des histoires qui laissent des impressions durables.',
      mission: 'Notre mission est de fournir des services créatifs exceptionnels qui aident nos clients à se démarquer dans le paysage numérique actuel.'
    }
  };

  const selectedBadge = selectedValue ? values.find(v => v.id === selectedValue) : null;

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {content[language].description}
          </p>
          <p className="text-lg text-gray-300 mb-8">
            {content[language].mission}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.button
                key={value.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedValue(selectedValue === value.id ? null : value.id)}
                className={`bg-brown/20 p-6 rounded-lg border border-brown/30 transition-all duration-300
                  hover:bg-brown/30 hover:scale-105 group
                  ${selectedValue === value.id ? 'ring-2 ring-cream scale-105' : ''}`}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className={`w-8 h-8 mb-3 transition-colors duration-300
                    ${selectedValue === value.id ? 'text-cream' : 'text-cream/80'}`} />
                  <p className={`font-semibold transition-colors duration-300
                    ${selectedValue === value.id ? 'text-cream' : 'text-cream/80'}`}>
                    {value.title[language]}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedValue(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#1a1a1a] rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  {React.createElement(selectedBadge.icon, { className: "w-8 h-8 text-cream" })}
                  <h3 className="text-2xl font-bold text-cream">
                    {selectedBadge.title[language]}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedValue(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-cream" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-cream/90 text-lg leading-relaxed mb-6">
                    {selectedBadge.description[language]}
                  </p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-cream">
                    {language === 'EN' ? 'Key Features' : 'Caractéristiques Clés'}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedBadge.features[language].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-cream/80">
                        <span className="w-1.5 h-1.5 bg-cream rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}