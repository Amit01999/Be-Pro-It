// import ButtonGradient from './assets/svg/ButtonGradient';
// import AboutUs from './components/AboutUs';
// import Benefits from './components/Benefits';
// import Collaboration from './components/Collaboration';
// import CollaborationFancy from './components/CollaborationFancy';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import OurProjects from './components/OurProjects';
// import Portfolio from './components/Portfolio';
// import Pricing from './components/Pricing';
// import Roadmap from './components/Roadmap';
// import Services from './components/Services';

// const App = () => {
//   return (
//     <>
//       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//         <Header />
//         <Hero />
//         <AboutUs />
//         <Benefits />

//         <Collaboration />

//         {/* <CollaborationFancy /> */}
//         {/* <Services /> */}
//         {/* <OurProjects /> */}
//         {/* <Pricing /> */}
//         <Portfolio />
//         <Contact />
//         {/* <Roadmap /> */}
//         <Footer />
//       </div>

//       <ButtonGradient />
//     </>
//   );
// };

// export default App;

import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ButtonGradient from './assets/svg/ButtonGradient';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const careersRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    services: servicesRef,
    portfolio: portfolioRef,
    careers: careersRef,
    contact: contactRef,
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header sectionRefs={sectionRefs} />
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div ref={servicesRef}>
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

export default App;
