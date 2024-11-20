import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsProps {
  language: Language;
}

const testimonials = [
  {
    name: 'Sophie Martin',
    company: 'Innovatech Solutions Montréal',
    website: 'https://www.innovatech-mtl.ca',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: {
      EN: "Working with Nomade Studio has been transformative for our corporate events. Their ability to capture the essence of our tech company while maintaining a professional edge is remarkable.",
      FR: "Collaborer avec Nomade Studio a été transformateur pour nos événements corporatifs. Leur capacité à capturer l'essence de notre entreprise tech tout en maintenant un côté professionnel est remarquable."
    },
    role: {
      EN: "Events Director",
      FR: "Directrice des Événements"
    }
  },
  {
    name: 'Marc Tremblay',
    company: 'Les Industries Laurentides',
    website: 'https://www.industries-laurentides.ca',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: {
      EN: "The quality and professionalism of Nomade Studio exceeded our expectations. Their team understood our industrial vision perfectly and delivered exceptional results for our corporate communications.",
      FR: "La qualité et le professionnalisme de Nomade Studio ont dépassé nos attentes. Leur équipe a parfaitement compris notre vision industrielle et livré des résultats exceptionnels pour nos communications corporatives."
    },
    role: {
      EN: "Communications Director",
      FR: "Directeur des Communications"
    }
  },
  {
    name: 'Julie Côté',
    company: 'Festival Lumières Québec',
    website: 'https://www.festival-lumieres.qc.ca',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: {
      EN: "Nomade Studio captured the energy and magic of our festival perfectly. Their creative approach and technical expertise helped us showcase our events in the best possible light.",
      FR: "Nomade Studio a parfaitement capturé l'énergie et la magie de notre festival. Leur approche créative et leur expertise technique nous ont permis de présenter nos événements sous leur meilleur jour."
    },
    role: {
      EN: "Marketing Manager",
      FR: "Responsable Marketing"
    }
  }
];

export default function Testimonials({ language }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-medium text-primary mb-4">
            {language === 'EN' ? 'Client Success Stories' : 'Témoignages Clients'}
          </h2>
          <p className="text-xl text-primary/80">
            {language === 'EN' 
              ? 'What our clients say about working with us'
              : 'Ce que nos clients disent de leur collaboration avec nous'}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-medium text-lg text-primary">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-primary/60 text-sm">
                  {testimonials[currentIndex].role[language]}
                </p>
                <a 
                  href={testimonials[currentIndex].website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/80 text-sm hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {testimonials[currentIndex].company}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <blockquote className="text-primary/80 italic text-lg">
              "{testimonials[currentIndex].content[language]}"
            </blockquote>
          </motion.div>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}