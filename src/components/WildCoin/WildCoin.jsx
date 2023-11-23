import { useWildCoin } from "./WildCoinContext";
import WildCoinIncrementAction from "./WildCoinIncrementAction";

function WildCoin() {
  const { wildCoin } = useWildCoin();
  const { incrementClick, incrementPerSecond } = useWildCoin();

  return (
    <>
      <div className="WildCoin">
        <h2>WildCoin</h2>
        <p>{wildCoin}</p>
        <WildCoinIncrementAction />
        <p className="tetardCoinClick">
          Taux de génération actif : Lv.{incrementClick} par onClick
        </p>

        <p className="tetardCoinPassif">
          Taux de génération passif : Lv.{incrementPerSecond} par seconde
        </p>
      </div>
    </>
  );
}

export default WildCoin;
