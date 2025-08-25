import { curve, heroBackground, robot } from '../assets';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';
import {
  Users,
  Globe,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Award,
  Server,
} from 'lucide-react';
import HeroSection1 from './design/HeroSecton1';

const Hero = ({ sectionRefs }) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[5rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1  mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <HeroSection1 sectionRefs={sectionRefs} />
        </div>
        {/* <div className="relative max-w-[30rem] mx-auto md:max-w-7xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-8 py-20 overflow-hidden">
                <div className="absolute inset-0">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00FFD1] rounded-full opacity-30 animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div> */}
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
