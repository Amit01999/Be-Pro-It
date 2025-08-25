import React from 'react';
import CodeBlocks from './CodeBlocks';
import HighlightText from './design/HighlightText';
import Section from './Section';

const AboutUs = ({ sectionRefs }) => {
  // scroll helper
  const scrollToSection = section => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Who We Are */}
        <div>
          <CodeBlocks
            position={'lg:flex-row'}
            heading={
              <div className="text-4xl font-semibold">
                Who <HighlightText text={'We Are'} /> – BePro IT
              </div>
            }
            subheading={
              'BePro IT is a full-service technology partner, delivering world-class web development, software engineering, IT consultancy, and training solutions for businesses, startups, and government organizations. We combine cutting-edge technology, proven methodologies, and deep industry knowledge to help our clients achieve digital transformation with measurable impact.'
            }
            // ctabtn1={{
            //   btnText: 'Our Services',
            //   onClick: () => scrollToSection('benefits'), // scroll
            //   active: true,
            // }}
            ctabtn2={{
              btnText: 'Schedule Free Consultation',
              linkto: 'https://calendar.app.google/TyHZuwgs37EGZxW38', // external
              active: true,
            }}
            codeblock={`// BePro IT: Digital Transformation Partner
const beproIT = {
  services: [
    "Web Development",
    "Software Engineering",
    "IT Consultancy",
    "Training Solutions",
  ],
  approach: () => {
    console.log("We listen, we innovate, and we deliver");
  },
  values: ["Secure", "Scalable", "Future-ready"],
};
beproIT.approach();`}
            codeColor={'text-green-400'}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Mission & Vision */}
        <div>
          <CodeBlocks
            position={'lg:flex-row-reverse'}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Our <HighlightText text={'Mission & Vision'} />
              </div>
            }
            subheading={
              'Our Mission: To empower organizations with innovative, reliable, and customized IT solutions that enhance efficiency, accelerate growth, and strengthen digital competitiveness.\n\nOur Vision: To be the most trusted IT partner in Bangladesh and beyond, known for excellence in technology, service, and client success.'
            }
            // ctabtn1={{
            //   btnText: 'Work With Us',
            //   onClick: () => scrollToSection('contact'), // 👈 scroll to Contact
            //   active: true,
            // }}
            ctabtn2={{
              btnText: 'Schedule Free Consultation',
              linkto: 'https://calendar.app.google/TyHZuwgs37EGZxW38', // 👈 external link
              external: true,
              active: true,
            }}
            codeblock={`// Mission & Vision at BePro IT
const mission = "Empower organizations with innovative & reliable IT solutions.";
const vision = "Be the most trusted IT partner in Bangladesh and beyond.";

console.log("🌍 Mission:", mission);
console.log("🚀 Vision:", vision);`}
            codeColor={'text-blue-400'}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
