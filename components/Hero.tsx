import styles from "../styles/Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section aria-labelledby="hero-title" className={styles.hero_container}>
      <header id="hero-title" className={styles.hero_header}>
        <p>
          <b>Hi, I am...</b>
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
        <a href="#" className={styles.fill}>
          <span className={styles.ctaText}>See my works</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
