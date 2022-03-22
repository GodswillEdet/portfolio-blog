import Link from "next/link";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>BHUYNHDEV</a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a href="#projects">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
