import { useState, useEffect } from 'react';
import styles from '../stay/stay.module.css'
import Stay from '../stay/Stay';

const StaysOptions = () => {
  const [stays, setStays] = useState([]);

  const fetchStays = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/stays"
      );

      const data = await response.json();
      console.log(data);

      setStays(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);


    return (
      <section className={styles.container}>
        {stays.map((stay) => (
          <Stay stay={stay} key={stay._id} />
        ))}
      </section>
    );
  };

export default StaysOptions;