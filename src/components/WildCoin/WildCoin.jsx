import { useWildCoin } from "./WildCoinContext";
import WildCoinIncrementAction from "./WildCoinIncrementAction";

function WildCoin() {
  const { wildCoin } = useWildCoin();

  return (
    <div className="WildCoin">
      <h2>WildCoin</h2>
      <p>WildCoin : {wildCoin}</p>
      <WildCoinIncrementAction />
    </div>
  );
}

export default WildCoin;
