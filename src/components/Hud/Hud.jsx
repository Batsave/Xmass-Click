import "../../scss/components/Hud.scss";
import { useWildCoin } from "../WildCoin/WildCoinContext";
import propTypes from "prop-types";

function Hud({ isVisible }) {
  Hud.propTypes = {
    isVisible: propTypes.bool.isRequired,
  };

  const {
    manic,
    snowman,
    bonnet,
    sugar,
    cookie,
    couronne,
    epice,
    biere,
    coffee,
  } = useWildCoin();

  const { incrementClick, incrementPerSecond } = useWildCoin();
  const hiddenDiv = isVisible ? "none" : null;

  return (
    <div className="hudContainer">
      <div style={{ display: hiddenDiv }} className="hudStats">
        <div className="time section">
          <p>Temps de jeu</p>
          <p>...</p>
        </div>
        <div className="auto section">
          <p>Auto CPS</p>
          <p>{incrementPerSecond}</p>
        </div>
        <div className="player section">
          <p>Player CPS</p>
          <p>{incrementClick}</p>
        </div>
        
      </div>
      <div className="hudBooster">
          {coffee[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/tasse.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
              <p className="boosterCount">{coffee[1]}</p>
              </div>
            </div>
          ) : null}
          {manic[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Hand.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
              <p className="boosterCount">{manic[1]}</p>
              </div>
            </div>
          ) : null}
          {snowman[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Bonhome.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{snowman[1]}</p>
              </div>
            </div>
          ) : null}
          {bonnet[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Bonnet.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{bonnet[1]}</p>
              </div>
            </div>
          ) : null}
          {sugar[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Canne.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{sugar[1]}</p>
              </div>
            </div>
          ) : null}
          {cookie[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Cookie.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{cookie[1]}</p>
              </div>
            </div>
          ) : null}
          {couronne[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Courone.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{couronne[1]}</p>
              </div>
            </div>
          ) : null}
          {epice[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/PainDep.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{epice[1]}</p>
              </div>
            </div>
          ) : null}
          {biere[0] === true ? (
            <div className="boosterItem">
              <div
                className="boosterIcon"
                style={{ backgroundImage: `url(public/svg/Beer.svg)` }}
                alt="coffee"
              />
              <div className="countbox">
                <p className="boosterCount">{biere[1]}</p>
              </div>
            </div>
          ) : null}
        </div>
    </div>
  );
}

export default Hud;
