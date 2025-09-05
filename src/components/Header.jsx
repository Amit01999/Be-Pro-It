import { Link, useLocation } from 'react-router-dom';
import brainwave from '../assets/logo1.png';
import MenuSvg from '../assets/svg/MenuSvg';
import { useState } from 'react';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (!openNavigation) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  };

  const navigation = [
    { id: 1, title: 'Home', to: '/#hero' },
    { id: 2, title: 'About Us', to: '/#about' },
    { id: 3, title: 'Services', to: '/#benefits' },
    { id: 4, title: 'Portfolio', to: '/#portfolio' },
    { id: 5, title: 'Careers', to: '/careers' },
    { id: 6, title: 'Contact Us', to: '/#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo */}
        <Link
          to="/#hero"
          className="block xl:mr-8 backdrop-blur-md p-2 rounded-lg shadow-md"
        >
          <img src={brainwave} width={70} height={60} alt="BeProIT" />
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map(item => (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => {
                  if (openNavigation) {
                    setOpenNavigation(false);
                  }
                }}
                className="block relative font-sans text-2xl md:text-xl lg:text-base xl:text-lg font-medium text-n-1 transition-colors hover:text-[#1DDAE9] px-4 py-4 lg:px-6 lg:py-6"
              >
                {item.title}
              </Link>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
                  >
                    Fly8
                  </a>
                  <a
                    href="https://www.bepro.com.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-n-1 hover:bg-n-6 transition-colors"
                  >
                    BePro Business
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
