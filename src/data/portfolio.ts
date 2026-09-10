import { Javascript,_React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import type { ComponentType } from "react"
import CurrencyExchangeImage from "./../assets/projects/money-exchange.png"
import KanbanTaskManagementImage from "./../assets/projects/KanbanTaskManagement.png"
import AudiophileStoreImage from "./../assets/projects/audiophile.png"
import ArchStudioImage from "./../assets/projects/archStudio.png"
import FrontEnd from "./../assets/certificates/Front-end.png"
import JavaScript from "./../assets/certificates/JavaScript.png"
import React from "./../assets/certificates/React.png"
import Nextjs from "./../assets/certificates/Nextjs.png"
import Tailwind from "./../assets/certificates/tailwind.png"
import TypeScript from "./../assets/certificates/TypeScript.png"
import Responsive from "./../assets/certificates/Responsive.png"
import Git from "./../assets/certificates/Git.png"
import Vite from "./../assets/certificates/Vite.png"
import AiEngineering from "./../assets/certificates/Ai-engineering.png"

type Technology = {
  name: string;
  icon?: ComponentType<{ size?: number }>
}

type Link ={
    demo : string,
    github : string,
}

export type Project = {
  id: number;
  image:string
  title: string;
  description: string;
  year: number;
  role: string;
  technologies: Technology[]
  link : Link
}

export const projects: Project[] = [
  {
    id: 1,
    image: AudiophileStoreImage,
    title: "Audiophile Store",
    description:
      "A modern e-commerce storefront for a premium audio brand, built to showcase clean architecture and exceptional UX. Features responsive Figma-to-code translation, dynamic product routing, persistent cart state via Local Storage, and an accessible, friction-free checkout flow.",
    year: 2026,
    role: "Front-end Developer",
    technologies: [
      {
        name: "React",
        icon: _React,
      },
      {
        name: "TypeScript",
        icon: TypescriptIcon,
      },
      {
        name: "Next.js",
        icon: NextjsIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "Local Storage",
      },
    ],
    link: {
      demo: "https://audiophile-store-eight.vercel.app",
      github: "https://github.com/peterpaing/audiophile-store",
    },
  },
  {
  id: 2,
  image: ArchStudioImage,
  title: "Arch Studio",
  description:
    "A multi-page portfolio website for a modern architecture firm, built to showcase high-fidelity design translation and seamless user navigation. Featuring responsive image galleries, dynamic page routing, a strictly validated contact form, and an interactive location map, this project demonstrates a strong command of modern UI layouts and responsive web design.",
  year: 2026,
  role: "Front-end Developer",
  technologies: [
    {
      name: "React",
      icon: _React,
    },
    {
      name: "TypeScript",
      icon: TypescriptIcon,
    },
    {
      name: "Next.js",
      icon: NextjsIcon,
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
    },
  ],
  link: {
    demo: "https://arch-studio-beta-lovat.vercel.app/",
    github: "https://github.com/peterpaing/arch-studio",
  },
},
  {
    id: 3,
    image: CurrencyExchangeImage,
    title: "Currency Exchange App",
    description:
      "An interactive currency dashboard that transforms real-time exchange-rate data into instant conversions and clear financial comparisons. Built for a tailored user experience, it features quick currency search, custom saved pairs, and a persistent conversion history powered by Local Storage.",
    year: 2026,
    role: "Front-end Developer",
    technologies: [
      {
        name: "JavaScript",
        icon: Javascript,
      },
      {
        name: "React",
        icon: _React,
      },
      {
        name: "TypeScript",
        icon: TypescriptIcon,
      },
      {
        name: "Next.js",
        icon: NextjsIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "Frankfurter API",
      },
    ],
    link: {
      demo: "https://currency-exchange-dashboard-puce.vercel.app/",
      github: "https://github.com/peterpaing/currency-exchange-dashboard",
    },
  },
  {
    id: 4,
    image: KanbanTaskManagementImage,
    title: "Kanban Task Management App",
    description:
      "A fully responsive Kanban productivity app designed to streamline project planning and task management. Users can create customizable boards, track subtasks, toggle themes, and effortlessly manage their workflows, all backed by seamless Local Storage persistence for a reliable, instantly available workspace.",
    year: 2026,
    role: "Front-end Developer",
    technologies: [
      {
        name: "React",
        icon: _React,
      },
      {
        name: "TypeScript",
        icon: TypescriptIcon,
      },
      {
        name: "Next.js",
        icon: NextjsIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "Local Storage",
      },
    ],
    link: {
      demo: "https://kanban-task-management-nine-rho.vercel.app/",
      github: "https://github.com/peterpaing/kanban-task-management",
    },
  },
];

export const certificates = [
  {
    title: "Learn Next.js",
    image: Nextjs,
    month: "August",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXADevcWYwtycSjPFt6T7YzfkqQ"
  },
  {
    title: "Learn Tailwind CSS",
    image: Tailwind,
    month: "August",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qvw8tvN4tdyUJ664U"
  },
  {
    title: "Learn React",
    image: React,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfqFQfj4jHFyX2cEL"
  },
  {
    title: "Front-End Developer Career Path",
    image: FrontEnd,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfrVKc8WhjECs6WFr"
  },
  {
    title: "Learn TypeScript",
    image: TypeScript,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qyLkGYHVUewP1z9Gv"
  },
  {
    title: "Learn Git",
    image: Git,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXCLJ3AdyVfjZjFtayBmTuMtbVT"
  },
  {
    title: "Intro to Vite",
    image: Vite,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXAG5y5VvWg6eZM91HQSbCJHyTo"
  },
  {
    title: "Learn JavaScript",
    image: JavaScript,
    month: "June",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfuTurhb3CkkuBWG4"
  },
  {
    title: "Intro to AI Engineering",
    image: AiEngineering,
    month: "June",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qy8bXM86wU38DwLrY"
  },
  {
    title: "Responsive Web Design",
    image: Responsive,
    month: "May",
    year: "2026",
    link: "https://www.freecodecamp.org/certification/guanqt/responsive-web-design-v9"
  },
]