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
    weath1,
    weath3,
    weath2,
    ja1,
    ja2,
    ja3,
    ja4,
    ja6,
    ja5,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
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
      title: "Software Developer",
      icon: creator,
    },
    {
      title: "Student",
      icon: backend,
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
      link:null,
      type:"FullStack",
      slides: [
        stuco1, stuco2, stuco3
      ],
      overview: "A comprehensive study tool platform offering calculators, note-taking, and conversion services",
      description:
        "StuCo is a personal project designed as a comprehensive study platform. It features a study space with tools such as timers, to-do lists, calculators, note-taking services, and conversion utilities in the form of draggable components. Developed using React for the frontend and Express.js for the backend, it is connected to a MySQL database. This project marked my entry into full-stack development and allowed me to apply fundamental concepts from both frontend and database coursework.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "Full-Stack Development",
          color: "orange-text-gradient",
        },
        {
          name: "Study Tools",
          color: "yellow-text-gradient",
        },
      ],
      image: stuco1,
      source_code_link: "https://github.com/JayiaReid/StuCo-App",
    },
    {
      id:6,
      name: "FinCo: Expenses",
      type:"FullStack",
      link: "https://finco-three.vercel.app/",
      slides: [
        f1, f2, f3, f4, f5, f6
      ],
      overview: "Finco is a comprehensive financial management application designed to help users create budgets and track their expenses efficiently for seamless tracking and planning.",
      description:
        "Finco offers a range of key features designed to enhance financial management and planning. It was developed using the NextJs framework with neon postgresql database and drizzle ORM for database CRUD operations. The seamless UI was developed using mostly tailwindCSS and some ShadCN UI components.",
      tags: [
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "orange-text-gradient",
        },
        {
          name: "Full-Stack Development",
          color: "orange-text-gradient",
        },
        {
          name: "Expense-Tracking",
          color: "yellow-text-gradient",
        },
        {
          name: "Clerk Auth",
          color: "red-text-gradient",
        },
      ],
      image: f1,
      source_code_link: "https://github.com/JayiaReid/finco",
    },
    {
      id:2,
      name: "Targaryen: Team Black",
      link:"https://targaryens.vercel.app/reviews",
      type:"FullStack",
      slides: [
        tb1, tb2, tb3
      ],
      overview: "A website that allows House of the Dragon fans to listen and leave reviews on the soundtrack",
      description:
        "This website is built using the react framework with an implemented backend using expressJs. The website incorporates CSS for the UI and implements react fundamentals to present an encaptivating UI. Users are able to listen to the songs of the soundtrack associated with Team Black as well as leave reviews and view user reviews saved within the database.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tb1,
      source_code_link: "https://github.com/JayiaReid/Targaryens",
    },
    {
      id:3,
      name: "Stuco Management",
      link: null,
      type:"FullStack",
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
          color: "yellow-text-gradient",
        },
        {
          name: "KindeAuth",
          color: "red-text-gradient",
        },
        {
          name: "ShadCN UI",
          color: "orange-text-gradient",
        },
      ],
      image: man1,
      source_code_link: "https://github.com/JayiaReid/stuco-admin",
    },
    {
      id:4,
      name: "Weather App",
      link: null,
      type:"Frontend",
      slides: [
        weath1, weath3, weath2
      ],
      overview: "The Weather app developed solely in react utilizing an API",
      description:
        "This app is built using the react framework with css styling. The app is implemented using a weather API and allows users to search for a city and see specific weather details. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "yellow-text-gradient",
        },
      ],
      image: weath1,
      source_code_link: "https://github.com/JayiaReid/weather",
    },
    {
      id:5,
      name: "Java Airlines",
      link: null,
      type:"Java",
      slides: [
        ja1, ja2, ja3,ja4, ja5, ja6
      ],
      overview: "A flight booking simulator where you're able to login, skim through available flights, book a flight, view current flight tickets, cancel ticket bookings if desired.",
      description:
        "This app is built using java object-oriented principle such as encapsulation, polymorphism, etc. The java.awt package was used for UI, bringing our application to life. Multiple class systems and modularization was used as well as control systems and other fundamental programming principles to present a well organized system. As for storing information, java file functions were implemented to store information into respective text files",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "OOP",
          color: "blue-text-gradient",
        },
        {
          name: "Files",
          color: "yellow-text-gradient",
        },
      ],
      image: ja2,
      source_code_link: "https://github.com/JayiaReid/JavaAirlines",
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