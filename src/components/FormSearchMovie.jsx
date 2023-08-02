import { useCallback, useState } from "react";
import debounce from "just-debounce-it";

export function FormSearchMovie({ getMovies }) {
  const [input, setInput] = useState();
  const [sort, setSort] = useState(false);

  const debounceGetMovie = useCallback(
    debounce((search, sort) => {
      getMovies({ search, sort });
    }, 300),
    []
  );

  function handdleChange(e) {
    let newInput = e.target.value;
    setInput(newInput);
    debounceGetMovie(newInput, sort);
  }

  function handdleSumbit(e) {
    e.preventDefault();
    getMovies({ search: input, sort });
  }

  function handdleClick() {
    let newSort = !sort;
    setSort(newSort);
    getMovies({ search: input, sort: newSort });
  }

  return (
    <form className="form-search-movie" onSubmit={handdleSumbit}>
      <h1 className="title-form">MOVIE SEARCH ENGINE 🔍</h1>
      <input
        onChange={handdleChange}
        className="input-search"
        placeholder="Avengers, Matrix, The kid..."
      ></input>
      <div>
        <button>Search</button>
        <button
          className={sort ? "button-order active" : "button-order"}
          type="button"
          onClick={handdleClick}
        >
          Order A-Z
        </button>
      </div>
    </form>
  );
}
