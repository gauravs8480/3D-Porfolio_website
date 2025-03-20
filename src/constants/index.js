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
  ASR,
  IIT,
  codeclause,
  GHS,
chatapp,
aviation,
 
  blogapp,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Three Js",
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
    company_name: "ASR Aviation",
    icon: ASR,
    iconBg: "#383E56",
    date: "JAN 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "IIT Kanpur",
    icon: IIT,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
"Developing and maintaining a hotel booking website under the guidance of an IIT Kanpur professor, using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      "Collaborating with cross-functional teams including designers, and other developers to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Code clause",
    icon: codeclause,
    iconBg: "#383E56",
    date: "July 2024 - July 2024",
    points: [
"Developing and maintaining web applications using React.js and other related technologies.",
      "Building and deploying full-stack projects using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",    ],
  },
  {
    title: "Operation Intern",
    company_name: "Good Host Spaces",
    icon: GHS,
    iconBg: "#E6DEDD",
    date: "September 2022 - Oct 2022",
    points: [
"Managed and organized student data for hostel operations, ensuring accuracy and accessibility.",
      "Worked in the finance department, assisting with budgeting, expense tracking, and financial analysis.",
      "Handled the admin dashboard for hostel operations, managing student information and streamlining processes.",
      "Collaborated with cross-functional teams to support operational efficiency and improve workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Gaurav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Gaurav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Gaurav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat app",
    description:
      "A real-time messaging application built with MERN stack, Socket.io, and TailwindCSS. Features secure authentication, instant messaging, online user tracking, and modern UI design. 🚀",
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
        name: "daisyUi",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/gauravs8480/REACT-CHAT-APP",
  },
  {
    name: "Blog App",
    description:
      "A responsive web app with React and Tailwind for the front end, Express and MongoDB for the backend. Features include authentication (Clerk), REST APIs, and efficient data handling with React Query. Includes blog creation, comments, and more.",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: blogapp,
    source_code_link: "https://github.com/gauravs8480/BLOG_APP",
  },
  {
    name: "Aviation Booking Website",
    description:
      "A responsive web app with React and Tailwind for the front end, Express and MongoDB for the backend,a comprehensive travel booking platform that allows users to book  private jet choopers and offers Private Avialtion Luxary Experience",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: aviation,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
