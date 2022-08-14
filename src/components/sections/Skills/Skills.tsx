import styles from "./Skills.module.scss";
import { WatermarkHeader } from "components/shared";
import { Fade } from "react-awesome-reveal";

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
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>HTML</li>
              <li>SCSS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>NestJS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Python</li>
              <li>FastAPI</li>
              <li>C++</li>
            </ul>
          </div>
          <div className={styles.category}>
            <h3>Developer tools</h3>
            <ul>
              <li>Azure</li>
              <li>Git</li>
              <li>Github</li>
              <li>Linux</li>
              <li>Heroku</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </Fade>
    </section>
  );
};
