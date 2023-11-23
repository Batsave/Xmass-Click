import { useWildCoin } from "./WildCoinContext";

function WildCoinIncrementAction() {
  const { incrementClick, incrementWildCoin } = useWildCoin();

  const handleIncrement = () => {
    incrementWildCoin(incrementClick);
  };

  return (
    <button className="wildCoinBtn" onClick={handleIncrement}>
      WildCoin
    </button>
  );
}

export default WildCoinIncrementAction;
