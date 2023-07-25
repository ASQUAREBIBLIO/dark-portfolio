import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Portfolio from "@/components/portfolio/portfolio";
import Resume from "@/components/resume/resume";
import Services from "@/components/services/services";
import Technologies from "@/components/technologies/technologies";
import styles from "./global.module.scss";
import NavBar from "@/components/navBar/navBar";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Technologies />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <NavBar />
    </div>
  );
};

export default Home;
