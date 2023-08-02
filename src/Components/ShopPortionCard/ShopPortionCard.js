import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
export default function ShopPortionCard(props) {
  let { cart, setCart } = useContext(CartContext);
  let cartArray = [];
  useEffect(() => {
    if (cart) cartArray = cart.map((el) => el);
    console.log("cart array in shop is = ", cartArray);
  }, [cart]);

  function addToCart(product) {
    let alreadyExists = false;
    cartArray.forEach((element) => {
      if (element == product) {
        alreadyExists = true;
        element.times++;
        return;
      }
    });

    if (!alreadyExists) {
      console.log("pushed is called");
      product.times = 1;
      cartArray.push(product);
    }
    setCart(cartArray);
  }

  return (
    <div className="shop-portion-card">
      <img className="shop-portion-card-image" src={props.item.image} />
      <div className="shop-portion-card-name-price">
        <span>{props.item.name}</span>
        <span>{props.item.price}</span>
      </div>
      <div
        onClick={() => {
          addToCart(props.item);
        }}
        className="add-to-cart-card"
      >
        ADD TO CART
      </div>
    </div>
  );
}
