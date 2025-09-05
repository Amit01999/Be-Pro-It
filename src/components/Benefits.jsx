import { motion } from 'framer-motion';
import Heading from './Heading';
import Section from './Section';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import { Code, Laptop, Users, GraduationCap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import SVG assets directly
import card1Bg from '../assets/benefits/card-1.svg';
import card2Bg from '../assets/benefits/card-2.svg';
import card3Bg from '../assets/benefits/card-3.svg';
import card4Bg from '../assets/benefits/card-4.svg';
import card5Bg from '../assets/benefits/card-5.svg';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Modern, responsive websites built with cutting-edge technologies',
    icon: Code,
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    backgroundUrl: card1Bg,
    imageUrl: './src/assets/benefits/service-1.jpg',
    link: '/services/web-development',
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    icon: Laptop,
    technologies: ['Python', 'Java', '.NET', 'Docker'],
    backgroundUrl: card2Bg,
    imageUrl: './src/assets/benefits/service-2.jpg',
    light: true,
    link: '/services/software-development',
  },
  {
    id: 3,
    title: 'IT Consultancy',
    description: 'Strategic technology guidance for digital transformation',
    icon: Users,
    technologies: ['Cloud Strategy', 'DevOps', 'Security', 'Architecture'],
    backgroundUrl: card3Bg,
    imageUrl: './src/assets/benefits/service-3.jpg',
    link: '/services/it-consultancy',
  },
  {
    id: 4,
    title: 'IT Training',
    description: 'Professional development programs and certification courses',
    icon: GraduationCap,
    technologies: ['Workshops', 'Bootcamps', 'Online Courses', 'Mentoring'],
    backgroundUrl: card4Bg,
    imageUrl: './src/assets/benefits/service-4.jpg',
    light: true,
    link: '/services/it-training',
  },
  {
    id: 5,
    title: 'Additional Services',
    description: 'Comprehensive IT support and specialized solutions',
    icon: Settings,
    technologies: ['Maintenance', 'Security', 'Migration', 'Integration'],
    backgroundUrl: card5Bg,
    imageUrl: './src/assets/benefits/service-5.jpg',
    link: '/services/additional-services',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Benefits = () => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 mx-auto text-center">
          Our Core IT <span className="text-[#00FFD1]">Services</span>
        </h2>

        <div className="flex flex-wrap gap-10 mb-10">
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="block relative md:max-w-[24rem] group"
            >
              {/* Outer Container (removed green border) */}
              <div className="relative p-1 rounded-3xl transition-all duration-500">
                {/* Inner Card Container */}
                <div
                  className="relative rounded-[22px] bg-no-repeat bg-[length:100%_100%] overflow-hidden bg-n-8/90 backdrop-blur-sm"
                  style={{
                    backgroundImage: item.backgroundUrl
                      ? `url(${item.backgroundUrl})`
                      : 'none',
                  }}
                >
                  {/* Card Content */}
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] transition-transform duration-300 group-hover:scale-[1.02] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-n-7/80 text-n-1 border border-n-6/30 group-hover:border-[#00FFD1]/40 group-hover:bg-n-7 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center mt-auto">
                      <div className="p-3 rounded-2xl bg-n-7/50 border border-n-6/30 group-hover:border-[#00FFD1]/40 group-hover:bg-n-7/70 transition-all duration-300">
                        <item.icon
                          size={32}
                          className="text-n-1 drop-shadow-lg group-hover:text-[#00FFD1] transition-colors duration-300"
                        />
                      </div>
                      <Link
                        to={item.link}
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-n-7/30 border border-n-6/30 hover:border-[#00FFD1]/60 hover:bg-n-7/60 hover:text-[#00FFD1] transition-all duration-300 pointer-events-auto"
                      >
                        <span>Explore more</span>
                        <Arrow className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Gradient Light Effect */}
                  {item.light && <GradientLight />}

                  {/* Background Overlay with Curve */}
                  <div
                    className="absolute inset-1 bg-n-8/20 rounded-[18px]"
                    style={{ clipPath: 'url(#benefits)' }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 rounded-[18px]">
                      {/* background image overlay (disabled) */}
                    </div>
                  </div>

                  {/* Decorative Glow Effect */}
                  <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-[#00FFD1]/5 via-transparent to-[#00E6BE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Removed the green dot */}
                </div>

                {/* Outer Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00FFD1]/10 via-transparent to-[#00E6BE]/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
