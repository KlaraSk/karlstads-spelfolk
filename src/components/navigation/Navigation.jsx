import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className=" nav__list flex">
        <li className="heading-2 nav__list-item">
          <Link className="text-color__light-grey  nav__list-item-link" to="/">
            Låtarna
          </Link>
        </li>
        <li className="heading-2 nav__list-item">
          <Link className="text-color__light-grey  nav__list-item-link" to="/om-karlstads-spelfolk">
            Om spelmanslaget
          </Link>
        </li>
        <li className="heading-2 nav__list-item">
          <Link className="text-color__light-grey  nav__list-item-link" to="/bli-medlem">
            Bli medlem
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
