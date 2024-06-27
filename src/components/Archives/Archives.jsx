import { data } from "../../utils/data";
import "./Archives.css";

const Archives = () => {
  return (
    <div className="archives_container">
      <h1 className="archives">From the Archives</h1>
      <div className="archives_content">
        {data.archives.map((item) => (
          <a href={item?.demoLink} key={item.id} className="archives_card" target="_blank">
            <img src={item?.imgSrc} alt="logo" className="archives_img" />
            <h2 className="archives_title">
              {item?.title} /{" "}
              <span className="archives_description">
                {item?.description}
              </span>
            </h2>
            <p className="archives_designation">{item?.designation}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Archives;
