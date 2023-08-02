import "./HomeCategories.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
export default function HomeCategories() {
  let cards = [
    {
      id: 1,
      image: "https://www.crown-clothes.com/images/hats.jpg",
      heading: "hats",
      classname: "container-small",
    },
    {
      id: 2,
      image: "https://www.crown-clothes.com/images/jackets.jpg",
      heading: "jackets",
      classname: "container-small",
    },
    {
      id: 3,
      image: "https://www.crown-clothes.com/images/sneakers.jpg",
      heading: "sneakers",
      classname: "container-small",
    },
    {
      id: 4,
      image: "https://www.crown-clothes.com/images/womens.jpg",
      heading: "womens",
      classname: "container-large",
    },
    {
      id: 5,
      image: "https://www.crown-clothes.com/images/men.jpg",
      heading: "mens",
      classname: "container-large",
    },
  ];
  return (
    <section className="homepage-main-section">
      {cards.map((card) => (
        <CategoryCard
          key={card.id}
          heading={card.heading}
          img={card.image}
          classname={card.classname}
        />
      ))}
    </section>
  );
}
