import styles from "./technologies.module.scss";
import ReactIcon from "@/public/reactjs.png";
import NextIcon from "@/public/Nextjs.png";
import PostgreIcon from "@/public/Postgresql.png";
import SassIcon from "@/public/sass.png";
import BootstrapIcon from "@/public/Bootstrap.png";
import FigmaIcon from "@/public/figma.png";
import PhotoshopIcon from "@/public/Adobe_Photoshop.png";
import IllustratorIcon from "@/public/Adobe_Illustrator.png";
import Image from "next/legacy/image";

const Technologies = () => {
  return (
    <div className={styles.tech_container}>
      <Image
        src={ReactIcon}
        alt="react icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={NextIcon}
        alt="nextjs icon"
        width={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={PostgreIcon}
        alt="postgresql icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={FigmaIcon}
        alt="figma icon"
        width={35}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={SassIcon}
        alt="sass icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={BootstrapIcon}
        alt="bootstrap icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={PhotoshopIcon}
        alt="photoshop icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
      <Image
        src={IllustratorIcon}
        alt="illustrator icon"
        width={50}
        height={50}
        style={{ filter: "grayscale(1)" }}
      />
    </div>
  );
};

export default Technologies;
