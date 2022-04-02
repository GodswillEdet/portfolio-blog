import { WatermarkHeader } from "components/shared/WatermarkHeader";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section aria-labelledby="about" className={styles.about}>
      <WatermarkHeader text="About me">
        <h2 id="about">About me</h2>
      </WatermarkHeader>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>Hi, I am Bao Huynh, a passionate web developer and a Computer Science student</p>
          <p>
            I enjoy making web applications that look great, feel fantastic, and perform well using
            modern technogies.
          </p>
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <ul>
            <li>Typescript</li>
            <li>Python</li>
            <li>C++</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>HTML and CSS</li>
            <li>MongoDB</li>
            <li>Postgres SQL</li>
            <li>Git/Github</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
