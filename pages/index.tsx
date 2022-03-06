import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

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
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;
