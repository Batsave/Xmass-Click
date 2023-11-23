import "../../scss/components/Hud.scss";
import { useWildCoin } from "../WildCoin/WildCoinContext";
import { useState } from "react";

function Hud() {
  const { incrementClick, incrementPerSecond } = useWildCoin();

  return (
    <div className="hudContainer">
      <div className="time">
        <p>Temps de jeu</p>
        <p>...</p>
      </div>
      <div className="auto">
        <p>Auto CPS</p>
        <p>{incrementPerSecond}</p>
      </div>
      <div className="player">
        <p>Player CPS</p>
        <p>{incrementClick}</p>
      </div>
    </div>
  );
}

export default Hud;
