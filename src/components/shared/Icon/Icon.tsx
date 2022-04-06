import { BasicIcon, BasicIconProps } from "./BasicIcon";
import { Icon as IconType, Skill, Social } from "common/types";
import styles from "./Icon.module.scss";

interface StaticIcon extends BasicIconProps {
  type: "static";
  iconName: IconType;
}

interface SkillIcon extends BasicIconProps {
  type: "skill";
  iconName: Skill;
}

interface SocialIcon extends BasicIconProps {
  type: "social";
  iconName: Social;
}

type IconProps = StaticIcon | SkillIcon | SocialIcon;

export const Icon: React.FC<IconProps> = ({ type, iconName, size, ...props }) => {
  const StaticIcon = <BasicIcon iconName={iconName} size={size} {...props} />;

  const SocialIcon = (
    <BasicIcon iconName={iconName} size={size} className={styles.socialIcon} {...props} />
  );

  const SkillIcon = (
    <figure className={styles.skillIcon}>
      <BasicIcon iconName={iconName} size={size} {...props} />
      <figcaption>{iconName}</figcaption>
    </figure>
  );

  return <>{type === "static" ? StaticIcon : type === "social" ? SocialIcon : SkillIcon}</>;
};
