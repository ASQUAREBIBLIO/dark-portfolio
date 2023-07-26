import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Portfolio from "@/components/portfolio/portfolio";
import Resume from "@/components/resume/resume";
import Services from "@/components/services/services";
import Technologies from "@/components/technologies/technologies";
import styles from "./global.module.scss";
import NavBar from "@/components/navBar/navBar";
import ContactForm from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Technologies />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
