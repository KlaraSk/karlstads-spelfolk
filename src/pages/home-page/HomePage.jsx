import List from "../../components/list/List.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="page home-page">
      <p className="body-base text-color__dark-grey home-page__text">
        Varje onsdag kl 19.00 samlas ett gäng muntra musikanter från Värmlands alla hörn i Karlstad för att spela ihop. Vi spelar svängig
        folkmusik från när och fjärran, fast mest från platsen som har kyanitkvartsiten som landskapssten . Här hittar du vår repertoar.
        Smaklig spelspis!
      </p>
      <List></List>
    </section>
  );
}

export default HomePage;
