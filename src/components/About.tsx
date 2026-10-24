import {
  Javascript,
  Css,
  _React,
  TypescriptIcon,
  NextjsIcon,
  TailwindIcon,
  GitIcon,
  NodejsIcon,
  Postgresql,
  DockerIcon,
  GithubActions,
  Stripe,
  OpenaiIcon,
} from "@dev.icons/react"
import { FaDatabase, FaHtml5 } from "react-icons/fa"
import {
  SiExpress,
  SiDrizzle,
  SiZod,
  SiClerk,
  SiRender,
} from "react-icons/si"
import type { ComponentType } from "react"

type Technology = {
  name: string
  icon: ComponentType<{
    size?: number
    "aria-hidden"?: boolean
  }>
}

const technologyGroups: {
  title: string
  technologies: Technology[]
}[] = [
  {
    title: "Frontend",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: Javascript },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "React", icon: _React },
      { name: "Next.js", icon: NextjsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      { name: "Node.js", icon: NodejsIcon },
      { name: "Express", icon: SiExpress },
      { name: "SQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "Drizzle ORM", icon: SiDrizzle },
      { name: "Zod", icon: SiZod },
    ],
  },
  {
    title: "Tools & Services",
    technologies: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub Actions", icon: GithubActions },
      { name: "Docker", icon: DockerIcon },
      { name: "Render", icon: SiRender },
      { name: "Clerk", icon: SiClerk },
      { name: "Stripe", icon: Stripe },
      { name: "OpenAI API", icon: OpenaiIcon },
    ],
  },
]

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto flex w-11/12 flex-col gap-8 border-t border-neutral-400 py-10 dark:border-neutral-700 md:flex-row md:items-center md:gap-12 lg:gap-20"
    >
      <div className="md:w-2/6">
        <h2
          id="about-heading"
          className="font-bebas text-4xl uppercase tracking-wide md:text-5xl lg:text-6xl"
        >
          About Me
        </h2>
      </div>

      <div className="md:w-4/6">
        <p className="font-manrope text-lg leading-7 text-neutral-900 dark:text-zinc-100 md:leading-9">
          I’m a full-stack developer building accessible interfaces, backend APIs,
          and database-driven web applications.
        </p>

        <p className="mt-4 max-w-3xl font-manrope text-sm leading-5 text-neutral-600 dark:text-neutral-400 md:text-base md:leading-6">
          I work with React, Next.js, TypeScript, Node.js, and PostgreSQL. I enjoy
          turning practical problems into working products and understanding the
          whole process, from the interface to the database and deployment.
          Building StackWing gave me hands-on experience with authentication,
          subscription billing, AI integrations, and automated testing. Outside
          of coding, I enjoy football, photography, and gaming.
        </p>

        <div className="mt-8">
          <h3 className="mb-6 font-manrope text-sm font-semibold uppercase tracking-wide">
            Technologies I work with
          </h3>

          <div className="space-y-5">
            {technologyGroups.map(({ title, technologies }) => (
              <div key={title}>
                <h4 className="mb-3 font-manrope text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {title}
                </h4>

                <ul
                  className="flex flex-wrap gap-3"
                  aria-label={`${title} technologies`}
                >
                  {technologies.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 rounded-full bg-[#DDE2D8] px-3 py-1.5 text-xs dark:bg-neutral-800"
                    >
                      <Icon size={14} aria-hidden={true} />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}