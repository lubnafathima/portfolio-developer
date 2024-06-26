import { data } from "../../utils/data.js";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_container">
      <h1 className="experience">Experience</h1>
      {data.experience.map((item) => (
        <div key={item.id} className="experience_content">
          <h2 className="experience_title">{item?.company}</h2>
          <p className="experience_category">{item?.category}</p>
          <p className="experience_year">{item?.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
