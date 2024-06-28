import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Recognition from "../../components/Recognition/Recognition";
import RecentWork from "../../components/RecentWork/RecentWork";
import Archives from "../../components/Archives/Archives";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <About />
      <Experience />
      <Education />
      <RecentWork />
      <Archives />
      <Recognition />
      <Footer />
    </div>
  );
};

export default Home;
