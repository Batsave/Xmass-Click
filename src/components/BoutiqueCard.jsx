export default function BoutiqueCard() {

  return (
    <div style={{backgroundImage:url(hello)}} className="card">
      <div className="container">
        <div className="cardpicture" />
        <div>
          <div className="titlesection">
            <p className="Itemname">Item name</p>
            <div className="price">
              <p className="Itemprice">Item price</p>
              <div className="pricecard" />
            </div>
          </div>
          <div className="description">
            <p className="Itemdescription">Item description</p>
          </div>
          <button className="buttoncard" type="button">
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
