import Section from './Section';
import { BottomLine } from './design/Hero';

import { useRef } from 'react';

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
      <div className="container relative mt-20 lg:mt-10" ref={parallaxRef}>
        <HeroSection1 sectionRefs={sectionRefs} />
        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
