import Movie from "../Movie/Movie";

// style.css
import "./Movies.css";

export default function Movies({ movies }) {
  return (
    <div className="movies-all">
      {movies.length ? (
        movies.map((item) => {
          return <Movie key={item.imdbID} {...item} />;
        })
      ) : (
        <h4>Нет фильмов</h4>
      )}
    </div>
  );
}
