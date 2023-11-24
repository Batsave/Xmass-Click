import { useState } from "react";
import AchievementsCard from "../components/AchievementsCard";
import "../scss/achievements.scss";
import { useWildCoin } from "../components/WildCoin/WildCoinContext";
import achievements from "../data/Achievements.json";

function Achievements() {
  const [number, setNumber] = useState(1);
  const { wildCoin, updateWildCoin, incrementClick } = useWildCoin();

  const handleClick = () => {
    setNumber(number + 1);
  };
  return (
    <div className="fullachieve">
      <h1>Succès</h1>
      <div className="achievementscontainer">
        <div className="achievementscardcontainer">
          {achievements &&
            achievements.slice(0, number).map((a) => {
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
