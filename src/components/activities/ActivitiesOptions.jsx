import { useEffect, useState } from "react";
import Activity from "../activity/activity";
import styles from "../staysOptions/staysoptions.module.css"

const ActivitiesOptions = () => {
    const [activities, setActivities] = useState([]);
    
      const fetchActivities = async () => {
        try {
          const response = await fetch(
            "https://glamping-rqu9j.ondigitalocean.app/activities/"
          );

          const data = await response.json();
          console.log(data);

          setActivities(data.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchActivities();
      }, []);

    return (
      <section className={styles.container}>
        {activities.map((activity) => (
          <Activity activity={activity} key={activity._id} />
        ))}
      </section>
    );
}

export default ActivitiesOptions