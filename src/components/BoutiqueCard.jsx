import { useWildCoin } from "./WildCoin/WildCoinContext";
import "../scss/components/boutiquecard.scss";
import PropTypes from "prop-types";
import "../scss/components/buttons.scss";

export default function BoutiqueCard({
  name,
  price,
  incrementValue,
  description,
  image,
  link,
  type,
  buyed,
}) {
  BoutiqueCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    incrementValue: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    buyed: PropTypes.bool.isRequired,
  };
  const {
    wildCoin,
    incrementClick,
    setWildCoin,
    setIncrementClick,
    incrementPerSecond,
    setIncrementPerSecond,
  } = useWildCoin();

  const acheterAmelioration = (type, price) => {
    const prices = price;
    const value = prices;

    if (wildCoin >= value) {
      if (type === "actif") {
        setIncrementClick(incrementClick + incrementValue);
      } else if (type === "passif") {
        setIncrementPerSecond(incrementPerSecond + incrementValue);
      }
      setWildCoin(wildCoin - value);
    } else {
      console.log("Pas assez de WildCoin pour acheter cette amélioration.");
    }
  };
  return (
    <div className="shopcardcontainer">
      <div className="shopcontainer">
        <div
          className="cardpicture"
          style={{ backgroundImage: `url(${image})` }}
          alt={`image de ${name}`}
        />
        <div>
          <div className="titlesection">
            <p className="itemname">{name}</p>
            <div className="price">
              <p className="itemprice">{price}</p>

              <div className="priceicon" />
            </div>
          </div>
          <div className="description">
            <p className="itemdesc">
              <em>
                {type} + {incrementValue}
              </em>
            </p>
            <p className="itemdesc">{description}</p>
          </div>
        </div>
        <button
          onClick={() => acheterAmelioration(type, price)}
          className="primary-button"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
