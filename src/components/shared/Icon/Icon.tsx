import { getIconImagePath } from "../../../common/utilities";
import Image from "next/image";
import styles from "./Icon.module.scss";
import { Icon } from "../../../common/types";

interface IconProps {
  name: Icon;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return (
    <Image
      width={30}
      height={30}
      layout="fixed"
      src={getIconImagePath(name)}
      alt={`${name} icon`}
    />
  );
};

export default Icon;
