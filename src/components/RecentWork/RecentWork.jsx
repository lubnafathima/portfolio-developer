import { data } from "../../utils/data";
import styles from "./RecentWork.module.css";

const RecentWork = () => {
  console.log(data.work[0].title);
  return (
    <div className={styles.recentWork_container}>
      <h1 className={styles.recentWork}>Recent work</h1>
      <div className={styles.recentWork_content}>
        {data.work.map((item) => (
          <a href={item?.demoLink} key={item?.title} className={styles.recentWork_card} target="_blank">
            <img src={item?.imgSrc} alt="logo" className={styles.recentWork_img} />
            <h2 className={styles.recentWork_title}>
              {item?.title} /{" "}
              <span className={styles.recentWork_description}>
                {item?.description}
              </span>
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
