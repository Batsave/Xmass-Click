import AchievementsCard from "../components/AchievementsCard";
import "../scss/achievements.scss";
import achievements from "../data/shop";

function Achievements() {
  return (
    <div className="achievcontainer">
      <h1>Succès</h1>
      <div className="achievcardcontainer">
        {achievements.map((a) => {
          return (
            <AchievementsCard
              key={a.id}
              name={a.name}
              description={a.description}
              image={a.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Achievements;
