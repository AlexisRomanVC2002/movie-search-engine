// Components
import { GalleryMovies } from "./components/GalleryMovies";
import { FormSearchMovie } from "./components/FormSearchMovie";

// Hooks
import { useMovies } from "./hooks/UseMovies";

// Styles
import "./App.css";

function App() {
  const { movies, error, getMovies } = useMovies();

  return (
    <main className="main">
      <FormSearchMovie getMovies={getMovies} />
      {error ? (
        <div className="error">{error && <p>❌ {error} 😔</p>}</div>
      ) : (
        <GalleryMovies movies={movies} />
      )}
    </main>
  );
}

export default App;
