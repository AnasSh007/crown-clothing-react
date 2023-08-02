import "./Shop.css";
import { ProductContext } from "../../context/products.context";
import ShopPortionCard from "../ShopPortionCard/ShopPortionCard";
import { useContext, useEffect } from "react";
export default function ShopPortion() {
  let { products } = useContext(ProductContext);
  let categories = ["JACKETS", , "SNEAKERS", "HATS", "MENS", "WOMENS"];
  return (
    <div className="shop-portion">
      {categories.map((category) => (
        <div>
          <h2 className="shop-portion-heading">{category}</h2>
          <div className="shop-portion-cards-container">
            {products.slice(0, 4).map((product) => (
              <ShopPortionCard key={product.id} item={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
