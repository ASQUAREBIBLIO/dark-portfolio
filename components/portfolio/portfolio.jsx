import { SectionTitle } from "../materials/materials";
import ProjectCard from "../project/projectCard";
import styles from "./portfolio.module.scss";
import { FaWallet } from "react-icons/fa";
import GamingImg from "@/public/01_gaming.png";
import AstoreImg from "@/public/astore.png";
import BrainyImg from "@/public/brainy.png";

const projects = [
  {
    id: 1,
    image: GamingImg,
    techs: {
      isReact: true,
      isNext: true,
      isSass: true,
      isBootstrap: false,
    },
  },
  {
    id: 2,
    image: AstoreImg,
    techs: {
      isReact: true,
      isNext: true,
      isSass: true,
      isBootstrap: true,
    },
  },
  {
    id: 3,
    image: BrainyImg,
    techs: {
      isReact: true,
      isNext: false,
      isSass: false,
      isBootstrap: true,
    },
  },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio_container} id="portfolio">
      <SectionTitle icon={<FaWallet />} title="Portfolio" />
      <div className={styles.projects_flex}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            techs={project.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
