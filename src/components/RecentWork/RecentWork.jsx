import { Link } from "react-router-dom";
import { data } from "../../utils/data";
import "./RecentWork.css";

const RecentWork = () => {
  console.log(data.work[0].title);
  return (
    <div className="recentWork_container">
      <h1 className="recentWork">Recent work</h1>
      <div className="recentWork_content">
        {data.work.map((item) => (
          <Link
            to={`/project/${item.id}`}
            key={item.id}
            className="recentWork_card"
          >
            <img src={item?.imgSrc} alt="logo" className="recentWork_img" />
            <h2 className="recentWork_title">
              {item?.title} /{" "}
              <span className="recentWork_description">
                {item?.description}
              </span>
            </h2>
            <p className="recentWork_designation">{item?.designation}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
