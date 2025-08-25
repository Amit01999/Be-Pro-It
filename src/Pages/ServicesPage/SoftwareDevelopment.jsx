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
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const SoftwareDevelopment = () => {
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
      gradient: 'from-violet-400 to-indigo-500',
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
      gradient: 'from-cyan-400 to-teal-500',
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
      gradient: 'from-pink-400 to-fuchsia-500',
    },
    {
      icon: TestTube,
      title: 'Software Testing & Quality Assurance',
      description: 'Ensure flawless performance before launch and beyond.',
      features: [
        'Functional, performance, and security testing',
        'Automated and manual testing processes',
        'Bug detection and resolution before deployment',
        'Continuous quality monitoring',
      ],
      cta: 'Launch with confidence and zero errors.',
      gradient: 'from-green-400 to-emerald-500',
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
      gradient: 'from-orange-400 to-red-500',
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
      gradient: 'from-blue-400 to-cyan-500',
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
        <div className="container mx-auto max-w-7xl text-center mt-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 mb-8 shadow-[0_0_30px_rgba(150,100,255,0.5)] animate-pulse">
            <Sparkles className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Software Solutions
            </span>{' '}
            That Drive Success
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            We design and develop software solutions that power productivity,
            improve efficiency, and give businesses a competitive edge. Secure,
            scalable, and user-friendly systems built for your success.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg bg-gradient-to-r from-violet-400 to-indigo-500 text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(150,100,255,0.6)] transition-all"
          >
            Start Your Journey
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      {/* Services */}
      <Section className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl hover:border-violet-400/50 hover:bg-zinc-800/80 transition-all duration-300 shadow-[0_0_20px_rgba(150,100,255,0.2)]"
            >
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} shadow-[0_0_20px_rgba(150,100,255,0.3)]`}
              >
                <service.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{service.cta}</span>
                <button
                  onClick={scrollToContact}
                  className="p-3 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 text-black hover:scale-110 transition-transform shadow-[0_0_20px_rgba(150,100,255,0.4)]"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="relative py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-gray-400 mb-10">
            Let’s discuss how our secure and scalable solutions can give your
            business the competitive edge it deserves.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full font-semibold text-lg text-black hover:scale-105 hover:shadow-[0_0_50px_rgba(150,100,255,0.5)] transition-all"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
