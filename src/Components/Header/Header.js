import "./Header.css";
import logo from "../../images/crown.svg";
import { UserContext } from "../../context/user.context";
import { NavLink, Outlet } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.context";
export default function Header() {
  let user = useContext(UserContext);
  let { cart, setCart } = useContext(CartContext);
  const [isBagClicked, setisBagClicked] = useState(false);
  const handleClick = () => {
    setisBagClicked(!isBagClicked);
  };
  return (
    <Fragment>
      <header>
        <div className="logo-container">
          <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
        </div>
        <nav>
          <NavLink
            to={"/"}
            className={(navData) =>
              navData.isActive ? "selected-nav link" : "link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/shop"}
            className={(navData) =>
              navData.isActive ? "selected-nav link" : "link"
            }
          >
            SHOP
          </NavLink>
          {user.currentUser ? (
            <NavLink
              to={"/signin"}
              className={(navData) =>
                navData.isActive ? "selected-nav link" : "link"
              }
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink
              to={"/signin"}
              className={(navData) =>
                navData.isActive ? "selected-nav link" : "link"
              }
            >
              SIGN IN
            </NavLink>
          )}
          <li>
            <i
              className="fa-solid fa-circle-half-stroke"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
          <li>
            <i
              onClick={handleClick}
              className="fa-solid fa-bag-shopping"
              style={{ color: "#ffffff" }}
            ></i>
          </li>
        </nav>
        <div className={`cart-box ${isBagClicked ? "" : "hidden"}`}>
          {cart ? (
            <table>
              {cart.map((el) => (
                <tr
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "5px",
                    gap: "25px",
                  }}
                >
                  <td>
                    <img src={el.image} style={{ height: "50px" }} />
                  </td>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <span>{el.name}</span>
                    <span>
                      {el.times} x {el.price} $
                    </span>
                  </td>
                </tr>
              ))}
              <button className="checkout-button">
                <NavLink to={"/checkout"} className="link">
                  CHECKOUT
                </NavLink>
              </button>
            </table>
          ) : (
            <span className="empty-cart-text">Your cart is empty</span>
          )}
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
}
