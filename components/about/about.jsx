import Image from "next/legacy/image";
import { SectionTitle } from "../materials/materials";
import styles from "./about.module.scss";
import Profile from "@/public/profile_1.jpg";
import { FaQuestion } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.about_container} id="about">
      <SectionTitle icon={<FaQuestion />} title="About" />
      <div>
        <Image
          src={Profile}
          alt="next.js"
          width={300}
          height={300}
          style={{ borderRadius: "20px" }}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          aliquam mauris, ut elementum dui. Praesent vitae egestas nisl, vel
          aliquam ante. Nullam ac ipsum iaculis, feugiat nulla et, tincidunt
          arcu. Donec at quam purus. Phasellus rhoncus, velit ac ullamcorper
          mattis, purus tellus placerat ex, ut pulvinar dui ligula a dui. Duis
          sit amet egestas ante. Proin ac feugiat neque. Nulla augue purus,
          eleifend id justo non, iaculis scelerisque magna. Donec aliquet
          consectetur urna vitae ultricies. Duis ullamcorper elementum magna, ac
          blandit risus tristique at.
        </p>
      </div>
    </div>
  );
};

export default About;
