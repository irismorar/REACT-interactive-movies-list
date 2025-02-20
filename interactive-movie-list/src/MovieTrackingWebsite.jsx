import { useState } from "react";
import { moviesDatabase } from "./moviesDatabase";
import "./MovieTrackingWebsite.css";

function TitleWebsite() {
  return <h1>Browse and Search Movies</h1>;
}

function SearchInput({ onSearch }) {
  return (
    <input
      className="search_movie_input"
      type="text"
      placeholder="Search..."
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

function MoviesList({ movies, setMoviesState, isWishlist }) {
  return (
    <div className="movies_list_container">
      {movies.length > 0 ? (
        <ul className="movies_list">
          {movies.map((movie, index) => {
            return (
              <li key={movie.id}>
                <img src={movie.src} />
                <br />
                <span>{movie.title}</span>
                <em>{movie.year}</em>
                {!isWishlist && (
                  <button
                    onClick={() => {
                      const newState = [...movies];
                      newState[index].isInWishlist =
                        !newState[index].isInWishlist;
                      setMoviesState(newState);
                    }}
                  >
                    {movie.isInWishlist
                      ? "Remove from wishlist"
                      : "Add to wishlist"}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Access Denied: No Results</p>
      )}
    </div>
  );
}

export default function MovieTrackingWebsite() {
  const [page, setPage] = useState("all movies"); // "wishlist"
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesState, setMoviesState] = useState(moviesDatabase);

  const filteredMovies = moviesState.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );

  const movieWishlist = moviesState.filter((movie) => movie.isInWishlist);

  return (
    <>
      <TitleWebsite />
      <button
        className="button_page first"
        onClick={() => setPage("all movies")}
      >
        All movies
      </button>
      <button className="button_page" onClick={() => setPage("wishlist")}>
        Wishlist
      </button>
      <br />
      <br />
      {page === "all movies" && (
        <>
          <SearchInput onSearch={setSearchMovie} />
          <MoviesList
            movies={filteredMovies}
            setMoviesState={setMoviesState}
            isWishlist={false}
          />
        </>
      )}
      {page === "wishlist" && (
        <div className="movies_list_container">
          <MoviesList movies={movieWishlist} isWishlist={true} />
        </div>
      )}
    </>
  );
}
