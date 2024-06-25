import Logo from "../../assets/icons/logo.jpeg";
import Line from "../../assets/icons/curved_line.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="main">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="title">
          I&#39;m Lubna — a frontend{" "}
          <span className="developer">developer</span>, passionate about
          crafting intuitive user experiences.
        </h1>
      </div>
      <div className="about">
          <img src={Line} alt="line" className="line" />
          <p className="about_content">
          My journey began with a fascination for technology during my early
          years, which evolved into a career driven by a commitment to
          excellence in coding and user experience design.
        </p>
        <p className="about_content">
          I have honed my skills in translating design concepts into functional
          web applications.
        </p>
        <p className="about_content">
          My expertise spans across modern frontend technologies such as HTML5,
          CSS3, JavaScript, and various frameworks like React and Next JS,
          enabling me to create dynamic and responsive interfaces that elevate
          user interaction.
        </p>
      </div>
      <div className="about_divider"></div>
    </>
  );
};

export default About;
