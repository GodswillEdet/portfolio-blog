import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bao Huynh portfolio</title>
        <meta name="description" content="Bao Huynh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} id="site-main">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;
