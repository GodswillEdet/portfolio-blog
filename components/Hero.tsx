import styles from "../styles/Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.hero_container}>
      <header id="hero-title" className={styles.hero_header}>
        <p>
          <b>
            <span className={styles.wave}>👋</span>, I am...
          </b>
        </p>
        <h1>
          <span>[</span>Bao Huynh<span>]</span>
        </h1>
        <p className={styles.hero_subtitle}>
          Web developer and student <span className="desktop-only">- </span>Computer Science
          &apos;24
        </p>
      </header>
      <div className={styles.cta}>
        <a href="#" className={styles.cta_main}>
          <span>See my works</span>
        </a>
        <a href="#">
          <span>About me</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
