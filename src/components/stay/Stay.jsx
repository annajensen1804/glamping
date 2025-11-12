import styles from './stay.module.css'

const Stay = ({stay}) => {
    return (
      <article className={styles.stay}>
        <h4>{review.name}, {review.age}</h4>
        <h4>{review.stay}</h4>
        <p>{stay.description}</p>
      </article>
    );
}
export default Stay;