import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Resume from "@/components/resume/resume";
import Technologies from "@/components/technologies/technologies";

const Home = () => {
  return (
    <div>
      <Hero />
      <Technologies />
      <About />
      <Resume />
    </div>
  );
};

export default Home;
