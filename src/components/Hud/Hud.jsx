import "../../scss/components/Hud.scss";

function Hud() {
  return (
    <div className="hudContainer">
      <div className="time">
        <p>Temps de jeu</p>
        <p>...</p>
      </div>
      <div className="auto">
        <p>Auto CPS</p>
        <p>...</p>
      </div>
      <div className="player">
        <p>Player CPS</p>
        <p>..</p>
      </div>
    </div>
  );
}

export default Hud;
