import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../scss/components/navbar.scss";
import "../scss/root.scss";

import PrimaryButton from "./buttons/PrimaryButton";
import Burger from "./burger";
import { useWildCoin } from "./WildCoin/WildCoinContext";
import WildCoinIncrementAction from "./WildCoin/WildCoinIncrementAction";
import HUDON from "../../public/NavBar/HUDON.svg";
import HUDOFF from "../../public/NavBar/HUDOFF.svg";
import { useState } from "react";


export default function Navbar({ navData, isVisible, setIsVisible }) {
  const { wildCoin } = useWildCoin();
  const [imageSrc, setImageSrc] = useState(HUDON);

  const toggleHud = () => {
  
    if (!isVisible) {
      setIsVisible(true)
      setImageSrc(HUDOFF)
    }else{
      setIsVisible(false)
      setImageSrc(HUDON)
    }
  }
  return (
    <nav className="header-main">
      <Link
        className="logo"
        to="/accueil"
        aria-label="Retourner à la page d'accueil"
        title="Logo XmassClick"
      />
      <div className="navbar">
      <div className="wildCoin">
          {wildCoin}
          <WildCoinIncrementAction />
          </div>
        <ul className="nav-list">
          
          {navData.map((navIndex) => {
            if (navIndex.dropdown === undefined) {
              return navIndex.btn === false ? (
                <li key={navIndex.id}>
                  <Link className="mainLink" to={navIndex.linkurl}>
                    {navIndex.linkname}
                  </Link>
                </li>
              ) : (
                <li key={navIndex.id}>
                  <PrimaryButton
                    btnText={navIndex.linkname}
                    btnLink={navIndex.linkurl}
                  />
                </li>
              );
            }
            return (
              <li key={navIndex.id} className="dropdown">
                <Link className="mainLink" to={navIndex.linkurl}>
                  {navIndex.linkname}
                </Link>
                <ul className="dropdown-content">
                  {navIndex.dropdown.map((dropdown) => (
                    <li key={dropdown.id}>
                      <Link
                        className="dropLink"
                        to={navIndex.linkurl + dropdown.linkurl}
                      >
                        {dropdown.linkname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <img onClick={() => toggleHud()} src={imageSrc} style={{height:'28px'}} alt="boutton on" />
        <Burger navData={navData} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      btn: PropTypes.bool,
      id: PropTypes.string,
      linkname: PropTypes.string,
      linkurl: PropTypes.string,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          btn: PropTypes.bool,
          id: PropTypes.string,
          linkname: PropTypes.string,
          linkurl: PropTypes.string,
        })
      ),
    })
  ),
};

Navbar.defaultProps = {
  navData: [],
};
