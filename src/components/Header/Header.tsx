import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
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
            <a href="#projects">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#projects">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
