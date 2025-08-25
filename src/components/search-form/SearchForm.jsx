import { useEffect, useMemo, useState, useRef } from "react";
import "./SearchForm.css";
useEffect;
import { Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { ControlButton } from "../../components-styled/button/Button.styles.js";
import debounce from "lodash.debounce";
import clsx from "clsx";

function SearchForm({}) {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Ref
  const formRef = useRef(null);

  const fetchQuery = (query) => {
    if (query.length === 0) return;

    fetch(`http://localhost:7070/api/tunes/autocomplete?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.tunes.length === 0) {
          const tunes = [
            {
              tuneId: "no-results-msg-id",
              title: "Inga träffar",
            },
          ];

          setSearchResults(tunes);
        } else {
          setSearchResults(data.tunes);
        }
      });
  };

  // Debounce is a function that accepts a function, returns another function, and has a tracker inside that detects whether the passed function was called sooner than the provided interval. If sooner - then skip the execution and re-start the clock. If the interval passed - call the passed function.
  const debouncedFetch = useMemo(() => debounce(fetchQuery, 300), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFetch(value);
  };

  useEffect(() => {
    setIsVisible(true);
    inputValue.length < 1 && setIsVisible(false);
  }, [inputValue]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);
    navigate(`/search/?q=${encodeURIComponent(inputValue)}`);
  };

  const handleRemoveInput = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const classNames = clsx("flex", "form", { "form--is-visible": isVisible });

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={classNames}>
      <label htmlFor="searchinput" className="sr-only">
        Sök efter en låt
      </label>
      <ControlButton onClick={handleSubmit}>
        <Search className="text-color__red form__search-icon"></Search>
      </ControlButton>

      <input
        className={"body-base text-color__dark-green form__input"}
        id="searchinput"
        type="search"
        name="searchinput"
        placeholder="Vad vill du lyssna på?"
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
      />
      {isVisible && (
        <ControlButton onClick={handleRemoveInput}>
          <CloseIcon></CloseIcon>
        </ControlButton>
      )}

      {isVisible && (
        <ul className="flex flex__column form__list">
          {searchResults.map((result) => {
            return (
              <li className="body-base  form__list-item" key={result.tuneId}>
                <Link className="text-color__beige form__list-link" to={`/search/?q=${encodeURIComponent(result.title)}`}>
                  {result.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
