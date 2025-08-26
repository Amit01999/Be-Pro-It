import React from 'react';
import { ShieldCheck, FileText, Scale, AlertTriangle } from 'lucide-react';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsConditions = () => {
  const sections = [
    {
      title: '1. Services',
      content:
        'BePro IT provides IT solutions including web development, software development, IT consultancy, IT training, and additional services. Service details, timelines, and costs are specified in agreements.',
      icon: FileText,
    },
    {
      title: '2. User Responsibilities',
      content:
        'You agree to provide accurate information, use services lawfully, respect intellectual property, and avoid actions that damage or disrupt systems.',
      icon: ShieldCheck,
    },
    {
      title: '3. Payments & Fees',
      content:
        'All fees are outlined in proposals/contracts. Payments must follow the schedule. Delays may cause suspension or termination of services.',
      icon: Scale,
    },
    {
      title: '4. Intellectual Property',
      content:
        'All code, designs, and content remain BePro IT’s property until full payment is received. Ownership transfers after payment. Brand elements require permission for use.',
      icon: FileText,
    },
    {
      title: '5. Confidentiality',
      content:
        'We ensure strict confidentiality of client data unless disclosure is legally required.',
      icon: ShieldCheck,
    },
    {
      title: '6. Limitation of Liability',
      content:
        'BePro IT is not liable for indirect damages, losses from third-party actions, downtime, or client-side data loss/security breaches.',
      icon: AlertTriangle,
    },
    {
      title: '7. Termination',
      content:
        'Either party may terminate with notice if a material term of the agreement is breached.',
      icon: FileText,
    },
    {
      title: '8. Governing Law',
      content:
        'These Terms are governed by and construed under the laws of Bangladesh.',
      icon: Scale,
    },
    {
      title: '9. Changes to Terms',
      content:
        'We may revise these Terms periodically. Updates will be posted with a revised Effective Date.',
      icon: FileText,
    },
  ];

  return (
    <>
      <Header />
      <Section className="relative py-20 bg-gradient-to-br  text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mt-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h2>
            <p className="text-slate-300 mt-4">
              Effective Date:{' '}
              <span className="font-semibold">16th Aug 2025</span>
            </p>
          </div>

          {/* Terms List */}
          <div className="relative border-l-2 border-cyan-500 pl-8 space-y-10">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-md hover:shadow-cyan-500/30 transition duration-300 p-6"
                >
                  <span className="absolute -left-10 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-slate-900 shadow-lg">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {section.title}
                  </h3>
                  <p className="text-slate-300 mt-2">{section.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Futuristic Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </Section>
      <Footer />
    </>
  );
};

export default TermsConditions;
