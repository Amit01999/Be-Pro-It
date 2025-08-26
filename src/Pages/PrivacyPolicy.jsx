import React from 'react';
import Section from '../components/Section';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, job title, and company name.',
        'Technical Information: IP address, browser type, operating system, device details.',
        'Usage Data: Pages visited, time spent on the site, and interactions with our content.',
        'Service-Related Data: Project requirements, feedback, and correspondence with our team.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'Provide and improve our services',
        'Respond to your inquiries and support requests',
        'Process contracts and service agreements',
        'Send updates, marketing communications, and newsletters (with your consent)',
        'Ensure website security and prevent fraudulent activity',
      ],
    },
    {
      title: '3. Data Protection & Security',
      content: [
        'We use industry-standard security measures, including encryption, firewalls, and secure servers, to protect your information from unauthorized access, disclosure, or alteration.',
      ],
    },
    {
      title: '4. Data Sharing',
      content: [
        'We do not sell, rent, or trade your personal data. We may share information only with:',
        'Trusted service providers under strict confidentiality agreements',
        'Legal authorities, when required by law',
      ],
    },
    {
      title: '5. Cookies & Tracking Technologies',
      content: [
        'Our website uses cookies to enhance your browsing experience, analyze site traffic, and improve functionality. You can manage cookie preferences through your browser settings.',
      ],
    },
    {
      title: '6. Your Rights',
      content: [
        'Access, update, or delete your personal data',
        'Withdraw consent for marketing communications',
        'Request details about the information we hold on you',
      ],
    },
    {
      title: '7. Changes to This Policy',
      content: [
        'We may update this policy from time to time. Changes will be posted on this page with a revised “Effective Date.”',
      ],
    },
  ];

  return (
    <>
      <Header />
      <Section className=" text-white py-20 px-6 md:px-16 lg:px-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 mt-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Effective Date: 16th Aug 2025
          </p>
          <p className="mt-6 text-lg text-gray-300">
            BePro IT values your privacy and is committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, and safeguard your data when you interact with our website,
            services, and communications.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-cyan-300 mb-4 group-hover:text-cyan-400 transition">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {section.content.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
