import { useFetch } from "../../api/useFetch.js";
import List from "../../components/list/List.jsx";
import "./HomePage.css";
import CentralPlayer from "../../components/central-player/CentralPlayer.jsx";
import { useState, createContext, useContext, useEffect } from "react";
import SearchForm from "../../components/search-form/SearchForm.jsx";
import { CurrentTuneContext } from "../../App.jsx";

// const CurrentTuneContext = createContext(null);

function HomePage() {
  const url = "http://localhost:7070/api/tunes";
  const { tunes, isLoading, isError } = useFetch(url);

  // Context
  const { playList, setPlayList } = useContext(CurrentTuneContext);

  // Adds key isPlaying on each tune. Default false
  const defaultTunes = tunes.map((tune) => {
    return { ...tune, isPlaying: false };
  });

  useEffect(() => {
    setPlayList(defaultTunes);
  }, [tunes]);

  return (
    <>
      <section className="flex flex__column page home-page">
        <h1 className="sr-only">Karlstads spelfolk</h1>
        <p className="body-base text-color__dark-grey home-page__text">
          Varje onsdag kl. 19.00 samlas ett gäng muntra musikanter från Värmlands alla hörn i Karlstad för att spela ihop. Vi spelar svängig
          folkmusik från när och fjärran, fast mest från platsen med kyanitkvartsit som landskapssten. Här hittar du vår repertoar. Smaklig
          spelspis!
        </p>
        {isError && <p>Error</p>}
        {isLoading && <p>Loading</p>}
        {playList && <SearchForm />}
        {playList && <List></List>}
      </section>
      <CentralPlayer></CentralPlayer>
    </>
  );
}

export default HomePage;
