import { useState } from "react";
import { data } from "../../utils/data";
import styles from "./Archives.module.css";

const Archives = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <div className={styles.archives_container}>
      <h1 className={styles.archives}>From the Archives</h1>
      <div className={styles.archives_content}>
        {data.archives.slice(0, visibleItems).map((item) => (
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
      {visibleItems < data.archives.length && (
        <button className={styles.archives_btn} onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default Archives;
