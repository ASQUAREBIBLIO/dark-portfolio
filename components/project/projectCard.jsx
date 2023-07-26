import Image from "next/legacy/image";
import styles from "./projectCard.module.scss";

const ProjectCard = ({ image, techs }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt="project image"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "10px" }}
      />
      <div className={styles.techs}>
        {techs.isReact && <span>{`React`}</span>}
        {techs.isNext && <span>{`Next.js`}</span>}
        {techs.isSass && <span>{`Sass`}</span>}
        {techs.isBootstrap && <span>{`Bootstrap`}</span>}
      </div>
    </div>
  );
};

export default ProjectCard;
