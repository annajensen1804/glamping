import { useState, useEffect } from "react";
import Stay from "../stay/Stay";
import styles from "./staysWeekend.module.css";

const Stays = () => {
  const [stays, setStays] = useState([]);

  const fetchStays = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/stays/"
      );

      const data = await response.json();
      setStays(data.data);

      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  return (
    <div className={styles.container}>
      {stays.map((stay, index) => (
        <Stay stay={stay} key={index} />
      ))}
    </div>
  );
};

export default Stays;
