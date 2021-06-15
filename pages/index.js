import Head from "next/head";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Mission from "../components/mission";
import Navigation from "../components/navigation";
import Portfolio from "../components/portfolio";
import Team from "../components/team";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VC Enterprise Portfolio</title>
        <meta
          name="description"
          content="VC Enterprise Portfolio, a project for codeacademy Full-Stack Engineer Course."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <Navigation></Navigation>
      <Mission></Mission>
      <Portfolio></Portfolio>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
