import BoutiqueCard from "../components/BoutiqueCard";
import "../scss/shop.scss";
import shop from "../data/shop";
import Amelioration from "../components/WildCoin/Amelioration";
export default function Boutique() {
  return (
    <main>
      <div className="shoppagecontainer">
        <h1>Boutique</h1>
        <Amelioration />
        <div className="cardcontainer">
          {shop.map((item) => {
            return (
              <BoutiqueCard
                key={item.name}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
