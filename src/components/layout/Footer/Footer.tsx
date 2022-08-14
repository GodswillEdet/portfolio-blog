import { Icon } from "components/shared";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.linklist}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <ul>
          <li>
            <a href="https://github.com/bhuynhdev" target="_blank" rel="noopener noreferrer">
              <Icon type="social" iconName="Github" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baohuynhuc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="social" iconName="LinkedIn" size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/unflinch_camel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="social" iconName="Instagram" size={30} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/bhuynhtweet" target="_blank" rel="noopener noreferrer">
              <Icon type="social" iconName="Twitter" size={30} />
            </a>
          </li>
        </ul>
      </div>
      <p>© 2022 Bao Huynh</p>
    </footer>
  );
};
