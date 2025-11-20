import { useLocalStorage } from '@uidotdev/usehooks'
import styles from './myList.module.css'
import Activity from '../activity/activity';

const MyListComponent = () => {
    
    const [liked] = useLocalStorage("myList", []);

    return (
      <section className={styles.container}>
        
        {liked.map((activity) => (
          
          <Activity activity={activity} key={activity._id} />
        ))}

      </section>
    );
}

export default MyListComponent