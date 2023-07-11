import "./HomeCategories.css";
import LargeCatCard from "./LargeCatCard";
import SmallCatCard from "./SmallCatCard";
export default function HomeCategories() {
  let images = [
    "https://img.freepik.com/free-photo/isolated-white-cap_125540-1024.jpg",
    "https://media.istockphoto.com/id/163208487/photo/male-coat-isolated-on-the-white.jpg?s=612x612&w=0&k=20&c=3Sdq5xnVS2jOYPNXI6JLwAumzyelcP_VgKVW0MVUhwo=",
    "https://sneakernews.com/wp-content/uploads/2009/12/sneakernews-top-30-sneakers-2009-summary.jpg",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg",
    "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842811.jpg&fm=jpg",
  ];
  console.log(images[2]);
  return (
    <section className="homepage-main-section">
      <SmallCatCard heading={"hats"} img={images[0]} />
      <SmallCatCard heading={"jackets"} img={images[1]} />
      <SmallCatCard heading={"sneakers"} img={images[2]} />
      <LargeCatCard heading={"womens"} img={images[3]} />
      <LargeCatCard heading={"mens"} img={images[4]} />
    </section>
  );
}
