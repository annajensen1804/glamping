import styles from './Footer.module.css'
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { RiFacebookBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.SoMe}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxFill size={50} color="white" />
        </a>

       <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        > 
        <RiInstagramFill size={50} color="white" />
        </a>

      </div>
      <div className={styles.logoText}>
        <img src={logo} alt="logo" width={30} />
        <p>Gittes Glamping</p>
      </div>
    </footer>
  );
};

export default Footer;
