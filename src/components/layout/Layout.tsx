import Head from "next/head";
import { Header } from "./Header";

const Layout: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Bao Huynh portfolio</title>
        <meta name="description" content="Bao Huynh's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> <Header />
      {props.children}
    </>
  );
};

export default Layout;
