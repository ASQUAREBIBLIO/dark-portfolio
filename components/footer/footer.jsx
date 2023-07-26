import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div>
        <h1>Portfolio.</h1>
        <p>
          Copyrights. Made with 🖤 by{" "}
          <a href="https://astore.ma/" target="_blank">
            Astore
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
