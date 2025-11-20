import styles from './stay.module.css'
import BtnFrontPage from '../btnFrontPage/BtnFrontPage';
import { useNavigate } from 'react-router';

const Stay = ({ stay }) => {
  console.log(stay);

  const navigate = useNavigate()

  return (
    <section className={styles.container}>
      <div className={styles.component}>
        <div className={styles.staysName}>
          <h3>{stay.title}</h3>
          <h4>{stay.numberOfPersons} personer</h4>
          <h4>Fra {stay.price},-</h4>
        </div>

        <img src={stay.image} alt={stay.title} />

        <div className={styles.btnWrapper}>
          {<BtnFrontPage 
          buttonText="Læs mere" 
          onClick={() => navigate(`/stays/${stay._id}`)} />}
        </div>
        
      </div>
    </section>
  );
};
export default Stay;