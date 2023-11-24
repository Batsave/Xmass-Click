import "../../scss/components/Hud.scss";
import { useWildCoin } from "../WildCoin/WildCoinContext";
import { useState } from "react";
import Timer from "../timer/Timer";

function Hud({ isVisible }) {
  const { incrementClick, incrementPerSecond } = useWildCoin();
  const hiddenDiv = isVisible ? "none" : null

  return (

    <div style={{display:hiddenDiv}} className="hudContainer">
      <div className="time">
        <p>Temps de jeu</p>
        <p><Timer /></p>
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
