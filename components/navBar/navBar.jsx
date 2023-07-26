"use client";

import {
  FaBookOpen,
  FaPhone,
  FaQuestion,
  FaServicestack,
  FaWallet,
} from "react-icons/fa";
import styles from "./navBar.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  // Function to update the active link based on scroll position
  const handleScroll = () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (
        section.offsetTop <= window.pageYOffset &&
        section.offsetTop + section.offsetHeight > window.pageYOffset / 2
      ) {
        setActiveLink(sectionId);
      }
    });
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={styles.navBar}>
      <a
        href="#about"
        className={
          activeLink === "#about"
            ? `${styles.navItem} ${styles.active}`
            : styles.navItem
        }
      >
        <FaQuestion />
      </a>
      <a
        href="#resume"
        className={
          activeLink === "#resume"
            ? `${styles.navItem} ${styles.active}`
            : styles.navItem
        }
      >
        <FaBookOpen />
      </a>
      <a
        href="#services"
        className={
          activeLink === "#services"
            ? `${styles.navItem} ${styles.active}`
            : styles.navItem
        }
      >
        <FaServicestack />
      </a>
      <a
        href="#portfolio"
        className={
          activeLink === "#portfolio"
            ? `${styles.navItem} ${styles.active}`
            : styles.navItem
        }
      >
        <FaWallet />
      </a>
      <a
        href="#contact"
        className={
          activeLink === "#contact"
            ? `${styles.navItem} ${styles.active}`
            : styles.navItem
        }
      >
        <FaPhone />
      </a>
    </nav>
  );
};

export default NavBar;
