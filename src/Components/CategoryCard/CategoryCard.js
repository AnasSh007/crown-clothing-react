import "./CategoryCard.css";
import { Link } from "react-router-dom";
export default function CategoryCard(props) {
  return (
    // <Link to={`shop/${props.heading}`}>
    <div
      className={props.classname}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="container-small-text-box">
        <span style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
          {props.heading}
        </span>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>SHOP NOW</span>
      </div>
    </div>
    // </Link>
  );
}
