import { createContext, useContext, useState, useEffect } from "react";

export const WildCoinContext = createContext();

export const useWildCoin = () => {
  return useContext(WildCoinContext);
};

export function WildCoinProvider({ children }) {
  const [wildCoin, setWildCoin] = useState(0);
  const [incrementClick, setIncrementClick] = useState(1);
  const [incrementPerSecond, setIncrementPerSecond] = useState(1);

  const incrementWildCoin = (amount) => {
    setWildCoin((prevWildCoin) => prevWildCoin + amount);
  };

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      incrementWildCoin(incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [incrementPerSecond]);

  const value = {
    wildCoin,
    setWildCoin,
    incrementClick,
    incrementWildCoin,
  };

  return (
    <WildCoinContext.Provider value={value}>
      {children}
    </WildCoinContext.Provider>
  );
}
