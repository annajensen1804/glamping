import styles from './review.module.css'

const Review = ({review}) => {
    return (
      <article className={styles.review}>
        <h4>{review.name}, {review.age}</h4>
        <h4>{review.stay}</h4>
        <p>{review.review}</p>
      </article>
    );
}
export default Review;