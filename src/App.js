import "./App.css";
import "./Components/Header/Header.js";
import Header from "./Components/Header/Header.js";
import HomeCategories from "./Components/HomeCategories/HomeCategories.js";
import Shop from "./Components/Shop/Shop.js";
import SubShop from "./Components/Shop/Shop";
import SignIn from "./Components/SignIn/SignIn";
import Checkout from "./Components/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";

function App() {
  let cards = [
    {
      id: 1,
      image: "https://www.crown-clothes.com/images/black-shearling.jpg",
      name: "Black Jean Shearling",
      price: "125",
    },
    {
      id: 2,
      image: "https://www.crown-clothes.com/images/blue-jean-jacket.jpg",
      name: "Blue Jean Jacket",
      price: "90",
    },
    {
      id: 3,
      image: "https://www.crown-clothes.com/images/grey-jean-jacket.jpg",
      name: "Grey Jean Jacket",
      price: "90",
    },
    {
      id: 4,
      image: "https://www.crown-clothes.com/images/brown-shearling.jpg",
      name: "Brown Shearling",
      price: "165",
    },
    {
      id: 5,
      image: "https://www.crown-clothes.com/images/brown-trench.jpg",
      name: "Tan Trench",
      price: "185",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeCategories />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="shop/hats"
            element={<SubShop title={"hats"} products={cards} />}
          />
          <Route
            path="shop/jackets"
            element={<SubShop title={"jackets"} products={cards} />}
          />
          <Route
            path="shop/sneakers"
            element={<SubShop title={"sneakers"} products={cards} />}
          />
          <Route
            path="shop/mens"
            element={<SubShop title={"mens"} products={cards} />}
          />
          <Route
            path="shop/womens"
            element={<SubShop title={"womens"} products={cards} />}
          />
          <Route path="signin" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
