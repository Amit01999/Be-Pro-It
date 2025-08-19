import React from 'react';
import { CardBody, CardContainer, CardItem } from './design/3d-card';
import { motion } from 'framer-motion';
import Section from './Section';
import img1 from '../assets/protrfolio/1.png';
import img2 from '../assets/protrfolio/2.png';
import img3 from '../assets/protrfolio/3.png';
import img4 from '../assets/protrfolio/4.png';
import img5 from '../assets/protrfolio/5.png';
import img6 from '../assets/protrfolio/6.png';
import img7 from '../assets/protrfolio/7.png';
import img8 from '../assets/protrfolio/8.png';

const portfolioItems = [
  {
    id: 7,
    title: 'Tech Marvels',
    description:
      'A cutting-edge Bangladeshi computer e-commerce platform delivering innovative digital products and services.',
    img: img7,
    liveLink: 'https://techmarvels.com.bd/',
    action: '#',
  },
  {
    id: 1,
    title: 'Etaha Corporation Limited',
    description:
      'Etaha Corporation Limited (Sister Concern of Etaha Group: USA, Australia, Bangladesh, Myanmar, Singapore)',
    img: img1,
    liveLink: 'https://etahaworld.com/',
    action: '#',
  },
  {
    id: 2,
    title: 'Global Education Expert',
    description:
      'A modern education consulting platform helping students achieve their academic dreams worldwide with tailored study abroad services.',
    img: img2,
    liveLink: 'https://globaleduexp.com/',
    action: '#',
  },
  {
    id: 5,
    title: 'Sunshine Grammar School',
    description:
      'Spreading humanity, knowledge, and peace through world-class education — preparing students for success in a challenging world.',
    img: img5,
    liveLink: 'https://www.sunshinegrammarschool.com/',
    action: '#',
  },
  {
    id: 3,
    title: 'The Legal Circle',
    description:
      'A firm of barristers, advocates, and legal consultants providing client-focused and solutions-oriented legal services in Bangladesh and internationally.',
    img: img3,
    liveLink: 'https://legalcirclebd.com/',
    action: '#',
  },
  {
    id: 8,
    title: "Sajal's Diet Falsafa",
    description:
      'Promoting good health and preventing diseases through clinical nutrition consultancy, counseling, public health awareness, and environmental awareness.',
    img: img8,
    liveLink: 'https://sajalsdietfalsafa.com/',
    action: '#',
  },
  {
    id: 4,
    title: 'Dr. Kamal Hossain & Associates',
    description:
      'Established in 1980, one of the largest law firms in Bangladesh offering comprehensive legal services with 40+ years of institutional experience.',
    img: img4,
    liveLink: 'https://khossain.com/',
    action: '#',
  },
  {
    id: 6,
    title: 'Bangladesh Event Express',
    description:
      'Crafting luxury and celebrating moments since 2012 — delivering elite event management, immersive AV production, and creative storytelling.',
    img: img6,
    liveLink: 'https://www.eventexpressbd.com/',
    action: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = (direction = 'left') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
});

const Portfolio = () => {
  return (
    <Section>
      {/* Section Heading */}
      <div className="text-center mb-3">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Our <span className="text-[#00FFD1]">Projects</span>
        </h2>
        <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
          Explore some of the innovative solutions and digital experiences we’ve
          built for our clients. From education platforms to e-commerce, we
          deliver impactful technology.
        </p>
      </div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardVariants(index % 2 === 0 ? 'left' : 'right')}
          >
            <CardContainer className="inter-var">
              <CardBody
                className="relative group/card 
                  w-[550px] h-[480px] flex flex-col justify-between
                  rounded-2xl p-6 border 
                  bg-gradient-to-br from-black via-[#0A0A0A] to-[#001F1A] 
                  border-[#00E6BE]/40 
                  shadow-lg shadow-black/60 
                  hover:shadow-[0_0_25px_#00E6BE] 
                  transition-all duration-500 ease-out backdrop-blur-md"
              >
                {/* Floating neon border effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover/card:border-[#00E6BE]/70 transition duration-500"></div>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-extrabold text-white tracking-wide group-hover/card:text-[#00E6BE] transition duration-300"
                >
                  {item.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 text-sm max-w-sm mt-3 leading-relaxed line-clamp-3"
                >
                  {item.description}
                </CardItem>

                {/* Image with hover glow */}
                <CardItem
                  translateZ="100"
                  rotateX={15}
                  rotateZ={-8}
                  className="w-full mt-5"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-[0_0_20px_#00E6BE] transition duration-500"
                    />
                    {/* Neon overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition duration-500"></div>
                  </div>
                </CardItem>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href={item.liveLink}
                    className="px-5 py-2 rounded-xl text-sm font-medium 
                      text-[#00E6BE] border border-[#00E6BE]/50 
                      hover:bg-[#00E6BE]/10 hover:shadow-[0_0_15px_#00E6BE] 
                      transition-all duration-300"
                  >
                    Live Demo →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href={item.action}
                    className="px-6 py-2 rounded-xl 
                      bg-gradient-to-r from-[#00E6BE] to-[#00FFD1] 
                      text-black text-sm font-bold 
                      shadow-lg hover:shadow-[0_0_20px_#00E6BE] 
                      transition duration-300"
                  >
                    Learn More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-xl 
            bg-gradient-to-r from-[#00E6BE] to-[#00FFD1] 
            text-black font-bold shadow-lg 
            hover:shadow-[0_0_25px_#00E6BE] 
            transition duration-300"
        >
          View More →
        </a>
      </div>
    </Section>
  );
};

export default Portfolio;
