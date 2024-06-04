// style.css
import "./SelectedMovie.css";

export default function SelectedMovie({ movie }) {
  console.log(movie);

  return (
    <div className="selectedMovie-wrap">
      <div className="box-img-plot">
        <div className="selectedMovie-wrap-img-s1">
          {movie.Poster === "N/A" ? (
            <img className="selected-img-s1" src="../img/photo.jpg" alt="#" />
          ) : (
            <img className="selected-img-s1" src={movie.Poster} alt="#" />
          )}
        </div>
        <div>
          <p className="selectedMovie-plot">
            <strong>Plot:</strong>
            {movie.Plot === "N/A" ? "Нет описания" : movie.Plot}
          </p>
          <div className="selectedMovie-line"></div>
          {/* start */}
          <ul className="selectedMovie-ul">
            <li className="selectedMovie-title"> Title: {movie.Title}</li>
            <li className="selectedMovie-year"> Year: {movie.Year}</li>
            <li className="selectedMovie-type"> Type: {movie.Type}</li>
            <li className="selectedMovie-type"> Type: {movie.Runtime}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
