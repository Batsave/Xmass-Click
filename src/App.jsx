import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hud from "./components/Hud/Hud";

import "./scss/root.scss";
import "./scss/components/footer.scss";

import navData from "./data/NavBarData.json";

function App() {
  const [url, setUrl] = useState("https://opentdb.com/api.php?amount=1");

  return (
    <>
      <Navbar setUrl={setUrl} navData={navData} />
      <Hud />
      <main>
        <Outlet context={[url, setUrl]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
