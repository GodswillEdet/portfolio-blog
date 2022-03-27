import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Header } from "../components/Header";
import { ProjectItemProps } from "components/Projects/ProjectItem/ProjectItem";
import projectsOverviewData from "data/projects.data.yaml";

interface HomeStaticProps {
  projectList: ProjectItemProps[];
}

const Home: NextPage<HomeStaticProps> = (props) => {
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
        <Projects projectList={props.projectList} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeStaticProps> = () => {
  return {
    props: { projectList: projectsOverviewData },
  };
};
