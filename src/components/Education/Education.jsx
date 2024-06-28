import { data } from "../../utils/data.js";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.education_container}>
      <h1 className={styles.education}>Education</h1>
      {data.education.map((item) => (
        <div key={item.id} className={styles.education_content}>
          <h2 className={styles.education_title}>{item?.institution}</h2>
          <p className={styles.education_course}>{item?.course}</p>
          <p className={styles.education_marks}>{item?.marks}</p>
          <p className={styles.education_duration}>{item?.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
