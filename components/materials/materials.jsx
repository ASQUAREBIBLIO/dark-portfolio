"use client";

import React, { useState, useEffect } from "react";
import styles from "./materials.module.scss";

export const Arrow = () => {
  return (
    <div className={styles.scroller}>
      <div className={styles.scroller_triangle}></div>
      <div className={styles.scroller_square1}></div>
      <div className={styles.scroller_square2}></div>
      <div className={styles.scroller_square3}></div>
    </div>
  );
};

export const Mouse = () => {
  const [onScroll, setOnScroll] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", onScrollClass);

    () => {
      return window.removeEventListener("scroll", onScrollClass);
    };
  });

  const onScrollClass = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30 ? setOnScroll("onScrollClass") : setOnScroll("");
    }
  };
  return (
    <div className={`${styles.mouse} ${onScroll}`}>
      <div className={styles.mouse_scroll}></div>
    </div>
  );
};

export const SectionTitle = ({ title }) => {
  return <h3 className={styles.section_title}>{title}</h3>;
};
