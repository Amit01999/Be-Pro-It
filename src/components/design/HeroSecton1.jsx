import React from 'react';
import Spline from '@splinetool/react-spline';
import TypewriterTitle from './TypewriterTitle';

const HeroSection1 = ({ sectionRefs }) => {
  const handleScrollToBenefits = () => {
    sectionRefs.benefits.current.scrollIntoView({ behavior: 'smooth' });
  };
  const hero = {
    headline: 'Transform Your Vision into Powerful Digital Solutions',
    subline:
      'From web and software development to IT consultancy and training — BePro IT delivers end-to-end technology services that drive growth.',
    primaryCTA: 'Get a Free Consultation',
    secondaryCTA: 'Explore Our Services',
  };

  return (
    <section
      id="home"
      className="dark-full-container min-h-[80vh] flex items-center relative px-4 md:px-8"
    >
      <div className="dark-content-container flex flex-col md:flex-row items-center gap-8 md:gap-16 z-20 w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h1
            className="mb-5 font-extrabold 
    bg-gradient-to-r from-[#00FFD1] via-cyan-400 to-blue-600 bg-clip-text 
    text-transparent drop-shadow-[0_0_20px_rgba(0,255,209,0.6)]
    leading-tight
    text-[clamp(2rem,4vw,2.6rem)]   /* base: ~32–42px */
    md:text-[clamp(2.5rem,3.8vw,3.2rem)] /* medium screens: ~40–52px */
    lg:text-[clamp(3rem,3.5vw,3.6rem)]   /* laptops: ~48–58px */
    xl:text-[clamp(3.2rem,3.2vw,4rem)]" /* large screens: ~52–64px */
          >
            <span className="block">Transform Your Vision into</span>
            <span className="block">
              Powerful <TypewriterTitle />
            </span>
          </h1>

          {/* Line 3 → subline stays as <p> below */}
          <p className="body-large mb-10 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            {hero.subline}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://calendar.app.google/TyHZuwgs37EGZxW38"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-[#00FFD1] via-cyan-400 to-blue-600 text-black
  shadow-[0_0_20px_rgba(0,255,209,0.5)] hover:shadow-[0_0_40px_rgba(0,255,209,0.8)]
  transform hover:scale-105 transition-all duration-300"
            >
              {hero.primaryCTA}
            </a>

            <button
              onClick={handleScrollToBenefits}
              className="px-6 py-3 text-sm md:text-base font-semibold rounded-full border-2 border-cyan-400 text-cyan-400
      hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(0,255,209,0.6)]
      transform hover:scale-105 transition-all duration-300"
            >
              {hero.secondaryCTA}
            </button>
          </div>
        </div>

        {/* Right 3D Visual */}
        <div className="flex-1 flex justify-center items-center">
          <div className=" w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative">
            <Spline
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="particles-container absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection1;
