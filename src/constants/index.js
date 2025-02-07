import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 101001,
    name: "SmartLearning",
    description:
      "SmartLearning is an innovative platform designed to enhance learning experiences through interactive courses, personalized study materials, and a collaborative community of learners and educators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    technologies: {
      Front_end: "React, React Router, Tailwind CSS, DaisyUI",
      State_Management: "@tanstack/react-query, Axios",
      Animations: "AOS, Lottie React",
      Authentication: "Firebase",
      Date_Management: "date-fns",
      Payment: "Stripe",
    },
    image: "https://i.ibb.co.com/nqZMG5Zq/photo-collage-png-1.png",
    source_code_link: "https://github.com/md-neloy/B10A12-client",
    live_link: "https://smart-learning-710c0.web.app/",
  },
  {
    id: 101002,
    name: "Marathon-GuideLine",
    description:
      "Marathon-GuideLine is a comprehensive platform designed for organizing and managing marathon events. It serves both event organizers and participants, streamlining the process of creating, registering, and participating in marathon events.",
    technologies: {
      Front_end: "React, React Router, Tailwind CSS, DaisyUI",
      State_Management: "@tanstack/react-query, Axios",
      Animations: "Framer Motion, AOS, Lottie React",
      Authentication: "Firebase",
      Date_Management: "date-fns",
      Payment: "N/A",
      Notifications: "React Toastify, SweetAlert2",
      Others: "Swiper, React Icons, React Helmet Async",
    },
    image: jobit,
    source_code_link: "https://github.com/md-neloy/B10A11-client",
    live_link: "https://marathon-guide.web.app/",
  },
  {
    id: 101003,
    name: "Dream Crowd",
    description:
      "A crowdfunding platform where individuals can raise money for various projects, ideas, or causes by inviting others to contribute financially.",
    technologies: {
      Front_end: "React, React Router, Tailwind CSS, DaisyUI",
      State_Management: "Axios",
      Animations: "Lottie React",
      Authentication: "Firebase",
      Date_Management: "date-fns",
      Payment: "N/A",
      Notifications: "React Toastify, SweetAlert2",
      Others: "Swiper, React Icons",
    },
    image: tripguide,
    source_code_link: "https://github.com/md-neloy/B10A10",
    live_link: "https://dream-crowd-1e8a7.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
