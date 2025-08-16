import InfoSection from "../../components/info-section/InfoSection";
import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="flex flex__column page about-page text-color__dark-grey">
      <h1 className="sr-only">Om spelmanslaget</h1>
      <p className="body-large text-color__dark-grey about-page__text">
        Varje onsdag kl. 19.00 samlas ett gäng muntra musikanter från Värmlands alla hörn i Karlstad för att spela ihop. Vi spelar svängig
        folkmusik från när och fjärran, fast mest från platsen med kyanitkvartsit som landskapssten. Här hittar du vår repertoar. Smaklig
        spelspis!
      </p>
      <InfoSection title={"Reptider"} imgSrc={"src/assets/sample-img-3.png"}>
        <h3 className="heading-4 about-page__time">18.45</h3>
        <p className="body-small">Stämning, uppvärmning</p>
        <h3 className="heading-4 about-page__time">19.00</h3>
        <p className="body-small">Övning med fokus på låtar, teknik och arrangemang inför kommande spelningar.</p>
        <h3 className="heading-4 about-page__time">Cirka 20.00</h3>
        <p className="body-small">Fika. Kvällens höjdpunkt?</p>
        <h3 className="heading-4 about-page__time">Efter fikat - cirka 21.30</h3>
        <p className="body-small">
          Efter fikat är det fritt spel. Vi lirar gamla och nya låtar och lär av varandra. Utmärkt att börja med detta pass när man är ny i
          Karlstads Spelfolk och vill utöka och förbättra sitt spel.
        </p>
      </InfoSection>
      <InfoSection isMap={true} title={"Hitta till replokalen"}>
        <p className="body-base about-page__map-text">
          Hembygdsgillet ligger på Norra Kroppkärr i Karlstad. Parkering finns i nära anslutning till lokalen.
        </p>
        <br />
        <p className="body-base about-page__map-text">
          Närmsta busshållplats är Talludden. Dit går buss nr 2 och 4.{" "}
          <a href="https://www.varmlandstrafik.se/" className="body-base text-color__dark-grey">
            Länk till Värmlandstrafiks webbsida.
          </a>
        </p>
      </InfoSection>
    </section>
  );
}

export default AboutPage;
