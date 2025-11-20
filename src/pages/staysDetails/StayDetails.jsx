import { useLocation, useParams } from "react-router"
import styles from "./stayDetails.module.css"
import { useEffect, useState } from "react"
import PageHeader from "../../components/pageHeader/PageHeader"
import SectionText from "../../components/sectionText/SectionText"
import logo from "../../assets/logo.png";

const StaysDetails = () => {

  const location = useLocation()

  const detailPage = location.pathname.startsWith("/stays/")

const [stay, setStay] = useState({})
const {id} = useParams()

  const fetchStayById = async () => {
    try {
      const response = await fetch(
        `https://glamping-rqu9j.ondigitalocean.app/stay/${id}`
      );

const data = await response.json()
setStay(data.data[0])

    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  fetchStayById();
}, []);

    return (
      <article className={styles.StayDetails}>
        <PageHeader titleOne={stay.title} bgImg={stay.image} logo={logo}/>

        <SectionText 
        title="Tag væk en weekend, med én du holder af" 
        text={stay.description}
        includes={stay.includes}  
        price={stay.price}
        button
        detailPage />

      </article>
    );
}

export default StaysDetails