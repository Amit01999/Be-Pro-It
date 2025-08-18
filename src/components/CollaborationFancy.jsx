import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    id: 1,
    title: 'Proven Track Record',
    text: 'Years of successful projects for both private companies and government agencies.',
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'End-to-End Solutions',
    text: 'From concept to ongoing support, we cover the full project lifecycle.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Certified Professionals',
    text: 'Skilled developers, consultants, and trainers with recognized expertise.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'Government & Corporate Expertise',
    text: 'Trusted partner for national-scale IT projects and enterprise clients.',
    icon: Lightbulb,
  },
  {
    id: 5,
    title: 'Customized Approach',
    text: 'Tailor-made strategies and solutions to match your business needs.',
    icon: Lightbulb,
  },
];

const CollaborationFancy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: '+=2000',
        pin: true,
        scrub: false,
        onUpdate: self => {
          const progress = self.progress * points.length;
          const index = Math.floor(progress);
          if (index !== activeIndex && index < points.length) {
            setActiveIndex(index);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Circle container */}
      <motion.div
        className="relative w-80 h-80 border border-gray-700 rounded-full flex items-center justify-center"
        animate={{ rotate: -activeIndex * (360 / points.length) }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {points.map((point, index) => {
          const angle = (index / points.length) * (2 * Math.PI);
          const x = Math.cos(angle) * 140;
          const y = Math.sin(angle) * 140;

          const Icon = point.icon;

          return (
            <motion.div
              key={point.id}
              className="absolute w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-lg"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              animate={{
                scale: activeIndex === index ? 1.3 : 1,
                opacity: activeIndex === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.6 }}
            >
              <Icon size={24} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Left side text + animated connector */}
      <div className="absolute left-10 max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Connector line */}
            <motion.div
              className="absolute top-1/2 -right-20 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-400 shadow-[0_0_10px_rgba(0,255,200,0.7)]"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <h3 className="text-2xl font-bold mb-3">
              {points[activeIndex].title}
            </h3>
            <p className="text-gray-300">{points[activeIndex].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CollaborationFancy;
