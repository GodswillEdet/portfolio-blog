import styles from "./ProjectItem.module.scss";
import Image from "next/image";
import { Skill } from "../../../common/types";
import SkillIcon from "../../shared/SkillIcon/SkillIcon";

export interface ProjectItemProps {
  title?: string;
  desc?: string;
  github?: string;
  site?: string;
  img?: string;
  skills?: Skill[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  img = "laptop1.jpg",
  title = "Project heading",
  desc = "A warehouse robot program that scans barcode and picks packages",
  skills = ["React"],
  github = "http://github.com",
  site,
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.background}
        alt="Project thumbnail"
        src={`/${img}`}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{desc}</p>
        <div className={styles.skills}>
          {skills.length > 0 &&
            skills.map((skill, i) => {
              return <SkillIcon key={i} skill={skill} />;
            })}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github icon
        </a>
        {site && <a href={site}>Hyperlink icon</a>}
      </div>
    </div>
  );
};

export default ProjectItem;
