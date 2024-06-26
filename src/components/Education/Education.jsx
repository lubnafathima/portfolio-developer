import { data } from "../../utils/data.js";
import "./Education.css";

const Education = () => {
  return (
    <div className="education_container">
      <h1 className="education">Education</h1>
      {data.education.map((item) => (
        <div key={item.id} className="education_content">
          <h2 className="education_title">{item?.institution}</h2>
          <p className="education_course">{item?.course}</p>
          <p className="education_marks">{item?.marks}</p>
          <p className="education_duration">{item?.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
