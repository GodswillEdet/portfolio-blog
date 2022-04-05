import { Icon } from "components/shared";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section aria-labelledby="hero" className={styles.hero}>
      <header id="hero" className={styles.hero_header}>
        <p>
          <b>
            <span className={styles.wave}>👋</span>, I am...
          </b>
        </p>
        <h1>
          <span>[</span>Bao Huynh<span>]</span>
        </h1>
        <p className={styles.hero_subtitle}>
          Web developer and student <span className={styles.subtitle_hyphen}>- </span>Computer
          Science &apos;24
        </p>
      </header>
      <div className={styles.cta}>
        <a href="#projects" className={styles.cta_main}>
          <span>See my works</span>
        </a>
        <a href="#about">
          <span>About me</span>
        </a>
      </div>
      <div className={styles.socials}>
        <ul>
          <li>
            <a href="https://github.com/bhuynhdev">
              <Icon type="social" iconName="Github" size={35} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/bhuynhtweet">
              <Icon type="social" iconName="Twitter" size={35} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
