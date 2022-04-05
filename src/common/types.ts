const skillList = [
  "Nodejs",
  "Express",
  "MongoDB",
  "JavaScript",
  "Typescript",
  "React",
  "C++",
  "HTML",
  "CSS",
  "SASS",
  "Python",
  "Pillow",
  "Matplotlib",
  "Git",
  "Github",
  "VsCode",
] as const;

const socialList = ["Github", "Twitter", "LinkedIn", "Instagram"] as const;

const allIconList = [...skillList, ...socialList, "phone", "email"] as const;

export type Skill = typeof skillList[number];
export type Social = typeof socialList[number];
export type Icon = typeof allIconList[number];

export interface ProjectInfo {
  title?: string;
  desc?: string;
  github?: string;
  site?: string;
  img?: string;
  skills?: Skill[];
}
