import React from 'react';
import CodeBlocks from './CodeBlocks';
import HighlightText from './design/HighlightText';
import Section from './Section';

const AboutUs = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
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
            ctabtn1={{
              btnText: 'Our Services',
              linkto: '/services',
              active: true,
            }}
            ctabtn2={{
              btnText: 'Contact Us',
              linkto: '/contact',
              active: false,
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
            ctabtn1={{
              btnText: 'Work With Us',
              linkto: '/contact',
              active: true,
            }}
            ctabtn2={{ btnText: 'Learn More', linkto: '/about', active: false }}
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
