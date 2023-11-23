import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./scss/root.scss";
import "./scss/components/footer.scss";

import navData from "./data/NavBarData.json";
import WildCoin from "./components/WildCoin/WildCoin";
import { useWildCoin } from "./components/WildCoin/WildCoinContext";
import Ameliorations from "./components/WildCoin/Amelioration";

function App() {
  const [url, setUrl] = useState("https://opentdb.com/api.php?amount=1");
  const { incrementClick, incrementPerSecond } = useWildCoin();

  return (
    <>
      <Navbar setUrl={setUrl} navData={navData} />
      <main>
        <Outlet context={[url, setUrl]} />

        <p className="wildCoinClick">
          Taux de génération actif : Lv.{incrementClick} par onClick
        </p>

        <p className="wildCoinPassif">
          Taux de génération passif : Lv.{incrementPerSecond} par seconde
        </p>
        <Ameliorations />
      </main>
      <Footer />
    </>
  );
}

export default App;
