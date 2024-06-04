import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../../api";
import SelectedMovies from "../../components/SelectedMovie/SelectedMovie";

// style.css
import "./Selected.css";

export default function Selected() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const getMovieId = async () => {
    try {
      const data = await getMovie(id);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieId();
  }, [id]);

  return (
    <div>
      <SelectedMovies movie={movie} />
    </div>
  );
}
