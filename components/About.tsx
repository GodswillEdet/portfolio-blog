import styles from "../styles/About.module.scss";

const About: React.FC = () => {
  return (
    <section aria-labelledby="about" className={styles.about}>
      <h2 id="about" className="title">
        About me
      </h2>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p>
            Hi, I am Bao Huynh, a passionate web developer and a Computer Science at University of
            Cincinnati.
          </p>
          <p>
            I enjoy making web applications that look great, feel fantastic, and function correctly
            using modern technogies.
          </p>
        </div>
        <div className={styles.skills}>
          <h3 className="title">Skills</h3>
          <ul>
            <li>Github</li>
            <li>Github</li>
            <li>Github</li>
            <li>Github</li>
            <li>Github</li>
            <li>Github</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
