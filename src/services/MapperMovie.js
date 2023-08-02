export function mapperMovies(movies) {
  return movies.map(({imdbID, Title, Poster, Year}) => {
    return { id: imdbID, title: Title, year: Year, image: Poster };
  });
}
