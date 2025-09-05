import { Link, useLocation } from 'react-router-dom';
import brainwave from '../assets/logo1.png';
import MenuSvg from '../assets/svg/MenuSvg';
import { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Code, Zap } from 'lucide-react';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update time every second for tech vibe
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const isActive = path => {
    if (path.startsWith('/#')) {
      return (
        location.hash === path.substring(1) ||
        (path === '/#hero' && location.pathname === '/' && !location.hash)
      );
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10'
          : 'bg-black/70 backdrop-blur-lg '
      }`}
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 209, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 209, 0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
              animation: 'grid-move 20s linear infinite',
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10 px-3">
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 lg:px-6 lg:my-[2px] xl:px-8">
          {/* Logo with Tech Elements */}
          <Link
            to="/#hero"
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="relative">
              {/* Glowing border animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

              <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/50 group-hover:border-cyan-400/80 transition-all duration-300">
                <img
                  src={brainwave}
                  width={40}
                  height={36}
                  alt="BeProIT"
                  className="object-contain filter drop-shadow-lg"
                />

                {/* Corner indicators */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Company name with typewriter effect */}
            <div className="hidden md:block">
              <div className="text-cyan-300 font-mono text-lg font-bold tracking-wider">
                &lt;BeProIT/&gt;
              </div>
              {/* <div className="text-xs text-gray-400 font-mono">
                {currentTime.toLocaleTimeString()}
              </div> */}
            </div>
          </Link>

          {/* Desktop Navigation with Terminal Style */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <Link
                key={item.id}
                to={item.to}
                className={`relative group px-4 py-2 text-sm xl:text-lg font-mono transition-all duration-300 ${
                  isActive(item.to)
                    ? 'text-cyan-300'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="relative">
                    {item.title}
                    {isActive(item.to) && (
                      <span className="absolute -right-2 top-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></span>
                    )}
                  </span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>

                {/* Active indicator */}
                {isActive(item.to) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Sister Concern with Terminal Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-sm xl:text-lg font-mono text-gray-300 hover:text-cyan-300 transition-all duration-300 group">
                <Terminal
                  size={16}
                  className="text-cyan-400 group-hover:animate-pulse"
                />
                <span>Sister Concern</span>
                <ChevronDown
                  size={14}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    showDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Terminal-style Dropdown */}
              <div
                className={`absolute top-full right-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-cyan-500/50 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden transition-all duration-300 ${
                  showDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {/* Terminal header */}
                <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 border-b border-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-gray-400 font-mono">
                      ~/sister-concerns
                    </span>
                  </div>
                </div>

                <div className="p-2">
                  <a
                    href="https://www.fly8.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-3 text-sm font-mono text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded transition-all duration-300 group"
                  >
                    <Code size={16} className="text-cyan-400" />
                    <div className="flex-1">
                      <div className="text-cyan-300">fly8</div>
                      <div className="text-xs text-gray-400">
                        Global aviation platform
                      </div>
                    </div>
                    <Zap
                      size={14}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>

                  <a
                    href="https://www.bepro.com.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-3 text-sm font-mono text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded transition-all duration-300 group"
                  >
                    <Code size={16} className="text-cyan-400" />
                    <div className="flex-1">
                      <div className="text-cyan-300">bepro-business</div>
                      <div className="text-xs text-gray-400">
                        Business solutions
                      </div>
                    </div>
                    <Zap
                      size={14}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Futuristic Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-3 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-cyan-500/50 hover:border-cyan-400/80 transition-all duration-300 group"
            onClick={toggleNavigation}
            aria-label="Toggle navigation"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Terminal Style */}
      <nav
        className={`lg:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-xl border-b border-cyan-500/50 transition-all duration-500 ${
          openNavigation
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        {/* Mobile terminal header */}
        <div className="bg-gradient-to-r from-gray-900 to-black px-4 py-2 border-b border-cyan-500/30">
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-cyan-400" />
            <span className="text-sm text-gray-400 font-mono">
              BeProIT Terminal v2.0
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => {
                  setOpenNavigation(false);
                  document.body.classList.remove('nav-open');
                }}
                className={`flex items-center gap-3 px-4 py-3 text-base font-mono rounded-lg transition-all duration-300 ${
                  isActive(item.to)
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/5'
                }`}
              >
                <span className="text-cyan-400">{item.icon}</span>
                <span>{item.title.toLowerCase().replace(' ', '-')}</span>
              </Link>
            ))}

            {/* Mobile Sister Concern */}
            <div className="pt-4 border-t border-cyan-500/30 mt-4">
              <div className="px-4 py-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                # Sister Concerns
              </div>
              <a
                href="https://www.fly8.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 text-base font-mono text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                onClick={() => {
                  setOpenNavigation(false);
                  document.body.classList.remove('nav-open');
                }}
              >
                <Code size={16} className="text-cyan-400" />
                <span>fly8.global</span>
              </a>
              <a
                href="https://www.bepro.com.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 text-base font-mono text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                onClick={() => {
                  setOpenNavigation(false);
                  document.body.classList.remove('nav-open');
                }}
              >
                <Code size={16} className="text-cyan-400" />
                <span>bepro.com.bd</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay with Tech Effect */}
      {openNavigation && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/80 backdrop-blur-sm z-40"
          onClick={() => {
            setOpenNavigation(false);
            document.body.classList.remove('nav-open');
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 209, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 230, 190, 0.1) 0%, transparent 50%)`,
          }}
        />
      )}

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
