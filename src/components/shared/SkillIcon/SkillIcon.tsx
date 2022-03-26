import { Skill } from "../../../common/types";
import { Icon } from "../Icon";
import styles from "./SkillIcon.module.scss";

interface SkillIconProps {
  skill: Skill;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  return (
    <figure className={styles.figure}>
      <Icon name={skill} />
      <figcaption>{skill}</figcaption>
    </figure>
  );
};

export default SkillIcon;
