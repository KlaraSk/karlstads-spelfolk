import { useFetch } from "../../api/useFetch.js";
import List from "../../components/list/List.jsx";
import "./HomePage.css";
useFetch;

function HomePage() {
  const url = "http://localhost:7070/api/tunes";
  const { tunes, isLoading, isError } = useFetch(url);
  return (
    <section className="page home-page">
      <h1 className="sr-only">Karlstads spelfolk</h1>

      <p className="body-base text-color__dark-grey home-page__text">
        Varje onsdag kl 19.00 samlas ett gäng muntra musikanter från Värmlands alla hörn i Karlstad för att spela ihop. Vi spelar svängig
        folkmusik från när och fjärran, fast mest från platsen som har kyanitkvartsiten som landskapssten . Här hittar du vår repertoar.
        Smaklig spelspis!
      </p>
      {isError && <p>Error</p>}
      {isLoading && <p>Loading</p>}
      {tunes && <List tunes={tunes}></List>}
    </section>
  );
}

export default HomePage;
