import AchievementsCard from "../components/AchievementsCard";
import "../scss/achievements.scss";
import achievements from "../data/Achievements.json";

function Achievements() {
  return (
    <div className="fullachieve">
    <h1>Succès</h1>
    <div className="achievementscontainer">
      <div className="achievementscardcontainer">
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
    </div>
  );
}

export default Achievements;
