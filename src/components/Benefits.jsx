// // import { benefits } from "../constants";
// // import Heading from "./Heading";
// // import Section from "./Section";
// // import Arrow from "../assets/svg/Arrow";
// // import { GradientLight } from "./design/Benefits";
// // import ClipPath from "../assets/svg/ClipPath";

// // const Benefits = () => {
// //   return (
// //     <Section id="features">
// //       <div className="container relative z-2">
// //         <Heading
// //           className="md:max-w-md lg:max-w-2xl"
// //           title="Chat Smarter, Not Harder with Brainwave"
// //         />

// //         <div className="flex flex-wrap gap-10 mb-10">
// //           {benefits.map((item) => (
// //             <div
// //               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
// //               style={{
// //                 backgroundImage: `url(${item.backgroundUrl})`,
// //               }}
// //               key={item.id}
// //             >
// //               <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
// //                 <h5 className="h5 mb-5">{item.title}</h5>
// //                 <p className="body-2 mb-6 text-n-3">{item.text}</p>
// //                 <div className="flex items-center mt-auto">
// //                   <img
// //                     src={item.iconUrl}
// //                     width={48}
// //                     height={48}
// //                     alt={item.title}
// //                   />
// //                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
// //                     Explore more
// //                   </p>
// //                   <Arrow />
// //                 </div>
// //               </div>

// //               {item.light && <GradientLight />}

// //               <div
// //                 className="absolute inset-0.5 bg-n-8"
// //                 style={{ clipPath: "url(#benefits)" }}
// //               >
// //                 <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
// //                   {item.imageUrl && (
// //                     <img
// //                       src={item.imageUrl}
// //                       width={380}
// //                       height={362}
// //                       alt={item.title}
// //                       className="w-full h-full object-cover"
// //                     />
// //                   )}
// //                 </div>
// //               </div>

// //               <ClipPath />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </Section>
// //   );
// // };

// // export default Benefits;

// import Heading from "./Heading";
// import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
// import ClipPath from "../assets/svg/ClipPath";

// const benefits = [
//   {
//     id: 1,
//     title: "Web Development",
//     text: "Crafting scalable, responsive web applications with modern frameworks and cloud integration",
//     iconUrl: "/icons/code.svg",
//     backgroundUrl: "/backgrounds/card-bg-1.png",
//     imageUrl: "/images/web-dev.jpg",
//     light: true,
//   },
//   {
//     id: 2,
//     title: "Software Engineering",
//     text: "Building robust, custom software solutions with agile methodologies and CI/CD pipelines",
//     iconUrl: "/icons/laptop.svg",
//     backgroundUrl: "/backgrounds/card-bg-2.png",
//     imageUrl: "/images/software-dev.jpg",
//     light: false,
//   },
//   {
//     id: 3,
//     title: "IT Consultancy",
//     text: "Driving digital transformation with expert cloud architecture and cybersecurity strategies",
//     iconUrl: "/icons/users.svg",
//     backgroundUrl: "/backgrounds/card-bg-3.png",
//     imageUrl: "/images/it-consultancy.jpg",
//     light: true,
//   },
//   {
//     id: 4,
//     title: "Tech Training",
//     text: "Empowering teams with hands-on workshops in AI, DevOps, and full-stack development",
//     iconUrl: "/icons/graduation-cap.svg",
//     backgroundUrl: "/backgrounds/card-bg-4.png",
//     imageUrl: "/images/it-training.jpg",
//     light: false,
//   },
//   {
//     id: 5,
//     title: "Enterprise Solutions",
//     text: "Delivering end-to-end IT support, system migrations, and API integrations",
//     iconUrl: "/icons/settings.svg",
//     backgroundUrl: "/backgrounds/card-bg-5.png",
//     imageUrl: "/images/enterprise-solutions.jpg",
//     light: true,
//   },
// ];

// const Benefits = () => {
//   return (
//     <Section id="features">
//       <div className="container relative z-2">
//         <Heading
//           className="md:max-w-md lg:max-w-2xl"
//           title="Innovate Faster, Scale Smarter with TechWave"
//         />

//         <div className="flex flex-wrap gap-10 mb-10">
//           {benefits.map((item) => (
//             <div
//               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//               style={{
//                 backgroundImage: `url(${item.backgroundUrl})`,
//               }}
//               key={item.id}
//             >
//               <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>
//                 <div className="flex items-center mt-auto">
//                   <img
//                     src={item.iconUrl}
//                     width={48}
//                     height={48}
//                     alt={item.title}
//                   />
//                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
//                     Discover Solutions
//                   </p>
//                   <Arrow />
//                 </div>
//               </div>

//               {item.light && <GradientLight />}

//               <div
//                 className="absolute inset-0.5 bg-n-8"
//                 style={{ clipPath: "url(#benefits)" }}
//               >
//                 <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       width={380}
//                       height={362}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>
//               </div>

//               <ClipPath />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Benefits;

import { motion } from 'framer-motion';
import Heading from './Heading';
import Section from './Section';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import { Code, Laptop, Users, GraduationCap, Settings } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Modern, responsive websites built with cutting-edge technologies',
    icon: Code,
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    backgroundUrl: './src/assets/benefits/card-1.svg',
    imageUrl: './src/assets/benefits/service-1.jpg',
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    icon: Laptop,
    technologies: ['Python', 'Java', '.NET', 'Docker'],
    backgroundUrl: './src/assets/benefits/card-2.svg',
    imageUrl: './src/assets/benefits/service-2.jpg',
    light: true,
  },
  {
    id: 3,
    title: 'IT Consultancy',
    description: 'Strategic technology guidance for digital transformation',
    icon: Users,
    technologies: ['Cloud Strategy', 'DevOps', 'Security', 'Architecture'],
    backgroundUrl: './src/assets/benefits/card-3.svg',
    imageUrl: './src/assets/benefits/service-3.jpg',
  },
  {
    id: 4,
    title: 'IT Training',
    description: 'Professional development programs and certification courses',
    icon: GraduationCap,
    technologies: ['Workshops', 'Bootcamps', 'Online Courses', 'Mentoring'],
    backgroundUrl: './src/assets/benefits/card-4.svg',
    imageUrl: './src/assets/benefits/service-4.jpg',
    light: true,
  },
  {
    id: 5,
    title: 'Additional Services',
    description: 'Comprehensive IT support and specialized solutions',
    icon: Settings,
    technologies: ['Maintenance', 'Security', 'Migration', 'Integration'],
    backgroundUrl: './src/assets/benefits/card-5.svg',
    imageUrl: './src/assets/benefits/service-5.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Core IT Services"
        /> */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 mx-auto text-center">
          Our Core IT <span className="text-[#00FFD1]">Services</span>
        </h2>

        <div className="flex flex-wrap gap-10 mb-10">
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] transition-transform duration-300 group-hover:scale-[1.02] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-n-7 text-n-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center mt-auto">
                  <item.icon
                    size={42}
                    className="text-n-1 drop-shadow-lg group-hover:text-[#00FFD1] transition-colors duration-300"
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: 'url(#benefits)' }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
                  {/* {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )} */}
                </div>
              </div>

              <ClipPath />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
