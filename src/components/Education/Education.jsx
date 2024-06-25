import "./Education.css";

const Education = () => {
  return (
    <div className="education_container">
      <h1 className="education">Education</h1>
      <div className="education_content">
        <h2 className="education_title">MSAJCE</h2>
        <p className="education_course">B.Tech IT</p>
        <p className="education_marks">8.8 CPGA</p>
        <p className="education_duration">2019-2023</p>
      </div>
      <div className="education_content">
        <h2 className="education_title">Crescent</h2>
        <p className="education_course">12th Grade</p>
        <p className="education_marks">60%</p>
        <p className="education_duration">2018-2019</p>
      </div>
    </div>
  );
};

export default Education;
