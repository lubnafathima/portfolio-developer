import { data } from "../../utils/data.js";
import styles from "./Footer.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.social_links}>
          {data?.footer?.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link?.url}
              className={styles.social_id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link?.text}</span>
              <MdOutlineArrowOutward />
            </a>
          ))}
        </div>
        <p className={styles.copywrite}>{data?.footer?.copywrite}</p>
      </div>
    </div>
  );
};

export default Footer;
