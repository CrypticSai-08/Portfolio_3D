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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++, JAVA",
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
      name: "Java",
      icon: git,
    },
    {
      name: "Firebase",
      icon: figma,
    },
    {
      name: "C++",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "WEB DEVELOPMENT",
      company_name: "Codecademy",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2021 - May 2021",
      points: [ "FLOCK was a long event conducted that included guided mentor sessions, guest lectures and project building from scratch.",
       "This certification acts as an external validation of my skills.",
       "It demonstrates that i have practical proficiency in various programming languages, frameworks, and tools required for modern web development.",
      
      ],
    },
    {
      title: "LEADERSHIP SKILLS",
      company_name: "IIM Ahmedabad",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2022 - august 2022",
      points: [ "Understand leadership's importance in complex environments.",
      "Leadership Influence for individual and organizational goal achievement.",
      "Self-discovery journey and inner stability development.",
      "Grasp leadership concepts: self-management, power, negotiations, styles, and more.",
      ],
    },
    {
      title: "IOT",
      company_name: "SkillUP By Simplilearn",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 -  Mar 2023 ",
      points: [
        "My IoT Certification from SkillUp by Simplilearn attests to my proficiency with IoT technologies and practical uses.", 
        "My ability to participate in cutting-edge projects and activities in the IoT space is made possible by the certification, which reflects my dedication to professional development and innovation.",
      ],
    },
    {
      title: "International Pharmaceutical Quality And Compilance",
      company_name: "Pharmagenie",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "This Certification granted by Pharmagenie makes me glad to possess it.", 
        "I have developed skills in assuring the highest level of product quality, safety, and compliance with legal requirements thanks to this programme.",
        "By demonstrating my dedication to sustaining the highest quality and compliance standards within the pharmaceutical industry my certification from Pharmagenie strengthens my capacity to contribute successfully to pharmaceutical projects and teams.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He gave his personal time to help the flipkart grid 4.0 team pass the first round and was a really sincere person.",
      name: "Jaya Pandey",
      designation: "Leader",
      company: "Flipkart Grid 4.0",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "This individual deserves praise from the entire school for his commitment and perseverance in helping his school win the gold medal in the national table tennis championship.",
      name: "Rohit Raj",
      designation: "Captain",
      company: "Sri Chaitanya",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He was a great member of our house design team and helped us win a contest several time during his tenure.",
      name: "Aarya Kinjal",
      designation: "House Captain",
      company: "Knights",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather Forecast",
      description:
        "The Weather Forecast Project uses an Application Programming Interface (API) to give consumers access to the most recent weather data. The project can obtain trustworthy real-time weather data and show it user-friendly using an API. ",
      tags: [
        {
          name: "html & css",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "weather API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/yoo-yoo1614/weather-app",
    },
    {
      name: "Golds Gym",
      description:
        "The functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more, Golds Gym is the best React Fitness App",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "material UI",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/yoo-yoo1614/gym_site",
    },
    {
      name: "Threads Clone",
      description:
        "Developing a thread clone app demands meticulous planning. Users engage in organized discussions with features like threading, replies, and moderation. Continuous improvement, user feedback, and strategic marketing drive growth, fostering a platform that elevates online conversations and community engagement.",
      tags: [
        {
          name: "Nextjs 13",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/yoo-yoo1614/threads_app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
