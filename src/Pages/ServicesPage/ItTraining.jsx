import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const trainings = [
  {
    title: 'Technical Skill Development',
    description:
      'Master the most in-demand programming and development skills.',
    points: [
      'Training in Python, Java, JavaScript',
      'Web development frameworks and tools',
      'Modern software development methodologies',
      'Hands-on project-based learning',
    ],
    cta: 'Upgrade your team’s technical expertise.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTim6R643Ipn-WCe08Va3Q4AqA-5Cu6PAWIA&s',
  },
  {
    title: 'Cybersecurity Training',
    description: 'Build a strong defense against cyber threats.',
    points: [
      'Best practices for data security',
      'Threat detection and incident response',
      'Compliance with global security standards',
      'Real-world cyber risk simulations',
    ],
    cta: 'Secure your organization from the inside out.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQpRUq8PEndZWoKnTX-uS4tluOBvM6fm1ZA&s', // cybersecurity
  },
  {
    title: 'Cloud Computing Workshops',
    description: 'Unlock the power of the cloud for your business.',
    points: [
      'AWS, Azure, and Google Cloud training',
      'Cloud deployment and management skills',
      'Cost optimization strategies',
      'Hands-on labs and guided exercises',
    ],
    cta: 'Empower your team with cloud mastery.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80', // cloud servers
  },
  {
    title: 'Customized Corporate Training',
    description: 'Tailored training for your company’s unique needs.',
    points: [
      'Software development skill building',
      'IT infrastructure and network management',
      'Digital transformation and process automation',
      'Flexible scheduling for teams of any size',
    ],
    cta: 'Get training designed for your organization.',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', // corporate teamwork
  },
  {
    title: 'Government IT Training Programs',
    description: 'Specialized courses for public sector excellence.',
    points: [
      'E-governance systems and ERP training',
      'IT project management for government',
      'Aligned with Bangladesh e-Government ERP Project',
      'Delivered by experienced government IT trainers',
    ],
    cta: 'Equip government teams for digital leadership.',
    image:
      'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80', // government / conference
  },
  {
    title: 'Certification Courses',
    description: 'Earn recognized credentials to boost careers.',
    points: [
      'Web development, software testing, IT consultancy',
      'BASIS and industry-certified programs',
      'Practical and theory-based sessions',
      'Certification exam preparation included',
    ],
    cta: 'Get certified. Get ahead.',
    image:
      'https://d502jbuhuh9wk.cloudfront.net/articles/64b7b98ae4b021efeeba4965/H3m6Ifreeonlinecourseswithcertificates.jpg', // certificate
  },
];

const ItTraining = () => {
  return (
    <>
      <Header />
      <Section>
        <div className="bg-slate-950 text-white py-20 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-32">
            <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              IT Training Programs
            </h1>

            {trainings.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Section */}
                <div>
                  <h2 className="text-3xl font-semibold mb-4">
                    {training.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{training.description}</p>
                  <ul className="space-y-2 mb-6">
                    {training.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-400 to-white mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-4 inline-block px-6 py-3 text-sm font-semibold rounded-xl 
             bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
             shadow-lg hover:shadow-indigo-500/50 hover:scale-105 
             transition-transform duration-300"
                  >
                    {training.cta}
                  </a>
                </div>

                {/* Image Section */}
                <div className="h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default ItTraining;
