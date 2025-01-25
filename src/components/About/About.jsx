import { data } from "../../utils/data";
import Line from "../../assets/icons/curved_line.png";
import styles from "./About.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className={styles.main}>
        <img src={data.about.logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>
          I&#39;m Lubna — a frontend{" "}
          <span className={styles.developer}>developer</span>, passionate about
          crafting intuitive user experiences.
        </h1>
        <a
          href="https://drive.google.com/file/d/1T106jgXNNNlOX9Fo3zJXoe1Zeua9Qi0S/view"
          className={styles.about_button}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <MdOutlineArrowOutward />
        </a>
      </div>
      <div className={styles.about}>
        <img src={Line} alt="line" className={styles.line} />
        <p className={styles.about_content}>
          My journey began with a fascination for technology during my early
          years, which evolved into a career driven by a commitment to
          excellence in coding and user experience design.
        </p>
        <p className={styles.about_content}>
          I have honed my skills in translating design concepts into functional
          web applications.
        </p>
        <p className={styles.about_content}>
          My expertise spans across modern frontend technologies such as HTML5,
          CSS3, JavaScript, and various frameworks like React and Next JS,
          enabling me to create dynamic and responsive interfaces that elevate
          user interaction.
        </p>
      </div>
    </>
  );
};

export default About;
