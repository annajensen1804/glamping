import { useState } from "react";
import styles from "../activity/activity.module.css"
import BtnFrontPage from "../btnFrontPage/BtnFrontPage";
import { useLocalStorage } from "@uidotdev/usehooks";
import { IoMdHeart } from "react-icons/io";

const Activity = ( {activity} ) => {

const [text, setText] = useState(false)

const handleRead = () => {
  setText(!text)
}

const [open, setOpen] = useState(false);
const toggle = () => setOpen((prev) => !prev);

const [liked, setLike] = useLocalStorage("myList", [])
/* const isLiked = liked.includes(activity._id) */
const isLiked = liked.some((item) => item._id === activity._id);

const handleLike = () => {
  /* setLike((prevLike) => isLiked ? prevLike.filter((li) => li !==activity._id) : [...prevLike, activity]) */
  setLike((prev) =>
    isLiked
      ? prev.filter((item) => item._id !== activity._id)
      : [...prev, activity]
  );
}

    return (
      <section className={styles.container}>
        <div className={styles.component}>
          <div className={styles.staysName}>
            <h3>{activity.title}</h3>
          </div>

          <img src={activity.image} alt={activity.title} />

          <div className={styles.activityDetails}>
            <div className={styles.dateTimeLike}>
              <div className={styles.dateTime}>
                <h4>{activity.date}</h4>
                <h4>{activity.time}</h4>
              </div>

              <div className={styles.heartWrapper}>
                {isLiked ? (
                  <IoMdHeart onClick={handleLike} size={35} />
                ) : (
                  <IoMdHeart onClick={handleLike} color="#ffffff62" size={35} />
                )}
              </div>
            </div>

            {
              <BtnFrontPage
                buttonText={open ? "Læs mindre" : "Læs mere"}
                onClick={() => {
                  handleRead();
                  toggle();
                }}
                background="transparent"
                border="white 1px solid"
              />
            }

            {text && <p>{activity.description}</p>}
          </div>
        </div>
      </section>
    );
}

export default Activity