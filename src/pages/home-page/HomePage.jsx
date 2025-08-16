import { useFetch } from "../../api/useFetch.js";
import List from "../../components/list/List.jsx";
import CentralPlayer from "../../components/central-player/CentralPlayer.jsx";
import { useContext, useEffect } from "react";
import SearchForm from "../../components/search-form/SearchForm.jsx";
import { CurrentTuneContext } from "../../App.jsx";

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
      <section className="flex flex__column page">
        <h1 className="sr-only">Karlstads spelfolk</h1>

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
