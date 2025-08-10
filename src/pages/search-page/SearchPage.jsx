import List from "../../components/list/List.jsx";

import CentralPlayer from "../../components/central-player/CentralPlayer.jsx";
import { useState, useEffect, useContext } from "react";
import SearchForm from "../../components/search-form/SearchForm.jsx";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../api/useFetch.js";
import { CurrentTuneContext } from "../../App.jsx";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // Context
  const { playList, setPlayList } = useContext(CurrentTuneContext);

  const url = `http://localhost:7070/api/tunes/search?q=${query}`;

  const { tunes, isLoading, isError } = useFetch(url);

  useEffect(() => {
    setPlayList(tunes);
  }, [tunes]);

  return (
    <>
      <section className="page home-page flex flex__column">
        <SearchForm />
        <h1 className="body-large"> Du sökte efter "{query}":</h1>
        {isLoading && <section>Laddar...</section>}
        {isError && <section>Laddar...</section>}
        {playList && <List></List>}
      </section>
      <CentralPlayer></CentralPlayer>
    </>
    //! Add BasicButton back to start
  );
}

export default SearchPage;
