import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiReactos,
  SiDocker,
  SiExpress,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
}

export const skillData: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    description:
      "I have used JavaScript extensively for web development and enrolled in a 3 month bootcamp to deepen my knowledge.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description:
      "TypeScript helps me write safer, more maintainable code in React and Node projects. This has been used in my most recent projects and is my preferred language going forward.",
  },
  {
    name: "CSS",
    icon: SiCss3,
    description:
      "I create responsive, visually appealing UIs with CSS, including Flexbox, Grid, and animations. Tailwind CSS is my preferred framework for styling and is used in all my projects.",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    description:
      "HTML forms the backbone of all my web projects, ensuring semantic structure and accessibility to improve SEO and user experience.",
  },
  {
    name: "React",
    icon: SiReact,
    description:
      "React was also a core part of my bootcamp, and I use it to build dynamic, component-based user interfaces. I am familiar with hooks, context, and state management.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "Next.js is my go-to framework for server-side rendering, routing, and fullstack React apps. I used this to create this website and my most recent freelance project 'Gather'",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "PSQL and relational databases are used in my projects for structured data storage and complex queries. I have experience with migrations, indexing, and performance optimization. This was another core part of my bootcamp and used in my final group project 'Pix Pursuit'",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description:
      "I used MongoDB for NoSQL databases, allowing flexible data models and scalability. I have used this in my most recent freelance project 'Gather' alongside MongoDB Compass for data management and Mongoose for schema definition and validation.",
  },
  {
    name: "React Native",
    icon: SiReactos,
    description:
      "I used React Native to build a cross platform mobile app for my final group project 'Pix Pursuit'. I used this alongside Expo. Entering the mobile development space has been a great experience and I look forward to using this in future projects.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description:
      "I have used Docker to containerize applications, ensuring consistent environments across development and production. This has been used in my most recent freelance project 'Gather' to ensure a smooth deployment process.",
  },
  {
    name: "Express",
    icon: SiExpress,
    description:
      "Another key part of my bootcamp, I use Express.js to build RESTful APIs and handle server-side logic. I have used this in my final group project 'Pix Pursuit' to create a robust backend for our application.",
  },
];
