import styles from "./Projects.module.scss";
import Project, { ProjectItemProps } from "../ProjectItem/ProjectItem";
import { WatermarkHeader } from "components/shared/WatermarkHeader";

interface ProjectsProps {
  projectList: ProjectItemProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projectList }) => {
  return (
    <section aria-labelledby="projects">
      <WatermarkHeader text="Projects">
        <h2 id="projects">Projects</h2>
      </WatermarkHeader>
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
