import { useWildCoin } from "./WildCoinContext";
import WildCoinS from "../../../public/WildCoin.svg";

function WildCoinIncrementAction() {
  const { incrementClick, incrementWildCoin } = useWildCoin();

  const handleIncrement = () => {
    incrementWildCoin(incrementClick);
  };

  return (
    <img src={WildCoinS} className="wildCoinBtn" onClick={handleIncrement} />
  );
}

export default WildCoinIncrementAction;
