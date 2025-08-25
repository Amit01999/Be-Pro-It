import React from 'react';
import {
  ArrowRight,
  Code2,
  Shield,
  Smartphone,
  TestTube,
  Zap,
  RefreshCw,
  Sparkles,
  Star,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description:
        'Bespoke solutions designed to meet your unique business needs.',
      features: [
        'ERP, CRM, and inventory management tools',
        'Tailored workflows that match your operations',
        'Scalable architecture for future growth',
        'Seamless integration with existing systems',
      ],
      cta: 'Get software that works the way you do.',
      gradient: 'from-cyan-400 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Software Solutions',
      description:
        'Robust systems for large-scale, mission-critical operations.',
      features: [
        'HR, finance, and microfinance software',
        'Designed for corporate and government use',
        'High security and compliance standards',
        'Optimized for performance and reliability',
      ],
      cta: 'Empower your enterprise with the right tools.',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Engage your audience anywhere, anytime.',
      features: [
        'Native iOS and Android development',
        'Cross-platform apps for wider reach',
        'User-friendly and visually appealing designs',
        'Optimized for speed, security, and usability',
      ],
      cta: 'Turn your idea into a powerful mobile app.',
      gradient: 'from-cyan-500 to-teal-400',
    },
    {
      icon: TestTube,
      title: 'Software Testing & QA',
      description: 'Ensure flawless performance before launch and beyond.',
      features: [
        'Functional, performance, and security testing',
        'Automated and manual testing processes',
        'Bug detection and resolution before deployment',
        'Continuous quality monitoring',
      ],
      cta: 'Launch with confidence and zero errors.',
      gradient: 'from-teal-500 to-cyan-400',
    },
    {
      icon: Zap,
      title: 'DevOps Services',
      description: 'Streamline your development and deployment processes.',
      features: [
        'CI/CD pipeline implementation',
        'Cloud integration for scalable solutions',
        'Automated builds, testing, and deployment',
        'Faster time-to-market with fewer errors',
      ],
      cta: 'Make your software delivery faster and smarter.',
      gradient: 'from-cyan-400 to-teal-600',
    },
    {
      icon: RefreshCw,
      title: 'Legacy System Modernization',
      description: 'Upgrade your old systems without losing valuable data.',
      features: [
        'Migration to modern frameworks',
        'Improved security and compatibility',
        'Enhanced performance and reliability',
        'Reduced maintenance costs',
      ],
      cta: 'Bring your legacy systems into the future.',
      gradient: 'from-teal-600 to-cyan-400',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <Section>
        <div className="container mx-auto max-w-7xl text-center mt-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] mb-8 shadow-lg">
            <Sparkles className="w-10 h-10 text-black" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] bg-clip-text text-transparent">
              Software Solutions
            </span>{' '}
            That Drive Success
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            We design and develop modern software solutions that power
            productivity, improve efficiency, and give businesses a competitive
            edge.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] text-black hover:scale-105 transition-all"
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      {/* Services */}
      <Section className="relative py-16 px-6">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#14E4E2]/50 hover:bg-zinc-800/60 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient}`}
              >
                <service.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#14E4E2] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#14E4E2] to-[#00E6BD]" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{service.cta}</span>
                <button
                  onClick={scrollToContact}
                  className="p-3 rounded-full bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] text-black hover:scale-110 transition-transform"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="relative py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-gray-400 mb-10">
            Let’s discuss how our solutions can revolutionize your business and
            accelerate growth.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#14E4E2] to-[#00E6BD] rounded-full font-semibold text-lg text-black hover:scale-105 transition-all"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#14E4E2] fill-current opacity-80"
              />
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default WebDevelopmentPage;
