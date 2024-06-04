import { useState } from "react";

// style.css
import "./Search.css";

export default function Search({ searchMovie }) {
  const [search, setSearch] = useState("");

  const [year, setYear] = useState(2024);

  const [genre, setGenre] = useState("all");

  const handleGenre = (event) => {
    return setGenre(event.target.value);
  };

  // lessen start

  const handleYear = (event) => {
    return setYear(+event.target.value);
  };

  return (
    <div className="main-wrapper">
      <input
        className="main-input"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button
        className="main-btn"
        onClick={() => searchMovie(search, genre, year)}
      >
        SEARCH
      </button>

      <div className="col s12 block">
        <span className="filters-radio">Genre:</span>
        <div>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="all"
              type="radio"
              checked={genre === "all"}
              onChange={handleGenre}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="movie"
              type="radio"
              checked={genre === "movie"}
              onChange={handleGenre}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="game"
              type="radio"
              checked={genre === "game"}
              onChange={handleGenre}
            />
            <span>Game only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="series"
              type="radio"
              checked={genre === "series"}
              onChange={handleGenre}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="episode"
              type="radio"
              checked={genre === "episode"}
              onChange={handleGenre}
            />
            <span>Episode only</span>
          </label>
        </div>
      </div>

      <div className="col s12 block">
        <span className="filters-radio">Year:</span>
        <div>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2024"
              type="radio"
              checked={year === 2024}
              onChange={handleYear}
            />
            <span>2024</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2023"
              type="radio"
              checked={year === 2023}
              onChange={handleYear}
            />
            <span>2023</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2022"
              type="radio"
              checked={year === 2022}
              onChange={handleYear}
            />
            <span>2022</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2021"
              type="radio"
              checked={year === 2021}
              onChange={handleYear}
            />
            <span>2021</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2020"
              type="radio"
              checked={year === 2020}
              onChange={handleYear}
            />
            <span>2020</span>
          </label>
        </div>
      </div>
    </div>
  );
}
