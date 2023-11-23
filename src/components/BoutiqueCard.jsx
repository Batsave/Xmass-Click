import "../scss/components/boutiquecard.scss";
import PrimaryBtn from "./buttons/PrimaryButton";

export default function BoutiqueCard() {
  let backgroundImage =
    "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png')";
  return (
    <div className="shopcardcontainer">
      <div className="shopcontainer">
        <div
          className="cardpicture"
          style={{ backgroundImage: `${backgroundImage}` }}
        />
        <div>
          <div className="titlesection">
            <p className="itemname">Item name</p>
            <div className="price">
              <p className="itemprice">Item price</p>
              <div className="priceicon" />
            </div>
          </div>
          <div className="description">
            <p className="itemdesc">Item description</p>
          </div>
          
        </div>
        <PrimaryBtn className="buttoncard" btnText="Acheter" btnLink="/#" />
      </div>
    </div>
  );
}
