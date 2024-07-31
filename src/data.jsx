import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCss3Alt,
} from "react-icons/fa";
import Omnifood from "./images/Omnifood.png";
import Comfy from "./images/Comfy.png";
import Tyre from "./images/Tyre.png";
import Socialmedia from "./images/Socialmedia.png";
import Food from "./images/Food.png";
import Simongame from "./images/Simongame.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNodeJs className="h-16 w-16 text-sky-500" />,
    text: "Extensive experience in building scalable server-side web applications, asynchronous programming, and optimizing performance for high-traffic environments.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <FaCss3Alt className="h-16 w-16 text-sky-500" />,
    text: "Utilizing Tailwind's utility-first approach to design and rapidly develop custom CSS styles with efficiency and precision.",
  },
  {
    id: nanoid(),
    title: "BootStrap",
    icon: <FaBootstrap className="h-16 w-16 text-sky-500" />,
    text: "Leveraging Bootstrap's grid system, components, and utilities to create visually appealing and user-friendly interfaces efficiently.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Omnifood,
    url: "https://saijucodes.github.io/Omnifood/",
    github: "https://github.com/Saijucodes/Omnifood",
    title: "Omnifood",
    text: "Website that provides you with personalized meal plans, nutritious recipes, and expert tips to help you make healthier food choices.",
  },
  {
    id: nanoid(),
    img: Comfy,
    url: "https://main--comfystore-s.netlify.app/",
    github: "https://github.com/Saijucodes/Comfy-Store",
    title: "Comfy-Store",
    text: "Website that offers a curated selection of modern and classic pieces of furniture. With helpful filters and personalized recommendations.",
  },
  {
    id: nanoid(),
    img: Tyre,
    url: "https://babytyres.github.io/Buisness-site/",
    github: "https://github.com/Babytyres/Buisness-site",
    title: "Baby Tyre Retraders",
    text: "Website that helps to take orders of tyres that can be retrader and sold again to the customers with the same life period of a new one.",
  },
  {
    id: nanoid(),
    img: Food,
    url: "https://food-delivery-frontend-3uxs.onrender.com/",
    github: "https://github.com/Saijucodes/Food_Delivery",
    title: "Food Delivery Website",
    text: "Website that helps to take orders of tyres that can be retrader and sold again to the customers with the same life period of a new one.",
  },
  {
    id: nanoid(),
    img: Simongame,
    url: "https://saijucodes.github.io/Simongame/",
    github: "https://github.com/Saijucodes/Simongame",
    title: "Simongame",
    text: "Website that helps to take orders of tyres that can be retrader and sold again to the customers with the same life period of a new one.",
  },
  {
    id: nanoid(),
    img: Socialmedia,
    url: "https://saijucodes.github.io/SocialMedia/",
    github: "https://github.com/Saijucodes/SocialMedia",
    title: "SocialMedia-Blog",
    text: "Website that helps to take orders of tyres that can be retrader and sold again to the customers with the same life period of a new one.",
  },
];
