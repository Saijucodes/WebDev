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
import Natours from "./images/Natours.png";

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
    img: Natours,
    url: "https://natours-nxdw.onrender.com/",
    github: "https://github.com/Saijucodes/Natours",
    title: "Natours",
    text: "A tour booking website that allows users to browse and book tours online, featuring secure login and signup options for personalized accounts. It includes Stripe integration for seamless, secure payment processing, ensuring a smooth booking experience.",
  },
  {
    id: nanoid(),
    img: Food,
    url: "https://food-delivery-frontend-3uxs.onrender.com/",
    github: "https://github.com/Saijucodes/Food_Delivery",
    title: "Food Delivery Website",
    text: "A food delivery website that enables users to browse menus, add items to a cart, and place orders, with seamless Stripe integration for payments. The app includes an admin panel for managing orders and a backend database for storing restaurant and user information.",
  },

  {
    id: nanoid(),
    img: Comfy,
    url: "https://main--comfystore-s.netlify.app/",
    github: "https://github.com/Saijucodes/Comfy-Store",
    title: "Comfy-Store",
    text: "A furniture website allows users to browse products, add items to a cart, and securely checkout with login and registration options. It offers personalized accounts for managing orders and a smooth shopping experience.",
  },
  {
    id: nanoid(),
    img: Omnifood,
    url: "https://saijucodes.github.io/Omnifood/",
    github: "https://github.com/Saijucodes/Omnifood",
    title: "Omnifood",
    text: "A website offering personalized meal plans, nutritious recipes, and expert tips helps users make informed, healthier food choices. It tailors content based on individual preferences and dietary needs to support a balanced lifestyle.",
  },
  {
    id: nanoid(),
    img: Tyre,
    url: "https://babytyres.github.io/Buisness-site/",
    github: "https://github.com/Babytyres/Buisness-site",
    title: "Baby Tyre Retraders",
    text: "A tire retrader website provides essential information about services and allows users to place orders for retreading. As a static website, it delivers a simple, reliable experience without dynamic content or real-time updates.",
  },

  {
    id: nanoid(),
    img: Simongame,
    url: "https://saijucodes.github.io/Simongame/",
    github: "https://github.com/Saijucodes/Simongame",
    title: "Simongame",
    text: "A Simon game website offers an interactive, memory-based game where players repeat an increasingly complex sequence of lights and sounds. It provides a fun and challenging experience, with simple controls and colorful visuals to engage users.",
  },
  {
    id: nanoid(),
    img: Socialmedia,
    url: "https://saijucodes.github.io/SocialMedia/",
    github: "https://github.com/Saijucodes/SocialMedia",
    title: "SocialMedia-Blog",
    text: "A social media platform with backend support allows users to share posts, as well as edit or delete them for complete control over their content. It provides a seamless experience for managing personal updates",
  },
];
