// import React from 'react';
// import Spline from '@splinetool/react-spline';
// import { mockData } from '../data/mock';

// const HeroSection = () => {
//   const { hero } = mockData;

//   return (
//     <section
//       id="home"
//       className="dark-full-container"
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//       }}
//     >
//       <div
//         className="dark-content-container"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '60px',
//           zIndex: 2,
//         }}
//       >
//         {/* Left Content */}
//         <div style={{ flex: 1, maxWidth: '600px' }}>
//           <h1 className="display-huge" style={{ marginBottom: '24px' }}>
//             {hero.headline}
//           </h1>

//           <p
//             className="body-large"
//             style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}
//           >
//             {hero.subline}
//           </p>

//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <button className="btn-primary dark-button-animate">
//               {hero.primaryCTA}
//             </button>
//             <button className="btn-secondary dark-button-animate">
//               {hero.secondaryCTA}
//             </button>
//           </div>
//         </div>

//         {/* Right 3D Visual */}
//         <div
//           style={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '700px',
//               height: '700px',
//               overflow: 'visible',
//               position: 'relative',
//             }}
//           >
//             <Spline
//               scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Background particles */}
//       <div className="particles-container">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 6}s`,
//               animationDuration: `${4 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection1 = () => {
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
      className="dark-full-container min-h-screen flex items-center relative px-4 md:px-8"
    >
      <div className="dark-content-container flex flex-col md:flex-row items-center gap-8 md:gap-16 z-20 w-full">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-5  text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#00FFD1] via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,209,0.6)]">
            {hero.headline}
          </h1>

          <p className="body-large mb-10 text-gray-400 text-base md:text-lg">
            {hero.subline}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-[#00FFD1] via-cyan-400 to-blue-600 text-black
    shadow-[0_0_20px_rgba(0,255,209,0.5)] hover:shadow-[0_0_40px_rgba(0,255,209,0.8)]
    transform hover:scale-105 transition-all duration-300"
            >
              {hero.primaryCTA}
            </button>

            <button
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
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] relative">
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
