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

function MoviesList({ movies }) {
  return (
    <div className="movies_list_container">
      {movies.length > 0 ? (
        <ul className="movies_list">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <img src={movie.src} />
                <br />
                <span>{movie.title}</span> . <em>{movie.year}</em>
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
  const [searchMovie, setSearchMovie] = useState("");

  const filteredMovies = moviesDatabase.filter((movie) => {
    movie.title.toLowerCase().includes(searchMovie.toLowerCase());
  });

  return (
    <>
      <TitleWebsite />
      <SearchInput onSearch={setSearchMovie} />
      <MoviesList movies={filteredMovies} />
    </>
  );
}
