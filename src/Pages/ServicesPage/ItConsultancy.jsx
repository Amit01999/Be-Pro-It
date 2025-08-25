import React from 'react';
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Cloud,
  Layers,
  Workflow,
  ClipboardCheck,
  Sparkles,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

const ItConsultancy = () => {
  const services = [
    {
      icon: Brain,
      title: 'IT Strategy & Planning',
      description:
        'Turn your technology into a growth engine for your business.',
      features: [
        'Roadmaps aligned with your business goals',
        'Expert guidance on infrastructure and software choices',
        'Cost-effective and scalable solutions',
        'Technology adoption and change management support',
      ],
      cta: 'Plan your digital success with us.',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity Consulting',
      description: 'Protect your business from evolving digital threats.',
      features: [
        'Comprehensive risk assessments',
        'Security protocol design and implementation',
        'Compliance with data protection regulations',
        'Continuous monitoring and threat prevention',
      ],
      cta: 'Stay safe, stay secure.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Leverage the power of the cloud for efficiency and scalability.',
      features: [
        'AWS, Google Cloud, and Azure expertise',
        'Cloud migration and optimization',
        'Secure cloud architecture design',
        'Cost control and resource management',
      ],
      cta: 'Move to the cloud with confidence.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Layers,
      title: 'ERP & CRM Implementation',
      description: 'Streamline operations and improve customer relationships.',
      features: [
        'Deployment of leading ERP and CRM platforms',
        'Customization to match your workflows',
        'Data migration and system integration',
        'Staff training for smooth adoption',
      ],
      cta: 'Transform the way you manage your business.',
      gradient: 'from-teal-400 to-emerald-500',
    },
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Boost productivity by automating repetitive tasks.',
      features: [
        'Workflow analysis and automation planning',
        'Integration with existing systems',
        'Improved accuracy and speed of operations',
        'Reduction in operational costs',
      ],
      cta: 'Let automation do the hard work for you.',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management Consulting',
      description: 'Deliver projects on time, on budget, and on point.',
      features: [
        'Agile, Scrum, and other modern methodologies',
        'Risk assessment and resource planning',
        'Tools and processes for efficient execution',
        'Continuous monitoring and reporting',
      ],
      cta: 'Manage your projects like a pro.',
      gradient: 'from-orange-400 to-yellow-500',
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
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 shadow-[0_0_30px_rgba(0,255,255,0.5)] animate-pulse">
            <Sparkles className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Smart IT Consultancy
            </span>{' '}
            For Future-Ready Businesses
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            We provide expert IT consultancy that helps businesses and
            government organizations make smarter technology decisions, reduce
            costs, and achieve long-term success.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all"
          >
            Start Your Transformation
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
              className="group p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-zinc-800/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
            >
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} shadow-[0_0_20px_rgba(0,255,255,0.3)]`}
              >
                <service.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{service.cta}</span>
                <button
                  onClick={scrollToContact}
                  className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)]"
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Build the Future?
          </h2>

          <p className="text-lg text-gray-400 mb-10">
            Let’s craft innovative IT solutions that future-proof your business
            and keep you ahead of the competition.
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-semibold text-lg text-black hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all"
          >
            Let’s Talk Strategy
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default ItConsultancy;
