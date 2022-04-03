import type { GetStaticProps, NextPage } from "next";
import styles from "styles/Home.module.scss";
import { About, Hero, Contact, Projects } from "components/sections";
import projectsOverviewData from "data/projects.data.yaml";
import { ProjectInfo } from "common/types";

interface HomeStaticProps {
  projectList: ProjectInfo[];
}

const Home: NextPage<HomeStaticProps> = (props) => {
  return (
    <main className={styles.main} id="site-main">
      <Hero />
      <About />
      <Projects projectList={props.projectList} />
      <Contact />
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeStaticProps> = () => {
  return {
    props: { projectList: projectsOverviewData },
  };
};
