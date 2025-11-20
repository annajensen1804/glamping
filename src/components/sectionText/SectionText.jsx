import styles from "./sectionText.module.css";
import BtnFrontPage from "../btnFrontPage/BtnFrontPage";
import { useLocation, useNavigate } from "react-router";
import { useLocalStorage } from "@uidotdev/usehooks";

const SectionText = ({title, text, img, button, includes, price, detailPage}) => {

  const navigate = useNavigate()

  const [liked] = useLocalStorage("myList", [])
  const location = useLocation()


    return (
      <section className={styles.sectionText}>
        <h2>{title}</h2>
        <p>{text}</p>
        {img && <img src={img} alt="Gitte" className="photoGitte" />}

        {includes && <p>{includes}</p>}

        {price && <h4>Price {price},-</h4>}

        {button && (
          <BtnFrontPage
            buttonText={detailPage ? "Book nu" : "Se vores ophold"}
            onClick={() => navigate("/stays")}
          />
        )}

        {location.pathname === "/myList" && liked.length > 0 && (
          <h3>Antal aktiviteter på listen: <br></br>{liked.length}</h3>
        )}

      </section>
    );
}

export default SectionText;