import { useState, useEffect } from "react";
import Review from "../review/Review";
import styles from "./reviews.module.css";

const Reviews = () => {

  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/reviews"
      );

const data = await response.json()
setReviews(data.data)


      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  fetchReviews();
}, []);


    return (
      <div className={styles.container}>
        {reviews.map((review, index) => (
          <Review review={review} key={index} />
        ))}
      </div>
    );
}

export default Reviews;