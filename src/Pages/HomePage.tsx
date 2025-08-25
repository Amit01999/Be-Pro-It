import { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ButtonGradient from '../assets/svg/ButtonGradient';

const HomePage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null); // 👈 add this
  const portfolioRef = useRef(null);
  const careersRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    benefits: benefitsRef, // 👈 add this
    portfolio: portfolioRef,
    careers: careersRef,
    contact: contactRef,
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header sectionRefs={sectionRefs} />
        <div ref={heroRef}>
          <Hero sectionRefs={sectionRefs} />
        </div>
        <div ref={aboutRef}>
          <AboutUs sectionRefs={sectionRefs} />
        </div>
        <div ref={benefitsRef}>
          <Benefits />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default HomePage;
