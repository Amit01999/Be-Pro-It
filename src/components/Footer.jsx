import React from 'react';
import Section from './Section';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../assets/logo1.png';

// Quick links
const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About Us', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Careers', id: 'careers' },
  { name: 'Contact', id: 'contact' },
];

// Services
const services = [
  'Web Development',
  'Software Development',
  'IT Consultancy',
  'IT Training',
  'Cloud Solutions',
  'Security Audits',
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
    <>
      {/* ================= Full Footer ================= */}
      <Section
        id="footer"
        className="text-white !px-0"
        crosses
        crossesOffset="translate-y-16"
        customPaddings="pt-10 md:pt-16 lg:pt-20 pb-0" // 👈 removes bottom gap
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12 px-6 md:px-12">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Tech Company Logo"
                className="w-32 md:w-32"
              />
            </div>

            {/* Right: Email + Button */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                📧 info@bepro.com.bd
              </h2>
            </div>
          </div>

          {/* Quick links & socials */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-t border-gray-700 pt-8">
            {/* Quick Links */}
            <ul className="flex flex-wrap gap-6 text-sm font-light">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-gray-300 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 hover:text-gray-400 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Services pills */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-light">Our Services:</span>
            {services.map((service, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm border border-gray-600 rounded-full hover:bg-white hover:text-black transition"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 border-t border-gray-700 pt-6 mb-10">
            <p>
              © {new Date().getFullYear()} TechCompany. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
