import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
// import Recognition from "../../components/Recognition/Recognition";
// import Interests from "../../components/Interests/Interests";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Experience />
      <Education />
      {/* <Recognition />
      <Interests /> */}
      <Footer />
    </div>
  );
};

export default Home;
