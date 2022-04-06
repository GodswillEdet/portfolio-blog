import styles from "./Projects.module.scss";
import { WatermarkHeader } from "components/shared";
import { ProjectInfo } from "common/types";
import { ProjectItem } from "../ProjectItem";

interface ProjectsProps {
  projectList: ProjectInfo[];
}

export const Projects: React.FC<ProjectsProps> = ({ projectList }) => {
  return (
    <section aria-labelledby="projects">
      <WatermarkHeader text="Projects">
        <h2 id="projects">Projects</h2>
      </WatermarkHeader>
      <div className={styles.list}>
        {projectList.map((projectData, i) => (
          <ProjectItem key={i} {...projectData} />
        ))}
      </div>
    </section>
  );
};
