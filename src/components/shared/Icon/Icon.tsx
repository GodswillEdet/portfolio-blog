import { BasicIcon } from "./BasicIcon";
import { Icon as IconType, Skill, Social } from "common/types";
import styles from "./Icon.module.scss";

interface StaticIcon {
  type: "static";
  iconName: IconType;
  size: number;
}

interface SkillIcon {
  type: "skill";
  iconName: Skill;
  size: number;
}

interface SocialIcon {
  type: "social";
  iconName: Social;
  size: number;
}

type IconProps = StaticIcon | SkillIcon | SocialIcon;

export const Icon: React.FC<IconProps> = ({ type, iconName, size }) => {
  const StaticIcon = <BasicIcon iconName={iconName} size={size} />;

  const SocialIcon = <BasicIcon iconName={iconName} size={size} className={styles.socialIcon} />;

  const SkillIcon = (
    <figure className={styles.skillIcon}>
      <BasicIcon iconName={iconName} size={size} />
      <figcaption>{iconName}</figcaption>
    </figure>
  );

  return <>{type === "static" ? StaticIcon : type === "social" ? SocialIcon : SkillIcon}</>;
};
