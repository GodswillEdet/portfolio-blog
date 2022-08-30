import styles from "./Skills.module.scss";
import { WatermarkHeader, Icon } from "components/shared";
import { Fade } from "react-awesome-reveal";
import { Skill } from "common/types";

const FRONTEND_SKILLS: Skill[] = [
  "Typescript",
  "JavaScript",
  "React",
  "Nextjs",
  "Angular",
  "HTML",
  "SASS",
  "TailwindCSS",
];

const BACKEND_SKILLS: Skill[] = [
  "Nodejs",
  "Express",
  "NestJS",
  "MongoDB",
  "MySQL",
  "Python",
  "FastAPI",
  "C++",
];

const DEVELOPER_SKILLS: Skill[] = ["Azure", "Git", "Github", "Heroku", "Jest", "VsCode"];

export const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <Fade direction="up" triggerOnce>
        <WatermarkHeader text="Skills">
          <h2 id="skills">Skills</h2>
        </WatermarkHeader>
        <div className={styles.skillList}>
          <div className={styles.category}>
            <h3>Front-end</h3>
            <ul>
              {FRONTEND_SKILLS.map((skill) => (
                <li key={skill}>
                  <Icon type="skill" iconName={skill} size={40} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Back-end</h3>
            <ul>
              {BACKEND_SKILLS.map((skill) => (
                <li key={skill}>
                  <Icon type="skill" iconName={skill} size={40} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Developer tools</h3>
            <ul key="developer">
              {DEVELOPER_SKILLS.map((skill) => (
                <li key={skill}>
                  <Icon type="skill" iconName={skill} size={40} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
};
