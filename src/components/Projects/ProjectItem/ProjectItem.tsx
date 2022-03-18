import styles from "./ProjectItem.module.scss";

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
      <img src={img} alt="Project cover background" className={styles.background} />
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
