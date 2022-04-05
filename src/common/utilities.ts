import { Icon } from "./types";

export function getIconImagePath(iconName: Icon) {
  const prefix = "/icons/";
  let postfix: string;
  switch (iconName) {
    // Special cases
    case "Pillow":
      postfix = "pillow.png";
      break;
    case "C++":
      postfix = "cpp.svg";
      break;
    default:
      postfix = `${iconName.toLowerCase()}.svg`;
      break;
  }
  return prefix + postfix;
}
