// import { brainwaveSymbol, check } from "../assets";
// import { collabApps, collabContent, collabText } from "../constants";
// import Button from "./Button";
// import Section from "./Section";
// import { LeftCurve, RightCurve } from "./design/Collaboration";

// const Collaboration = () => {
//   return (
//     <Section crosses>
//       <div className="container lg:flex">
//         <div className="max-w-[25rem]">
//           <h2 className="h2 mb-4 md:mb-8">
//             AI Chat App for seamless collaboration
//           </h2>

//           <ul className="max-w-[22rem] mb-10 md:mb-14">
//             {collabContent.map((item) => (
//               <li className="mb-3 py-3" key={item.id}>
//                 <div className="flex items-center">
//                   <img src={check} width={24} height={24} alt="check" />
//                   <h6 className="body-2 ml-5">{item.title}</h6>
//                 </div>
//                 {item.text && (
//                   <p className="body-2 mt-3 text-n-4">{item.text}</p>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <Button>Try it now</Button>
//         </div>

//         <div className="lg:ml-auto xl:w-[38rem] mt-4">
//           <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
//             {collabText}
//           </p>

//           <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
//             <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
//               <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
//                 <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
//                   <img
//                     src={brainwaveSymbol}
//                     width={48}
//                     height={48}
//                     alt="brainwave"
//                   />
//                 </div>
//               </div>
//             </div>

//             <ul>
//               {collabApps.map((app, index) => (
//                 <li
//                   key={app.id}
//                   className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
//                     index * 45
//                   }`}
//                 >
//                   <div
//                     className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
//                       index * 45
//                     }`}
//                   >
//                     <img
//                       className="m-auto"
//                       width={app.width}
//                       height={app.height}
//                       alt={app.title}
//                       src={app.icon}
//                     />
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <LeftCurve />
//             <RightCurve />
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Collaboration;

// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Section from './Section';
// import { Award, ShieldCheck, Users, Settings, Layers } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const whyChoose = [
//   {
//     id: 1,
//     title: 'Proven Track Record',
//     text: 'Years of successful projects...',
//     icon: Award,
//   },
//   {
//     id: 2,
//     title: 'End-to-End Solutions',
//     text: 'From initial concept to support...',
//     icon: Layers,
//   },
//   {
//     id: 3,
//     title: 'Certified Professionals',
//     text: 'Skilled developers with expertise.',
//     icon: ShieldCheck,
//   },
//   {
//     id: 4,
//     title: 'Govt & Corporate Expertise',
//     text: 'Trusted partner for IT projects.',
//     icon: Users,
//   },
//   {
//     id: 5,
//     title: 'Customized Approach',
//     text: 'Tailor-made strategies for business.',
//     icon: Settings,
//   },
// ];

// const Collaboration = () => {
//   const containerRef = useRef(null);
//   const circleRef = useRef(null);
//   const itemsRef = useRef([]);
//   const lineRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top top',
//           end: '+=' + whyChoose.length * 500,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       whyChoose.forEach((item, i) => {
//         // circle rotation
//         tl.to(circleRef.current, {
//           rotation: (i + 1) * (360 / whyChoose.length),
//           duration: 1,
//           ease: 'power2.inOut',
//         });

//         // fade in text
//         tl.fromTo(
//           itemsRef.current[i],
//           { opacity: 0, x: -50 },
//           { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
//           '<'
//         );

//         // animate connection line
//         tl.fromTo(
//           lineRefs.current[i],
//           { strokeDasharray: 300, strokeDashoffset: 300, opacity: 0 },
//           {
//             strokeDashoffset: 0,
//             opacity: 1,
//             duration: 0.8,
//             ease: 'power2.out',
//           },
//           '<'
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <Section>
//       <div
//         ref={containerRef}
//         className="relative container flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-screen"
//       >
//         {/* Left Texts */}
//         <div className="flex-1 space-y-10 relative">
//           {whyChoose.map((item, i) => (
//             <div
//               key={item.id}
//               ref={el => (itemsRef.current[i] = el)}
//               className="flex items-start gap-3 opacity-0"
//             >
//               <item.icon className="w-6 h-6 text-[#00FFD1]" />
//               <div>
//                 <h6 className="font-semibold text-white">{item.title}</h6>
//                 <p className="text-sm text-n-4">{item.text}</p>
//               </div>
//             </div>
//           ))}

//           {/* SVG overlay for animated lines */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {whyChoose.map((_, i) => (
//               <line
//                 key={i}
//                 ref={el => (lineRefs.current[i] = el)}
//                 x1="100%" // right edge (circle side)
//                 y1={`${(i + 1) * 80}`} // match text Y position
//                 x2="75%" // toward circle center
//                 y2="50%" // middle height
//                 stroke="#00FFD1"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 className="drop-shadow-[0_0_8px_#00FFD1]"
//                 style={{ opacity: 0 }}
//               />
//             ))}
//           </svg>
//         </div>

//         {/* Right Circle */}
//         <div className="flex-1 flex justify-center items-center relative">
//           <motion.div
//             ref={circleRef}
//             className="relative w-[22rem] h-[22rem] rounded-full border border-n-6 flex items-center justify-center"
//           >
//             {whyChoose.map((item, i) => {
//               const angle = (i / whyChoose.length) * 360;
//               const radius = 160;
//               const x = Math.cos((angle * Math.PI) / 180) * radius;
//               const y = Math.sin((angle * Math.PI) / 180) * radius;

//               return (
//                 <div
//                   key={item.id}
//                   className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-n-8 border border-n-6 shadow-[0_0_15px_#00FFD155]"
//                   style={{
//                     top: `calc(50% + ${y}px - 1.5rem)`,
//                     left: `calc(50% + ${x}px - 1.5rem)`,
//                   }}
//                 >
//                   <item.icon className="w-6 h-6 text-[#00FFD1]" />
//                 </div>
//               );
//             })}

//             {/* Center logo */}
//             <div className="flex items-center justify-center w-20 h-20 rounded-full bg-n-8 shadow-[0_0_25px_#00FFD155] border border-n-6">
//               <span className="text-[#00FFD1] font-bold">BePro IT</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Collaboration;

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './Section';
import { Award, ShieldCheck, Users, Settings, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const whyChoose = [
  {
    id: 1,
    title: 'Proven Track Record',
    text: 'Years of successful projects for both private companies and government agencies.',
    icon: Award,
  },
  {
    id: 2,
    title: 'End-to-End Solutions',
    text: 'From initial concept to ongoing support, we cover the full project lifecycle.',
    icon: Layers,
  },
  {
    id: 3,
    title: 'Certified Professionals',
    text: 'Skilled developers, consultants, and trainers with industry-recognized expertise.',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Government & Corporate Expertise',
    text: 'Trusted partner for national-scale IT projects and enterprise clients.',
    icon: Users,
  },
  {
    id: 5,
    title: 'Customized Approach',
    text: 'Tailor-made strategies and solutions to match your business needs.',
    icon: Settings,
  },
];

const Collaboration = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=' + whyChoose.length * 500, // length of scroll area
          scrub: true,
          pin: true, // ⬅️ page stops here
          anticipatePin: 1,
        },
      });

      whyChoose.forEach((item, i) => {
        tl.to(circleRef.current, {
          rotation: (i + 1) * (360 / whyChoose.length),
          duration: 1,
          ease: 'power2.inOut',
        }).fromTo(
          itemsRef.current[i],
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' },
          '<'
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      <>
        {/* Top text - position absolute */}
        <div className="relative">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center px-4">
            {/* Eyebrow */}
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-widest text-indigo-700 ring-1 ring-inset ring-indigo-200">
              Why Choose Us?
            </span>

            {/* Headline */}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
                We Deliver Value
              </span>
              <br />

              <span className="text-[#00FFD1]">Beyond Technology</span>
            </h1>

            {/* Accent underline */}
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          </div>
        </div>

        {/* Main container */}
        <div
          ref={containerRef}
          className="relative container flex flex-col lg:flex-row lg:items-center lg:gap-12 min-h-screen  pt-40"
        >
          {/* Left Texts */}
          <div className="flex-1 space-y-6">
            {whyChoose.map((item, i) => (
              <div
                key={item.id}
                ref={el => (itemsRef.current[i] = el)}
                className="flex items-start gap-3 opacity-0"
              >
                <item.icon className="w-6 h-6 text-[#00FFD1]" />
                <div>
                  <h6 className="font-semibold text-white">{item.title}</h6>
                  <p className="text-sm text-n-4">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Circle */}
          <div className="flex-1 flex justify-center items-center">
            <motion.div
              ref={circleRef}
              className="relative w-[22rem] h-[22rem] rounded-full border border-n-6 flex items-center justify-center"
            >
              {whyChoose.map((item, i) => {
                const angle = (i / whyChoose.length) * 360;
                const radius = 160;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={item.id}
                    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-n-8 border border-n-6 shadow-[0_0_15px_#00FFD155]"
                    style={{
                      top: `calc(50% + ${y}px - 1.5rem)`,
                      left: `calc(50% + ${x}px - 1.5rem)`,
                    }}
                  >
                    <item.icon className="w-6 h-6 text-[#00FFD1]" />
                  </div>
                );
              })}
              {/* Center logo */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-n-8 shadow-[0_0_25px_#00FFD155] border border-n-6">
                <span className="text-[#00FFD1] font-bold">BePro IT</span>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    </Section>
  );
};

export default Collaboration;
