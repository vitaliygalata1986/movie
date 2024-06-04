import { Link } from "react-router-dom";

// style.css
import "./Movie.css";

export default function Movie({ imdbID: id, Title, Year, Poster, Type }) {
  // const newYear = Year.split("");

  function newYear(str) {
    return str.replace(/–/g, "");
  }

  return (
    <div className="movie-box">
      <div className="movie-img-wrap">
        <Link className="link-movie-img-wrap" to={`/selectedmovie/${id}`}>
          {Poster === "N/A" ? (
            <img className="movie-img" src="./img/photo.jpg" alt="" />
          ) : (
            <img className="movie-img" src={Poster} alt="#" />
          )}
        </Link>
      </div>

      <ul className="movie-description">
        <li className="movie-title"> Title: {Title}</li>
        <li className="movie-type"> Type: {Type}</li>
        <li className="movie-year"> Year: {newYear(Year)}</li>
      </ul>
    </div>
  );
}
