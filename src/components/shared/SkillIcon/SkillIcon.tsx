import { Skill } from "common/types";
import { Icon } from "../Icon";
import styles from "./SkillIcon.module.scss";

interface SkillIconProps {
  skill: Skill;
  size: number;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ skill, size }) => {
  return (
    <figure className={styles.figure}>
      <Icon name={skill} size={size} />
      <figcaption>{skill}</figcaption>
    </figure>
  );
};
