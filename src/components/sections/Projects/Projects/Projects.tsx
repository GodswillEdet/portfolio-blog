import styles from "./Projects.module.scss";
import { WatermarkHeader } from "components/shared";
import { ProjectInfo } from "common/types";
import { ProjectItem } from "../ProjectItem";
import { Fade } from "react-awesome-reveal";

interface ProjectsProps {
  projectList: ProjectInfo[];
}

export const Projects: React.FC<ProjectsProps> = ({ projectList }) => {
  return (
    <section aria-labelledby="projects">
      <Fade direction="up" triggerOnce>
        <WatermarkHeader text="Projects">
          <h2 id="projects">Projects</h2>
        </WatermarkHeader>
        <div className={styles.list}>
          {projectList.map((projectData, i) => (
            <ProjectItem key={i} {...projectData} />
          ))}
        </div>
      </Fade>
    </section>
  );
};
