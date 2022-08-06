import { useEffect } from "react";
import SearchIcon from "./images/search.svg";
import "./App.css";

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=a55351fd";

  //call to the API to search a movie
  const searchMovies = async (title) => {
    //retrieval
    const response = await fetch(`${API_URL}&s=${title}`);
    //data returned from the API call
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Harry Potter");
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value='Harry Potter'
          onChange={() => {
            //change to come
          }}
        />

        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {
            //when the user clicks the search
          }}
        />
      </div>
    </div>
  );
}

export default App;
