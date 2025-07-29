import { useEffect, useState } from "react";
import "./SearchForm.css";
useEffect;
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function SearchForm({ tunes }) {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const results = tunes.filter((obj) => inputValue.length > 1 && obj.title.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(results);

    setIsVisible(true);

    const noResultMsg = [
      {
        tuneId: "no-results-msg-id",
        name: "Inga träffar.",
      },
    ];

    results.length === 0 ? setSearchResults(noResultMsg) : setSearchResults(results);

    inputValue.length < 1 && setIsVisible(false);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);
    console.log("Submitted");
    //! Lägg till navigering/rendering av ny lista med sökresultat?
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="searchinput" className="sr-only">
        Sök efter en låt
      </label>
      <input className="form__input" id="searchinput" type="text" name="searchinput" onChange={handleChange} value={inputValue} />
      {isVisible &&
        searchResults.map((result) => {
          return (
            <li className="form__list-item" key={result.tuneId}>
              <Link className="form__list-link" to={`/event/${result.id}`}>
                {result.title}
              </Link>
            </li>
          );
        })}
    </form>
  );
}

export default SearchForm;
