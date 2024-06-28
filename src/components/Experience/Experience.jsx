import { data } from "../../utils/data.js";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.experience_container}>
      <h1 className={styles.experience}>Experience</h1>
      {data.experience.map((item) => (
        <div key={item.id} className={styles.experience_content}>
          <h2 className={styles.experience_title}>{item?.company}</h2>
          <p className={styles.experience_category}>{item?.category}</p>
          <p className={styles.experience_year}>{item?.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
