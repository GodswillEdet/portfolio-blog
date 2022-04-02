import { getIconImagePath } from "../../../common/utilities";
import Image from "next/image";
import styles from "./Icon.module.scss";
import { Icon } from "../../../common/types";

interface IconProps {
  name: Icon;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  return (
    <Image
      width={size}
      height={size}
      layout="fixed"
      src={getIconImagePath(name)}
      alt={`${name} icon`}
      priority={true}
    />
  );
};

export default Icon;
