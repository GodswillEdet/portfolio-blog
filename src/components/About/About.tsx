import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section aria-labelledby="about" className={styles.about}>
      <h2 id="about" className="title-center">
        About me
      </h2>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>Hi, I am Bao Huynh, a passionate web developer and a Computer Science student</p>
          <p>
            I enjoy making web applications that look great, feel fantastic, and perform well using
            modern technogies.
          </p>
        </div>
        <div className={styles.skills}>
          <h3 className="title-center">Skills</h3>
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
