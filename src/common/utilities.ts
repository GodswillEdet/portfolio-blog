import { Icon } from "./types";

export function getIconImagePath(skill: Icon) {
  const prefix = "/icons/";
  let postfix: string;
  switch (skill) {
    // Special cases
    case "Pillow":
      postfix = "pillow.png";
      break;
    case "C++":
      postfix = "cpp.svg";
      break;
    default:
      postfix = `${skill.toLowerCase()}.svg`;
      break;
  }
  return prefix + postfix;
}
