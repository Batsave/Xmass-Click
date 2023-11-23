import "../scss/components/boutiquecard.scss";
import PrimaryBtn from "./buttons/PrimaryButton";
import PropTypes from "prop-types";

export default function BoutiqueCard({
  name,
  price,
  description,
  image,
  link,
}) {
  BoutiqueCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
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
            <p className="itemdesc">{description}</p>
          </div>
        </div>
        <PrimaryBtn className="buttoncard" btnText="Acheter" btnLink={link} />
      </div>
      
    </div>
  );
}
