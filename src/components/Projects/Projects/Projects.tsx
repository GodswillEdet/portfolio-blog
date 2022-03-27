import styles from "./Projects.module.scss";
import Project, { ProjectItemProps } from "../ProjectItem/ProjectItem";
import { GetStaticProps } from "next";

interface ProjectsProps {
  projectList: ProjectItemProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projectList }) => {
  return (
    <section aria-labelledby="projects">
      <h2 id="projects" className="title">
        My projects
      </h2>
      <div className={styles.list}>
        {projectList.map((projectData, i) => (
          <Project key={i} {...projectData} />
        ))}
        {/* <pre>{JSON.stringify(projectList, null, 2)}</pre> */}
      </div>
    </section>
  );
};

export default Projects;
