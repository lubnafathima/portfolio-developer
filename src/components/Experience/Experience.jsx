import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_container">
      <h1 className="experience">Experience</h1>
      <div className="experience_content">
        <h2 className="experience_title">SenseGrass</h2>
        <p className="experience_category">Agri-Tech</p>
        <p className="experience_year">2023-2024</p>
      </div>
      <div className="experience_content">
        <h2 className="experience_title">Kuvi Network</h2>
        <p className="experience_category">Ed-Tech</p>
        <p className="experience_year">2023</p>
      </div>
      <div className="experience_content">
        <h2 className="experience_title">Fibo</h2>
        <p className="experience_category">Health & Fitness</p>
        <p className="experience_year">2023</p>
      </div>
    </div>
  );
};

export default Experience;
