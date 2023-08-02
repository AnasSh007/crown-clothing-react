import { Fragment } from "react";
import ShopPortionCard from "../ShopPortionCard/ShopPortionCard.js";
// import "./SubShop.css";

export default function SubShop(props) {
  return (
    <Fragment>
      <div className="shop-portion">
        <h2 className="shop-portion-heading">{props.title}</h2>
        <div className="shop-portion-cards-container">
          {props.products.map((product) => (
            <ShopPortionCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
