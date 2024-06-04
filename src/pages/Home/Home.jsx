import { getAllMovies } from "../../../api";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import { getSelectedMovie } from "../../../api";
import Preloader from "../../components/Preloader/Preloader";

// style.css
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const searchMovie = async (str, type, year) => {
    try {
      const dataSelected = await getSelectedMovie(str, type, year);

      setMovies(dataSelected?.Search ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allMovies();
  }, []);
  //
  const allMovies = async () => {
    try {
      const dataFetch = await getAllMovies();
      setMovies(dataFetch.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search searchMovie={searchMovie} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </div>
  );
}
