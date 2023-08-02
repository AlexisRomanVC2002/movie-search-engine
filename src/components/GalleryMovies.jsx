import { CardMovie } from "./CardMovie";

export function GalleryMovies({ movies }) {
  return (
    <div
      className="Movies"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 0.5fr))",
        gap: "30px",
        width: "100%",
        justifyContent: "center"
      }}
    >
      {movies.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
