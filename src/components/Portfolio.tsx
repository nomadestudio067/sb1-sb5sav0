import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Language } from '../types';
import 'react-photo-view/dist/react-photo-view.css';

interface PortfolioProps {
  language: Language;
}

const portfolioSections = {
  photo: [
    {
      title: { EN: 'Corporate Events', FR: 'Événements Corporatifs' },
      items: [
        { image: 'https://i.imgur.com/T3X0L54.jpg' },
        { image: 'https://i.imgur.com/PFcxAJq.jpg' },
        { image: 'https://i.imgur.com/KCVtN1O.jpg' },
        { image: 'https://i.imgur.com/3iiEbj4.jpg' },
        { image: 'https://i.imgur.com/1jEN26K.jpg' },
        { image: 'https://i.imgur.com/tSiZGmb.jpg' }
      ]
    },
    { 
      title: { EN: 'Product Photography', FR: 'Photographie Produit' },
      items: [
        { image: 'https://i.imgur.com/7Puw6sI.jpg' },
        { image: 'https://i.imgur.com/A2fePpX.jpg' },
        { image: 'https://i.imgur.com/HRVWva3.jpg' },
        { image: 'https://i.imgur.com/mX7Ay4d.jpg' },
        { image: 'https://i.imgur.com/JUTP8iC.jpg' },
        { image: 'https://i.imgur.com/rCUFFL8.jpg' },
        { image: 'https://i.imgur.com/y804I8A.jpg' }
      ]
    }
  ]
};

// Sélection des meilleures photos pour la section "Tout"
const highlightedItems = [
  // Corporate Events
  { image: 'https://i.imgur.com/T3X0L54.jpg', category: 'Corporate Events' },
  { image: 'https://i.imgur.com/PFcxAJq.jpg', category: 'Corporate Events' },
  { image: 'https://i.imgur.com/KCVtN1O.jpg', category: 'Corporate Events' },
  // Product Photography
  { image: 'https://i.imgur.com/7Puw6sI.jpg', category: 'Product Photography' },
  { image: 'https://i.imgur.com/A2fePpX.jpg', category: 'Product Photography' },
  { image: 'https://i.imgur.com/HRVWva3.jpg', category: 'Product Photography' }
];

export default function Portfolio({ language }: PortfolioProps) {
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const renderContent = () => {
    if (filter === 'video' || filter === 'other') {
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center text-cream">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-3xl font-serif mb-4">
              {language === 'EN' ? 'Coming Soon' : 'Bientôt Disponible'}
            </h3>
            <p className="text-cream/80">
              {language === 'EN' 
                ? 'This section is currently under construction. Stay tuned!'
                : 'Cette section est en cours de construction. Restez à l\'écoute !'}
            </p>
          </div>
        </div>
      );
    }

    if (filter === 'all') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PhotoProvider>
            {highlightedItems.map((item, index) => (
              <motion.div
                key={`highlight-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <PhotoView src={item.image}>
                  <img
                    src={item.image}
                    alt={`${item.category} highlight ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </PhotoView>
              </motion.div>
            ))}
          </PhotoProvider>
        </div>
      );
    }

    return (
      <div className="space-y-16">
        {portfolioSections.photo.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="space-y-8">
            <h3 className="text-3xl font-serif text-cream text-center">
              {section.title[language]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <PhotoProvider>
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${filter}-${sectionIndex}-${itemIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                  >
                    <PhotoView src={item.image}>
                      <img
                        src={item.image}
                        alt={`${section.title[language]} item ${itemIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </PhotoView>
                  </motion.div>
                ))}
              </PhotoProvider>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-32 bg-primary-dark">
      <div className="max-w-[2000px] mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-medium text-cream mb-4">
            {language === 'EN' ? 'Our Portfolio' : 'Notre Portfolio'}
          </h2>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {[
              { id: 'all', labelEN: 'All', labelFR: 'Tout' },
              { id: 'photo', labelEN: 'Photography', labelFR: 'Photographie' },
              { id: 'video', labelEN: 'Video', labelFR: 'Vidéo' },
              { id: 'other', labelEN: 'Coming Soon', labelFR: 'À Venir' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300
                  ${filter === category.id 
                    ? 'text-cream border-b-2 border-cream scale-105' 
                    : 'text-cream/60 hover:text-cream hover:scale-105'
                  }`}
              >
                {language === 'EN' ? category.labelEN : category.labelFR}
              </button>
            ))}
          </div>
        </motion.div>

        {renderContent()}
      </div>
    </section>
  );
}