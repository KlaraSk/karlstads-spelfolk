import "./Footer.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Footer() {
  return (
    <footer className="footer  text-color__beige ">
      <nav className="footer__nav flex flex__column">
        <h3 className="henpm ading-4">Länkar till relaterade sidor</h3>
        <ul className="footer__nav-list flex body-base ">
          <li className="flex footer__nav-list-item">
            <a
              className="footer__nav-list-item-link text-color__beige "
              href="https://www.varmlandsspelmansforbund.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Värmlands spelmansförbund
            </a>
            <OpenInNewIcon aria-label="Öppna länk i nytt fönster" />
          </li>
          <li className="flex footer__nav-list-item">
            <a
              className="footer__nav-list-item-link text-color__beige "
              href="https://hembygdsgillet.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Länk till Hembygsgillet
            </a>
            <OpenInNewIcon aria-label="Öppna länk i nytt fönster" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
