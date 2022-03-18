import styles from "./Projects.module.scss";
import Project from "../ProjectItem/ProjectItem";

const Projects: React.FC = () => {
  return (
    <section aria-labelledby="projects">
      <h2 id="projects" className="title">
        My projects
      </h2>
      <div className={styles.list}>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
