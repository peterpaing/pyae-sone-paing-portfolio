import {
  Javascript,
  _React,
  TypescriptIcon,
  NextjsIcon,
  TailwindIcon,
  NodejsIcon,
  Postgresql,
  Stripe,
  OpenaiIcon,
  DockerIcon,
  GithubActions,
} from "@dev.icons/react";
import { SiExpress,SiDrizzle,SiZod,SiClerk,SiRender } from "react-icons/si";
import type { ComponentType } from "react"
import CurrencyExchangeImage from "./../assets/projects/money-exchange.png"
import KanbanTaskManagementImage from "./../assets/projects/KanbanTaskManagement.png"
import AudiophileStoreImage from "./../assets/projects/audiophile.png"
import ArchStudioImage from "./../assets/projects/archStudio.png"
import StackWingImage from "./../assets/projects/stackwing.png"
import FrontEnd from "./../assets/certificates/Front-end.png"
import BackendPath from "./../assets/certificates/Back-end.png"
import Nextjs from "./../assets/certificates/Nextjs.png"
import TypeScript from "./../assets/certificates/TypeScript.png"
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
    id: 5,
    image: StackWingImage,
    title: "StackWing",
    description:
      "A full-stack developer job-search app I built to simplify my own job search. It brings listings from multiple job boards into one place, with search filters, saved jobs, application tracking, and profile-based matching. Includes AI-assisted resume-to-profile extraction, job-specific AI chat, authentication, and subscription billing.",
    year: 2026,
    role: "Full-stack Developer",
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
        name: "Node.js",
        icon: NodejsIcon,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
      {
        name: "Drizzle ORM",
        icon: SiDrizzle,
      },
      {
        name: "Zod",
         icon: SiZod,
      },
      {
        name: "Clerk",
        icon: SiClerk,
      },
      {
        name: "Stripe",
        icon: Stripe,
      },
      {
        name: "OpenAI API",
        icon: OpenaiIcon,
      },
      {
        name: "Docker",
        icon: DockerIcon,
      },
      {
        name: "GitHub Actions",
        icon: GithubActions,
      },
      {
        name: "Render",
        icon: SiRender,
      },
    ],
    link: {
      demo: "https://stackwingjobs.com",
      github: "https://github.com/peterpaing/job-search-app",
    },
  },
  {
    id: 1,
    image: AudiophileStoreImage,
    title: "Audiophile Store",
    description:
      "A responsive audio e-commerce frontend implemented from a Frontend Mentor design. Includes product pages, a shopping cart persisted in Local Storage, and a checkout interface with form validation. I focused on reusable components, cart state management, and adapting the supplied layouts across screen sizes.",
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
    id: 3,
    image: CurrencyExchangeImage,
    title: "Currency Exchange App",
    description:
      "A currency conversion dashboard using exchange-rate data from the Frankfurter API. Users can search currencies, convert amounts, save currency pairs, and revisit conversion history stored in Local Storage. I focused on API integration, interactive UI state, and a responsive dashboard layout.",
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
      {
        name: "Local Storage",
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
      "A responsive task-management frontend implemented from a Frontend Mentor design. Users can manage boards, tasks, and subtasks, switch themes, and retain their workspace through Local Storage. I focused on state management, reusable components, and keeping related task data consistent as users make changes.",
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
  {
    id: 2,
    image: ArchStudioImage,
    title: "Arch Studio",
    description:
      "A multi-page architecture portfolio implemented from a Frontend Mentor design. Includes project galleries, page navigation, a validated contact form, and an interactive location map. I focused on translating the supplied designs into responsive layouts and reusable UI components.",
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
];

export const certificates = [
  {
    title: "Backend Developer Path",
    image: BackendPath,
    month: "October", 
    year: "2026", // Actual issue year
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXCxKoyt1ieVCiG35siqDyRDKsp",
  },
  {
    title: "Front-End Developer Career Path",
    image: FrontEnd,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfrVKc8WhjECs6WFr",
  },
  {
    title: "Learn Next.js",
    image: Nextjs,
    month: "August",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXADevcWYwtycSjPFt6T7YzfkqQ",
  },
  {
    title: "Learn TypeScript",
    image: TypeScript,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qyLkGYHVUewP1z9Gv",
  },
  {
    title: "Intro to AI Engineering",
    image: AiEngineering,
    month: "June",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qy8bXM86wU38DwLrY",
  },
]