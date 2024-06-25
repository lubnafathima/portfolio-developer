import "./Footer.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="social_links">
          <a
            href="mailto:lubnafathima275@gmail.com"
            className="social_id"
            target="_blank"
          >
            <span>Contact</span>
            <MdOutlineArrowOutward />
          </a>
          <a
            href="https://github.com/lubnafathima"
            className="social_id"
            target="_blank"
          >
            <span>Github</span>
            <MdOutlineArrowOutward />
          </a>
          <a
            href="https://www.linkedin.com/in/lubna-fathima-n/"
            className="social_id"
            target="_blank"
          >
            <span>LinkedIn</span>
            <MdOutlineArrowOutward />
          </a>
          <a
            href="https://twitter.com/MsCoder1/"
            className="social_id"
            target="_blank"
          >
            <span>Twitter</span>
            <MdOutlineArrowOutward />
          </a>
        </div>
        <p className="copywrite">&copy; 2024 Lubna Fathima N</p>
      </div>
    </div>
  );
};

export default Footer;
