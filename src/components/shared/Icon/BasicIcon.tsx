import { Icon } from "common/types";
import { getIconImagePath } from "common/utilities";
import Image from "next/image";

interface BasicIconProps {
  iconName: Icon;
  size: number;
  className?: string;
}

export const BasicIcon: React.FC<BasicIconProps> = ({ iconName, size, className = "" }) => {
  return (
    <Image
      width={size}
      height={size}
      layout="fixed"
      src={getIconImagePath(iconName)}
      alt={`${iconName} icon`}
      priority={true}
      className={className}
    />
  );
};
