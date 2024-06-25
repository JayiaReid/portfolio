import { CloudDrizzle, Code, CpuIcon, Database, NotebookText } from "lucide-react";
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
    closeIcon,
    github,
    linkedIn,
    instagram,
    x,
    stuco1,
    stuco3,
    stuco2,
    tb1,
    tb2,
    tb3,
    man1,
    man2,
    man3,
    man4,
    man5,
    man6,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "overview",
      title: "Overview",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Programmer",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
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
      name: "Java",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next Js",
      icon: NotebookText,
    },
    {
      name: "Python",
      icon: Code,
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
      name: "mySQL",
      icon: Database,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "C",
      icon: CpuIcon,
    },
    {
      name: "Drizzle ORM",
      icon: CloudDrizzle,
    },
    {
      name: "Docker",
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
      id:1,
      name: "StuCo",
      slides: [
        stuco1, stuco2, stuco3
      ],
      overview: "A comprehensive study tool platform offering calculators, note-taking, and conversion services",
      description:
        "StuCo is a personal project designed as a comprehensive study platform. It features a study space with tools such as calculators, note-taking services, and conversion utilities in the form of draggable components. Developed using React for the frontend and Express.js for the backend, it is connected to a MySQL database. This project marked my entry into full-stack development and allowed me to apply concepts from both frontend and database coursework.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Full-Stack Development",
          color: "blue-text-gradient",
        },
        {
          name: "Study Tools",
          color: "green-text-gradient",
        },
        {
          name: "Personal Project",
          color: "pink-text-gradient",
        },
      ],
      image: stuco1,
      source_code_link: "https://github.com/JayiaReid/StuCo-App",
    },
    {
      id:2,
      name: "Targaryen: Team Black",
      slides: [
        tb1, tb2, tb3
      ],
      overview: "A website that allows House of the Dragon fans to listen and leave reviews on the soundtrack",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tb1,
      source_code_link: "https://github.com/JayiaReid/Targaryens",
    },
    {
      id:3,
      name: "Stuco Management",
      overview: "stuco managemnt is an admin-based tool under the stuco brand that allows admin to manage students, schools, attendance, etc. based on their role",
      slides: [
        man1, man2, man3, man4, man5, man6
      ],
      description:
        "StuCo Management is an extension of the StuCo project. It enables administrators to manage students, schools, and other admins, providing various services including attendance monitoring. Developed using Next.js and Tailwind CSS, this project allowed me to enhance my skills in these technologies and learn about database management with Drizzle ORM.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Drizzle ORM",
          color: "pink-text-gradient",
        },
        {
          name: "Administrative Tools",
          color: "blue-text-gradient",
        },
        {
          name: "KindeAuth",
          color: "green-text-gradient",
        },
        {
          name: "ShadCN UI",
          color: "pink-text-gradient",
        },
      ],
      image: man1,
      source_code_link: "https://github.com/JayiaReid/stuco-admin",
    },
  ];

  const footerIcons = [
    {
      title: "close laptop",
      icon: closeIcon,
      link: 'close'
    },
    {
      title: "LinkedIn",
      icon: linkedIn,
      link: 'www.linkedin.com/in/jayia-smith-reid-31a270314'
    },
    {
      title: "Instagram",
      icon: instagram,
      link: 'https://www.instagram.com/t.jcjr/'
    },
    {
      title: "X",
      icon: x,
      link : 'https://x.com/n01607926'
    },
    {
      title: "Github",
      icon: github,
      link: 'https://github.com/JayiaReid'
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, footerIcons };