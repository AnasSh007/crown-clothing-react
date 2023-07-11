import "./Header.css";
import logo from "../images/crown.svg";
import bag from "../images/shopping-bag.svg";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <li className="selected-nav">HOME</li>
        <li>SHOP</li>
        <li>SIGN IN</li>
        <li>
          <i
            className="fa-solid fa-circle-half-stroke"
            style={{ color: "#ffffff" }}
          ></i>
        </li>
        <li>
          <i
            className="fa-solid fa-bag-shopping"
            style={{ color: "#ffffff" }}
          ></i>
          {/* <img
            src={bag}
            alt="shopping bag image"
            style={{ color: "white", height: "25px" }}
          />   */}
        </li>
      </nav>
    </header>
  );
}

export default Header;
