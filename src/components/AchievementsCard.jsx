import "../scss/components/achievementscard.scss";
import PropTypes from "prop-types";

function AchievementsCard({ name, description, image }) {
  AchievementsCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  return (
    <div className="achievCardcontainer">
        <img
          className="achievecardpicture" src={image} alt="cartes speciales"/>
          <div className="achievetitle">
            <p className="achievname">{name}</p>
            <p className="achievdescription">{description}</p>
        </div>
    </div>
  );
}

export default AchievementsCard;
