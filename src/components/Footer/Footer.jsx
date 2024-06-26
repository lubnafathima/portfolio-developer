import { data } from "../../utils/data.js";
import "./Footer.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="social_links">
          {data?.footer?.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link?.url}
              className="social_id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link?.text}</span>
              <MdOutlineArrowOutward />
            </a>
          ))}
        </div>
        <p className="copywrite">{data?.footer?.copywrite}</p>
      </div>
    </div>
  );
};

export default Footer;
