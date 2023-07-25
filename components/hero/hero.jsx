import React from "react";
import Header from "../header/header";
import styles from "./hero.module.scss";
import NEXT from "@/public/profile_1.jpg";
import Image from "next/image";
import { Arrow, Mouse } from "../materials/materials";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.hero_container}>
        <Image
          src={NEXT}
          alt="next.js"
          width={100}
          height={100}
          style={{ borderRadius: "100%" }}
        />
        <h1>Jhon Doe</h1>
        <h2>Software Engineer</h2>

        <Mouse />
        <div className={styles.stats_content}>
          <div>
            <h3>7+</h3>
            <p>Years of experience</p>
          </div>
          <div>
            <h3>20+</h3>
            <p>Submitted projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
