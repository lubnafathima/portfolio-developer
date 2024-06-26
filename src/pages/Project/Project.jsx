import { useParams, Link } from "react-router-dom";
import { data } from "../../utils/data";
import styles from "./Project.module.css";
import { FaChevronRight } from "react-icons/fa";

const Project = () => {
  const { id } = useParams();
  const currentProjectId = parseInt(id);
  const currentIndex = data.work.findIndex(
    (item) => item.id === currentProjectId
  );
  const project = currentIndex !== -1 ? data.work[currentIndex] : null;
  const nextProjectId = project
    ? currentIndex === data.work.length - 1
      ? data.work[0].id
      : data.work[currentIndex + 1].id
    : data.work[0].id;

  return (
    <div className={styles.project}>
      <div className={styles.project_container}>
        <nav className={styles.project_nav}>
          <Link to="" className={styles.navlink}>
            Home
          </Link>
          <Link to={`/project/${nextProjectId}`} className={styles.navlink}>
            Next Project <FaChevronRight />
          </Link>
        </nav>
        <h1 className={styles.description}>{project.description}</h1>
        <p className={styles.designation}>{project.designation}</p>
      </div>
    </div>
  );
};

export default Project;
