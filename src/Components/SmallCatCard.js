export default function SmallCatCard(props) {
  return (
    <div
      className="container-small"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="container-small-text-box">
        <span style={{ fontWeight: "bold", fontSize: "1.8rem" }}>
          {props.heading}
        </span>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>SHOP NOW</span>
      </div>
    </div>
  );
}
