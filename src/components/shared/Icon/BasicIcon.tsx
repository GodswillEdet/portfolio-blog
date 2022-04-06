import { Icon } from "common/types";
import { getIconImagePath } from "common/utilities";
import Image, { ImageProps } from "next/image";

export interface BasicIconProps extends Omit<ImageProps, "src"> {
  iconName: Icon;
  size: number;
}

export const BasicIcon: React.FC<BasicIconProps> = ({ iconName, size, ...props }) => {
  return (
    <Image
      width={size}
      height={size}
      layout="fixed"
      src={getIconImagePath(iconName)}
      alt={`${iconName} icon`}
      priority={true}
      {...props}
    />
  );
};
