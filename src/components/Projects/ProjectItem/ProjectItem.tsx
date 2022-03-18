import styles from "./ProjectItem.module.scss";
import Image from "next/image";

interface ProjectItemProps {
  title?: string;
  desc?: string;
  github?: string;
  site?: string;
  img?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  img = "laptop1.jpg",
  title = "Project heading",
  desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime veritatis",
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
        <a href={github}>Github icon</a>
        {site && <a href={site}>Hyperlink icon</a>}
      </div>
    </div>
  );
};

export default ProjectItem;
