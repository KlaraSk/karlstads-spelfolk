import LocationMap from "../../components/map/Map";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="flex flex__column page about-page">
      <h1 className="sr-only">Om spelmanslaget</h1>
      <section className="about-page__section">
        <img src="src/assets/sample-img-1-fix.jpg" alt="Sample img" className="about-page__img" />
        <h2 className="heading-2 about-page__subtitle">Reptider</h2>
        <p className="heading-4">Vi övar på onsdagar i Hembygsgillets lokaler på Kroppkärr. Ungefär såhär brukar repen vara upplagda: </p>

        <h3 className="heading-4 about-page__time">18.45</h3>
        <p className="body-base">Stämning, uppvärmning</p>
        <h3 className="heading-4 about-page__time">19.00</h3>
        <p className="body-base">Övning med fokus på låtar, teknik och arrangemang inför kommande spelningar.</p>
        <h3 className="heading-4 about-page__time">Ca 20.00</h3>
        <p className="body-base">Fika. Kvällens höjdpunkt?</p>
        <h3 className="heading-4 about-page__time">Efter fikat - ca 21.30</h3>
        <p className="body-base">
          Efter fikat är det fritt spel. Vi lirar gamla och nya låtar och lär av varandra. Utmärkt att börja med detta pass när man är ny i
          Karlstads Spelfolk och vill utöka och förbättra sitt spel.
        </p>
      </section>
      <section className="about-page__section">
        <LocationMap />
        <h2 className="heading-2 about-page__subtitle">Hitta till replokalen</h2>
        <p className="body-base about-page__map-text">
          Hembygdsgillet ligger på Norra Kroppkärr i Karlstad. Parkering finns i nära anslutning till lokalen.
        </p>
        <p className="body-base about-page__map-text">
          Närmsta busshållplats är Talludden. Dit går buss nr 2 och 4.{" "}
          <a href="https://www.varmlandstrafik.se/" className="text-color__dark-grey">
            Länk till Värmlandstrafiks webbsida.
          </a>
        </p>
      </section>
    </section>
  );
}

export default AboutPage;
