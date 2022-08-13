import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./images/search.svg";
import "./App.css";

const API_URL = "API_KEY";

const App = () => {
  //State for what is being searched
  const [searchTerm, setSearchTerm] = useState("");
  //State for the movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  //API Query
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for movies'
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
