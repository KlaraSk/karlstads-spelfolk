import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <ul className=" nav__list flex">
        <li className="heading-2 nav__list-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-color__dark-grey  nav__list-item-active" : "text-color__light-grey  nav__list-item-link"
            }
            to="/"
          >
            Låtarna
          </NavLink>
        </li>
        <li className="heading-2 nav__list-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-color__dark-grey  nav__list-item-active" : "text-color__light-grey  nav__list-item-link"
            }
            to="/om-karlstads-spelfolk"
          >
            Om spelmanslaget
          </NavLink>
        </li>
        <li className="heading-2 nav__list-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-color__dark-grey  nav__list-item-active" : "text-color__light-grey  nav__list-item-link"
            }
            to="/bli-medlem"
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
