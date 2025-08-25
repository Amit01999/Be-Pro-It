// import { useLocation } from 'react-router-dom';
// import { disablePageScroll, enablePageScroll } from 'scroll-lock';

// import brainwave from '../assets/logo1.png';
// import MenuSvg from '../assets/svg/MenuSvg';
// import { HamburgerMenu } from './design/Header';
// import { useState } from 'react';
// const Header = ({ sectionRefs }) => {
//   const [openNavigation, setOpenNavigation] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   const handleNavClick = section => {
//     if (sectionRefs[section]?.current) {
//       sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     }
//   };

//   const navigation = [
//     { id: 1, title: 'Home', section: 'hero' },
//     { id: 2, title: 'About Us', section: 'about' },
//     { id: 3, title: 'Services', section: 'services' },
//     { id: 4, title: 'Portfolio', section: 'portfolio' },
//     { id: 5, title: 'Careers', section: 'careers' },
//     { id: 6, title: 'Contact Us', section: 'contact' },
//   ];

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
//       <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
//         <a className="block w-[12rem] xl:mr-8" href="#hero">
//           <img src={brainwave} width={60} height={50} alt="Brainwave" />
//         </a>

//         <nav
//           className={`${
//             openNavigation ? 'flex' : 'hidden'
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.section)}
//                 className="block relative font-code text-3xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
//               >
//                 {item.title}
//               </button>
//             ))}

//             {/* Sister Concern with Border + Dropdown */}
//             <div
//               className="relative group lg:border-l lg:border-n-6"
//               onMouseEnter={() => setShowDropdown(true)}
//               onMouseLeave={() => setShowDropdown(false)}
//             >
//               <button
//                 className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
//           px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
//           lg:leading-5 lg:hover:text-n-1 xl:px-12`}
//               >
//                 Sister Concern
//               </button>

//               {/* Dropdown Menu */}
//               {showDropdown && (
//                 <div className="absolute top-full left-0 bg-n-8 border border-n-6 rounded-md shadow-lg w-40 py-2">
//                   <a
//                     href="https://www.fly8.global/"
//                     className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
//                   >
//                     Fly8
//                   </a>
//                   <a
//                     href="/business"
//                     className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
//                   >
//                     Business
//                   </a>
//                 </div>
//               )}
//             </div>
//           </div>

//           <HamburgerMenu />
//         </nav>

//         <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
//           <MenuSvg openNavigation={openNavigation} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import brainwave from '../assets/logo1.png';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

const Header = ({ sectionRefs }) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleNavClick = section => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }
  };

  const navigation = [
    { id: 1, title: 'Home', section: 'hero' },
    { id: 2, title: 'About Us', section: 'about' },
    { id: 3, title: 'Services', section: 'benefits' },
    { id: 4, title: 'Portfolio', section: 'portfolio' },
    { id: 5, title: 'Careers', section: 'careers' },
    { id: 6, title: 'Contact Us', section: 'contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo with better visibility */}
        <a
          className="block xl:mr-8  backdrop-blur-md p-2 rounded-lg shadow-md"
          href="#hero"
        >
          <img
            src={brainwave}
            width={80}
            height={60}
            alt="BeProIT"
            className="object-contain bg-white/80 p-2 rounded-md shadow-md"
          />
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.section)}
                className="block relative font-sans text-2xl md:text-xl lg:text-base xl:text-lg font-medium text-n-1 transition-colors hover:text-[#1DDAE9] px-4 py-4 lg:px-6 lg:py-6"
              >
                {item.title}
              </button>
            ))}

            {/* Sister Concern Dropdown */}
            <div
              className="relative group lg:border-l lg:border-n-6"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="block relative font-sans text-2xl md:text-xl lg:text-base xl:text-lg font-medium text-n-1 transition-colors hover:text-[#1DDAE9] px-4 py-4 lg:px-6 lg:py-6">
                Sister Concern
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 bg-n-8 border border-n-6 rounded-md shadow-lg w-44 py-2">
                  <a
                    href="https://www.fly8.global/"
                    className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
                  >
                    Fly8
                  </a>
                  <a
                    href="https://www.bepro.com.bd/"
                    className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
                  >
                    Business
                  </a>
                </div>
              )}
            </div>
          </div>

          <HamburgerMenu />
        </nav>

        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
