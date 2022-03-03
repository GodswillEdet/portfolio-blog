import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bao Huynh portfolio</title>
        <meta name="description" content="Bao Huynh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}></nav>
      <main className={styles.main}>
        <section aria-labelledby="hero-title" className={styles.hero}>
          <div className={styles.hero_content_container}>
            <header id="hero-title" className={styles.hero_header}>
              <p>
                <b>Hi, I am...</b>
              </p>
              <h1>
                <span>[</span>Bao Huynh<span>]</span>
              </h1>
              <p className={styles.hero_subtitle}>
                Avid movie watcher, web developer, and student @ U Cincy
              </p>
            </header>
            <div className={styles.cta}>
              <a href="#" className={styles.fill}>
                <span className={styles.ctaText}>See my works</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
