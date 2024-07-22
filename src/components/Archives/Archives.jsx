import { data } from "../../utils/data";
import styles from "./Archives.module.css";

const Archives = () => {
  return (
    <div className={styles.archives_container}>
      <h1 className={styles.archives}>From the Archives</h1>
      <div className={styles.archives_content}>
        {data.archives.map((item) => (
          <>
            <a
              href={item?.demoLink}
              key={item.id}
              className={styles.archives_card}
              target="_blank"
            >
              <img
                src={item?.imgSrc}
                alt="logo"
                className={styles.archives_img}
              />
              <a
                href={item?.githubLink}
                className={styles.archives_designation}
              >
                <h2 className={styles.archives_title}>
                  {item?.title} /{" "}
                  <span className={styles.archives_description}>
                    {item?.description}
                  </span>
                </h2>
              </a>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Archives;
