import styles from "../styles/Projects.module.scss";

const Projects: React.FC = () => {
  return (
    <section aria-labelledby="projects">
      <h2 id="projects" className="title">
        My projects
      </h2>
      <div className={styles.list}>
        <div className={styles.card}>
          <h3>Project name</h3>
          <p>Project description</p>
        </div>
        <div className={styles.card}>
          <h3>Project name</h3>
          <p>Project description</p>
        </div>
        <div className={styles.card}>
          <h3>Project name</h3>
          <p>Project description</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
