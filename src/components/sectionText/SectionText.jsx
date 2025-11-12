import styles from "./sectionText.module.css";
import BtnFrontPage from "../btnFrontPage/BtnFrontPage";
import photoGitte from "../../assets/gitte.jpg"

const SectionText = ({title, text, showImage = true, showButton = true}) => {
    return (
      <section className={styles.sectionText}>
        <h1>{title}</h1>
        <p>{text}</p>
        {showImage && <img src={photoGitte} alt="Gitte" className="photoGitte" />}
        {showButton && <BtnFrontPage buttonText="SE VORES OPHOLD" />}
      </section>
    );
}

export default SectionText;