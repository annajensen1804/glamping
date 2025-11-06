import styles from './review.module.css'

const Review = ({title, name, description}) => {
    return (
      <article className={styles.review}>
        <h4>{name}</h4>
        <h4>{title}</h4>
        <p>{description}</p>
      </article>
    );
}
export default Review;