import { useState, useRef } from "react";

// Services
import { searchMovies } from "../services/movie";
import { handleSort } from "../services/handleSort";

export function useMovies() {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState(false);

  let previousSearch = useRef("");

  const getMovies = async ({ search, sort }) => {
    setSort(sort);
    if (!search || search === "") return;
    if (search === previousSearch.current) return;

    try {
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    }
  };

  const sortedMovies = sort ? handleSort(movies) : movies;

  return { movies: sortedMovies, error, getMovies };
}
