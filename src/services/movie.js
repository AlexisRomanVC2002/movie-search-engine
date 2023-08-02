import { END_POINT, API_KEY, TYPE } from "../constants";
import { mapperMovies } from "./MapperMovie";

export async function searchMovies({search}) {

  if (search === "") return null;

  try {
    const response = await fetch(
      `${END_POINT}/?apikey=${API_KEY}&s=${search}&type=${TYPE}`
    );
    const json = await response.json();
    const movies = json.Search;

    return mapperMovies(movies);
  } catch (e) {
    throw new Error("Error searching movies");
  }
}
