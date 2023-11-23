import { createContext, useContext, useState, useEffect } from "react";

export const WildCoinContext = createContext();
export const useWildCoin = () => {
  return useContext(WildCoinContext);
};

export function WildCoinProvider({ children }) {
  const initialState = {
    wildCoin: 0,
    incrementClick: 1,
    incrementPerSecond: 0,
  };

  const [state, setState] = useState(initialState);

  const updateWildCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      wildCoin: prev.wildCoin + amount,
    }));
  };

  const incrementWildCoin = (amount) => {
    updateWildCoin(amount);
  };

  const setIncrementClick = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementClick: amount,
    }));
  };

  const setIncrementPerSecond = (amount) => {
    setState((prev) => ({
      ...prev,
      incrementPerSecond: amount,
    }));
  };

  const setWildCoin = (amount) => {
    setState((prev) => ({
      ...prev,
      wildCoin: amount,
    }));
  };

  useEffect(() => {
    const passiveGenerationInterval = setInterval(() => {
      updateWildCoin(state.incrementPerSecond);
    }, 1000);

    return () => clearInterval(passiveGenerationInterval);
  }, [state.incrementPerSecond]);

  const contextValue = {
    ...state,
    incrementWildCoin,
    setIncrementClick,
    setIncrementPerSecond,
    setWildCoin,
  };

  return (
    <WildCoinContext.Provider value={contextValue}>
      {children}
    </WildCoinContext.Provider>
  );
}
