import styles from "../styles/ProjectCard.module.scss";

interface ProjectProps {
  title?: string;
  desc?: string;
  github?: string;
  site?: string;
  img?: string;
}

const Project: React.FC<ProjectProps> = ({ title, desc, github, site, img }) => {
  return (
    <div className={styles.card}>
      <img
        src={img || "laptop1.jpg"}
        alt="Project cover background"
        className={styles.background}
      />
      <h3>{title || "Project title"}</h3>
      <p>{desc || "Description"}</p>
      <a href={github || "http://github.com"}>Github icon</a>
      {site && <a href={site}>Hyperlink icon</a>}
    </div>
  );
};

export default Project;
