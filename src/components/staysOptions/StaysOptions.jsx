import styles from './staysOptions.module.css'
import BtnFrontPage from '../btnFrontPage/BtnFrontPage';

const StaysOptions = ({ title, subtitle1, subtitle2, image, buttonText }) => {
  return (
    <article className={styles.container}>
      <div className={styles.component}>
        <div className={styles.staysName}>
          <h3>{title}</h3>
          <h4>{subtitle1}</h4>
          <h4>{subtitle2}</h4>
        </div>

        <img src={image} alt={title} />

        <BtnFrontPage>{buttonText}</BtnFrontPage>
      </div>
    </article>
  );
};

export default StaysOptions;