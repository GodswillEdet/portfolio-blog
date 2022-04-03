import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const [offsetTop, setOffsetTop] = useState(0);
  useEffect(() => {
    document.onscroll = () => setOffsetTop(document.documentElement.scrollTop);
  }, []);
  return (
    <header className={`${styles.header} ${offsetTop >= 50 ? styles.headerScrolled : ""}`}>
      <Link href="/">
        <a className={styles.logo}>BHUYNHDEV</a>
      </Link>
      <input type="checkbox" id="nav-toggle" className={`${styles.toggle} mobile-only`} />
      <label htmlFor="nav-toggle" className={`${styles.burger} mobile-only`}>
        <span></span>
      </label>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
