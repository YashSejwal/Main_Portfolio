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

import  bitalu  from "../assets/tech/bitalu.png";
import  netfitApp from "../assets/tech/netfitApp.jpg";
import robocar from "../assets/tech/robocar.jpg";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
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
    title: "Electronics Geek",
    icon: mobile,
  },
  {
    title: "Digital Marketing",
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
    company_name: "PROJECTS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "DECEMBER 2022 - Present",
    points: [
      "A Med-Tech solution : One stop solution for all Healthcare related services.",
      "Customisable Tshirt Store using Three JS : NETFIT",
      "My Portfolio using React JS and Three JS",
      "Participated in over 10+ Hackathons",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "APP DEVELOPMENT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "MAY 2023 - Present",
    points: [
      "Developing and maintaining applications using React Native and other related technologies.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Creating Projects using React Native and ",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FULL STACK DEVELOPMENT",
    icon: shopify,
    iconBg: "#383E56",
    date: "MAY 2018 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in over 10+ Hackathons and creating projects for the Major project.",
    ],
  },
  {
    title: "ARDUINO UNO DEVELOPER",
    company_name: "INTERNET OF THINGS (IoT)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining  applications using Arduino Uno and other related technologies.",
      "Collaborating with cross-functional electronic devices including Raspberry PI, WiFi Module, and Nano Arduino  to create high-quality projects.",
      "Implementing responsive design and ensuring compatibility.",
      "Participating in Electronics Hackathons and creating electronics projects for the Major project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Developing a Real Estate web app using technologies like React JS etc. which displays the properties available for rent and sale.",
    name: "Real Estate",
    designation: "#react JS #node JS #Tailwind CSS",
  },
  {
    testimonial:
      "Creating an ecommerce platform, that is, NETFIT but in the mobile app version which is available on both Android and IOS. ",
    name: "NETFIT 2.O",
    designation: "#react Native #expo Go",
  },
  {
    testimonial:
      "Developing  web-app using cutting edge technologies like React JS etc. which provides data & statistics for the healthcare sector. ",
    name: "Med-Tech Admin Dashboard",
    designation: "#react JS #node JS #Tailwind CSS",
  },
];

const projects = [
  {
    name: "NETFIT",
    description:
      "Web-based application that allows users to search, customize, and create their own  Tshirts from various designs and even create their own print, providing a convenient and efficient solution for the Fashion Industry.",
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
    image: carrent,
    source_code_link: "https://github.com/YashSejwal/Custom-Tshirt-store",
  },
  {
    name: "TWEEK LABS",
    description:
      "A comprehensive player dashboard platform that allows users to go through numerous statistics, details, and descriptions, and AI curated recommendations for their bowling analytics and much more !",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "nivo",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/YashSejwal/admin-dashboard",
  },
  {
    name: "HEALTHCARE UP",
    description:
      "Web application that enables users to search for best doctors, view statistics and testimonials for the best and certified doctors, and locate available beds based on their current location in nearby hospitals.",
    tags: [
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "react js",
        color: "green-text-gradient",
      },
      {
        name: "mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/YashSejwal/playerdashboard",
  },
  {
    name: "1-BIT A.L.U.",
    description:
      "A 1-Bit Arithmetic Logic Unit (ALU) : created using 7408 (Quad 2-input AND Gate),7486 (Quad 2-input XOR Gate) and 7432 (Quad 2-input OR Gate). It is a digital circuit that performs arithmetic and logical operations. ",
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
    image: bitalu,
    source_code_link: "https://www.linkedin.com/posts/yash-sejwal-93717921a_1bitalu-iot-ugcPost-7049786084825694208-0FjZ?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "ROBO CAR",
    description:
      "A Robotic car powered by Arduino Uno : controlled using another Arduino Uno and a WiFi module. The car is set to disrupt and win the Robo Races and Line Follower Competitions ( created using IR Sensors ).",
    tags: [
      {
        name: "arduino uno",
        color: "blue-text-gradient",
      },
      {
        name: "wifi module",
        color: "green-text-gradient",
      },
      {
        name: "arduino IDE",
        color: "pink-text-gradient",
      },
    ],
    image: robocar,
    source_code_link: "https://github.com/YashSejwal/Custom-Tshirt-store",
  },
  {
    name: "NETFIT 2.0 : App Version",
    description:
      "React Native application that allows users to search, customize, and create their own  Tshirts from various designs and even create their own print, providing a convenient and efficient solution for the Fashion Industry.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo go",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: netfitApp,
    source_code_link: "https://github.com/YashSejwal/Custom-Tshirt-store",
  },
];

export { services, technologies, experiences, testimonials, projects };
