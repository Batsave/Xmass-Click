import "../scss/components/achievementscard.scss";
import PropTypes from "prop-types";

function AchievementsCard({ name, description, founded, image }) {
  AchievementsCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  return (
    <div className="achievCardcontainer">
      <div className="achievcontainer">
        <div
          className="achievcardpicture"
          style={{ backgroundImage: `url(${image})` }}
          alt={`image de ${name}`}
        >
          <div className="achievetitle">
            <p className="itemname">{name}</p>
            <div className="achievdescription">
              <p className="itemdescription">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementsCard;
