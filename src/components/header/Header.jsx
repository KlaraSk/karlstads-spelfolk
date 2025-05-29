import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./Header.css";

Navigation;
function Header() {
  return (
    <header className="flex flex__column header wrapper">
      <Link to="/">
        <img src="/karlstads-spelfolk.svg" alt="Karlstads spelfolk" className="header__logo" />
      </Link>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
