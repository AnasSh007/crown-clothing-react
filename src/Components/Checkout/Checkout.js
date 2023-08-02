import "./Checkout.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
export default function Checkout() {
  let { cart, setCart } = useContext(CartContext);
  let cartArray = [];

  useEffect(() => {
    if (cart) cartArray = cart.map((el) => el);
    console.log("cart array in shop is = ", cartArray);
  }, [cartArray]);

  function countItems(array) {
    let totalItems = 0;
    array.map((element) => {
      totalItems++;
    });
    return totalItems;
  }

  function calculateTotalPrice(array) {
    let totalPrice = 0;
    array.map((element) => {
      totalPrice += element.times * element.price;
    });
    return totalPrice;
  }

  const handleRemove = (product) => {
    if (product.times === 0) return;

    cartArray.forEach((element) => {
      if (element == product) {
        element.times--;
        if (element.times === 0) handleRemoveItem(product);
        return;
      }
    });
    setCart(cartArray);
  };

  const handleAddition = (product) => {
    cartArray.forEach((element) => {
      if (element == product) {
        element.times++;
        console.log("element = ", element, "\nproduct = ", product);
        return;
      }
    });
    setCart(cartArray);
  };

  const handleRemoveItem = (product) => {
    cartArray = cartArray.filter((element) => element.id !== product.id);
    console.log("new cart = ", cartArray);
    setCart(cartArray);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-header">
            <td>PRODUCT</td>
            <td>DESCRIPTION</td>
            <td>QUANTITY</td>
            <td>PRICE</td>
            <td>REMOVE</td>
          </tr>
          <tr>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
          </tr>
        </thead>
        <tbody>
          {cart ? (
            cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} style={{ height: "200px" }} />
                </td>
                <td>{item.name}</td>
                <td>
                  <i
                    className="fa-solid fa-chevron-left"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemove(item)}
                  ></i>{" "}
                  {item.times}{" "}
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleAddition(item);
                    }}
                  ></i>
                </td>
                <td>{item.price}</td>
                <td>
                  <i
                    className="fa-solid fa-xmark"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveItem(item)}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr style={{ fontSize: "1.2rem" }}>
              <td>Cart is Empty</td>
            </tr>
          )}
          <tr>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
            <td>
              <hr />
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ fontSize: "1.8rem" }}>Total Items</td>
            <td style={{ fontSize: "1.8rem" }}>{countItems(cart)}</td>
            <td style={{ fontSize: "1.8rem" }}>Total</td>
            <td style={{ fontSize: "1.8rem" }}>
              {calculateTotalPrice(cart)} $
            </td>
          </tr>
        </tbody>
      </table>
      {cart ? <button className="button-pay">Checkout</button> : ""}
    </div>
  );
}
