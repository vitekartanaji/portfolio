import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "ReactJs",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "NextJs",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "HTML 5",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "CSS 3",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70",
  }
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub DeskTop",
    level: "80",
  },
];

export const projects: IProject[] = [
  { 
    name: "Personal Portfolio",
    description:
      "This app shows my personal information with my technical stack.",
    image_path: "/images/portfolio.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Demo 1",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
  {
    name: "Demo 2",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
  {
    name: "Demo 3",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
  {
    name: "Demo 4",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
  {
    name: "Demo 5",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
  {
    name: "Demo 6",
    image_path: "/images/demo1.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet. Sit quasi omnis et architecto quia non consequatur officia qui numquam numquam. Et animi voluptas sed voluptates sint sit aliquid reiciendis.",
    key_techs: ["X", "X", "X X"],
  },
];