import React from 'react';
import Section from './Section';
import { Facebook, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';

// Quick links
const quickLinks = [
  { name: 'Home', to: '/#hero' },
  { name: 'About Us', to: '/#about' },
  { name: 'Services', to: '/#benefits' },
  { name: 'Portfolio', to: '/#portfolio' },
  { name: 'Careers', to: '/careers' },
  { name: 'Contact', to: '/#contact' },
];

// Services
const services = [
  { title: 'Web Development', link: '/services/web-development' },
  { title: 'Software Development', link: '/services/software-development' },
  { title: 'IT Consultancy', link: '/services/it-consultancy' },
  { title: 'IT Training', link: '/services/it-training' },
  { title: 'Additional Services', link: '/services/additional-services' },
];

// Socials
const socialLinks = [
  { icon: Facebook, link: '#', label: 'Facebook' },
  { icon: Twitter, link: '#', label: 'Twitter' },
  { icon: Linkedin, link: '#', label: 'LinkedIn' },
  { icon: Github, link: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <Section
      id="footer"
      className="text-white !px-0 relative overflow-hidden"
      crosses
      crossesOffset="translate-y-16"
      customPaddings="pt-10 md:pt-16 lg:pt-20 pb-0"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 px-6 md:px-12 relative z-10">
        {/* Top row - Enhanced */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={logo}
                alt="Tech Company Logo"
                className="w-32 md:w-32 drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail size={20} className="text-white" />
              </div>
              <a
                href="mailto:info@bepro.com.bd"
                className="text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-cyan-300 transition-all duration-300 hover:scale-105"
              >
                info@bepro.com.bd
              </a>
            </div>
          </div>
        </div>

        {/* Quick links & socials - Enhanced */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-gray-700/50 pt-8">
          <ul className="flex flex-wrap gap-6 text-sm font-light">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-gray-700/50 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Services pills - Enhanced */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-light text-gray-300">
            Our Services:
          </span>
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className="group relative px-4 py-2 text-sm border border-gray-600/50 rounded-full text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{service.title}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Bottom row - Enhanced */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 border-t border-gray-700/50 pt-6 mb-10">
          <p className="hover:text-gray-300 transition-colors duration-300">
            © {new Date().getFullYear()} BePro Training and Consultancy. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-cyan-300 transition-all duration-300 relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/terms-conditions"
              className="hover:text-cyan-300 transition-all duration-300 relative group"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
