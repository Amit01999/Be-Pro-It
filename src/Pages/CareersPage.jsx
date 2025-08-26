import React from 'react';
import { Briefcase, Users, Sparkles, Clock, Laptop } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

const CareersPage = () => {
  const perks = [
    {
      icon: <Briefcase className="w-8 h-8 text-[#16E3E3]" />,
      title: 'Challenging Projects',
      desc: 'Work on real-world problems and cutting-edge technologies.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#16E3E3]" />,
      title: 'Continuous Learning',
      desc: 'Access to training programs, certifications, and mentorship.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#16E3E3]" />,
      title: 'Collaborative Culture',
      desc: 'Supportive, diverse, and teamwork-driven environment.',
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#16E3E3]" />,
      title: 'Growth Opportunities',
      desc: 'Clear career paths and promotion opportunities.',
    },
    {
      icon: <Clock className="w-8 h-8 text-[#16E3E3]" />,
      title: 'Work-Life Balance',
      desc: 'Flexible hours and hybrid work options for many roles.',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-950 via-black to-gray-950 text-white text-center py-24 px-6 border-b border-gray-800 overflow-hidden mt-20">
        {/* Futuristic overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,227,227,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(0,255,209,0.15),transparent_40%)]"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#16E3E3] to-[#00FFD1] bg-clip-text text-transparent drop-shadow-lg">
            Build Your Career Where Innovation Thrives
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Join BePro IT and be part of a tech community that values
            creativity, collaboration, and growth.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section className="py-20 px-16 md:px-28 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-[#16E3E3] to-[#00FFD1] bg-clip-text text-transparent">
          Why Work With Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="group bg-gray-900/80 backdrop-blur-lg border border-gray-800 shadow-lg rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-[0_0_25px_rgba(22,227,227,0.4)] hover:border-[#16E3E3]/60 hover:scale-105"
            >
              <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {perk.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Life at BePro IT */}
      <Section>
        <div className="mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#16E3E3] to-[#00FFD1] bg-clip-text text-transparent">
            Life at BePro IT
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Be part of a vibrant tech community that celebrates ideas,
            encourages experimentation, and supports growth. From team outings
            to hackathons, there’s always something exciting happening.
          </p>
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#16E3E3] to-[#00FFD1] bg-clip-text text-transparent">
            Open Positions
          </h2>
          <div className="bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-xl p-10">
            <p className="text-gray-400 text-lg">
              🚀 Sorry, there are no job openings at BePro IT right now. <br />
              Stay tuned — new opportunities will appear here soon.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default CareersPage;
