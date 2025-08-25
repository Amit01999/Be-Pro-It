import React from 'react';
import { Monitor, Brush, Server, PhoneCall } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const extraServices = [
  {
    icon: Monitor,
    title: 'Digital Marketing',
    description: 'Grow your online presence and reach the right audience.',
    points: [
      'SEO to improve search rankings',
      'Social media marketing for engagement',
      'Content marketing for brand authority',
      'Campaign tracking and analytics',
    ],
    cta: 'Let’s grow your business online.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Brush,
    title: 'Graphic Design & Branding',
    description: 'Create a strong, lasting visual identity.',
    points: [
      'Professional logo and brand guidelines',
      'UI/UX design for websites and apps',
      'Marketing and promotional materials',
      'Consistent branding across all platforms',
    ],
    cta: 'Make your brand unforgettable.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Server,
    title: 'IT Infrastructure Setup',
    description: 'Build a reliable foundation for your digital operations.',
    points: [
      'Server design and management',
      'Networking solutions for all scales',
      'Data center setup and optimization',
      'Security and backup systems',
    ],
    cta: 'Strengthen your tech backbone.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: PhoneCall,
    title: 'Call Center Solutions',
    description: 'Enhance customer support and engagement.',
    points: [
      'Inbound and outbound call handling',
      'Email and chat support services',
      'Social media customer service',
      'CRM integration for better tracking',
    ],
    cta: 'Deliver customer service that stands out.',
    gradient: 'from-green-500 to-emerald-600',
  },
];

const AdditionalServices = () => {
  return (
    <>
      <Header />
      <Section>
        <section className="relative text-white py-20 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Page Intro */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Beyond Core Development & Consultancy
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                We provide additional IT services that strengthen your brand,
                boost visibility, and enhance customer engagement. From
                marketing to infrastructure and support, we deliver solutions
                that add real value to your business.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-24">
              {extraServices.map((service, i) => (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-10 ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon side */}
                  <div className="flex-1 flex justify-center">
                    <div
                      className={`w-40 h-40 rounded-3xl bg-gradient-to-r ${
                        service.gradient
                      } 
                  flex items-center justify-center shadow-lg shadow-${
                    service.gradient.split(' ')[1]
                  }/50`}
                    >
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                    <ul className="space-y-2 text-gray-400 list-disc list-inside">
                      {service.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                    <a
                      href="#"
                      className={`inline-block mt-4 px-6 py-3 text-sm font-semibold rounded-xl 
                  bg-gradient-to-r ${service.gradient} text-white 
                  shadow-md hover:shadow-lg hover:scale-105 
                  transition-transform duration-300`}
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>
      <Footer />
    </>
  );
};

export default AdditionalServices;
