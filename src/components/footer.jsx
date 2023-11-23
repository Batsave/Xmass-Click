import "../scss/components/footer.scss";
import { NavLink as Link } from "react-router-dom";
import CardContact from "../components/cardsContact/cardContact";

const infoDev = [
  {
    "id": "1",
    "name": "Alix C",
    "gitHub": "https://github.com/Halicksse",
  },
  {
    "id": "2",
    "name": "Sebatien L",
    "gitHub": "https://github.com/Lambseb",
  },
  {
    "id": "3",
    "name": "Baptiste S",
    "gitHub": "https://github.com/Batsave",
  },
  {
    "id": "4",
    "name": "Kevin T",
    "gitHub": "https://github.com/tetardtek",
  },
  {
    "id": "5",
    "name": "Nicolas DF",
    "gitHub": "https://github.com/Defreitasnicolas",
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link
          to="/#home"
          className="footer-logo"
          alt="Logo"
          aria-label="Logo Officiel"
          title="Aller à la page d'accueil"
        />
        <div className="section">
          <p className="section-title">Informations</p>
          <p className="section-text">
            XXX
            <br />
            XXX
            <br />
            XXX
            <br />
            XXX
          </p>
        </div>
        <div className="section">
          <p className="section-title">A propos</p>
          <p className="section-text">Description</p>
        </div>

        <div className="section">
          <p className="section-title">Légale</p>
          <ul className="section-list">
            <li className="section-item">
              <Link
                to="/mentionslegales"
                title="Aller à la page Mentions Légales"
              >
                Mentions Légales
              </Link>
            </li>
            <li className="section-item">
              <Link to="/cookies" title="Aller à la page Cookies">
                Cookies
              </Link>
              
            </li>
            <li className="section-item"></li>
          </ul>
        </div>
        <div className="spacing" />
      </div>
      <div className="footer-section">
      <div className="cardContactContainer">
        {infoDev.map((info) => (
          <CardContact key={info.id} name={info.name} gitHub={info.gitHub} />
        ))}
      </div>
        <p className="copyright">© 2023 | XX. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
