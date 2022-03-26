export const skillList = [
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

export const socialList = ["Github", "Twitter", "LinkedIn"] as const;

export const allIconList = [...skillList, ...socialList];

export type Skill = typeof skillList[number];
export type Social = typeof socialList[number];
export type Icon = typeof allIconList[number];
