import BoutiqueCard from "../components/BoutiqueCard";
// import { useWildCoin } from "..components/WildCoin/WildCoinContext";
import "../scss/shop.scss";
import shop from "../data/shop";

export default function Boutique() {
  // const {
  //   incrementClick,
  //   wildCoin,
  //   setWildCoin,
  //   setIncrementClick,
  //   incrementPerSecond,
  //   setIncrementPerSecond,
  // } = useWildCoin();

  // const acheterAmelioration = (type, amount) => {
  //   const prices = type === "actif" ? price : type === "passif" ? price : null;
  //   const incrementValues =
  //     type === "actif" ? activeIncrementValues : passiveIncrementValues;
  //   const price = prices[amount - 1];
  //   const incrementValue = incrementValues[amount - 1];
  //   if (wildCoin >= price) {
  //     if (type === "actif") {
  //       setIncrementClick(incrementClick + incrementValue);
  //     } else if (type === "passif") {
  //       setIncrementPerSecond(incrementPerSecond + incrementValue);
  //     }
  //     setWildCoin(wildCoin - price);
  //   } else {
  //     console.log("Pas assez de WildCoin pour acheter cette amélioration.");
  //   }
  // };

  return (
    <main>
      <div className="shoppagecontainer">
        <h1>Boutique</h1>
        <div className="cardcontainer">
          {shop.map((item) => {
            return (
              <BoutiqueCard
                key={item.name}
                name={item.name}
                price={item.price}
                incrementValue={item.incrementValue}
                description={item.description}
                image={item.image}
                link={item.link}
                type={item.type}
                buyed={item.buyed}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
