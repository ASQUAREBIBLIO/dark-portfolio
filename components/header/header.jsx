import styles from "./header.module.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="mailto:a.contact@astore.ma" className={styles.email_link}>
        a.contact@astore.ma
      </a>
      <h1>Portfolio.</h1>
      <div className={styles.icons}>
        <a href="#portfolio">
          <FaFacebookF />
        </a>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedinIn />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaDribbble />
        </a>
      </div>
    </div>
  );
};

export default Header;
