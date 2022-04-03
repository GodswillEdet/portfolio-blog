import { getIconImagePath } from "common/utilities";
import Image from "next/image";
import { Icon as IconType } from "common/types";

interface IconProps {
  name: IconType;
  size: number;
}

export const Icon: React.FC<IconProps> = ({ name, size }) => {
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
