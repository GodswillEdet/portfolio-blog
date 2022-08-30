const skillList = [
  "Angular",
  "Azure",
  "C++",
  "Express",
  "FastAPI",
  "JavaScript",
  "Jest",
  "React",
  "Heroku",
  "HTML",
  "CSS",
  "SASS",
  "Python",
  "Pillow",
  "Matplotlib",
  "MongoDB",
  "MySQL",
  "NestJS",
  "Nextjs",
  "Nodejs",
  "Git",
  "Github",
  "TailwindCSS",
  "Typescript",
  "VsCode",
] as const;

const socialList = ["Github", "Twitter", "LinkedIn", "Instagram"] as const;

const allIconList = [...skillList, ...socialList, "phone", "email", "repo", "hyperlink"] as const;

export type Skill = typeof skillList[number];
export type Social = typeof socialList[number];
export type Icon = typeof allIconList[number];

export interface ProjectInfo {
  title?: string;
  desc?: string;
  repo?: string;
  site?: string;
  img?: string;
  skills?: Skill[];
}
