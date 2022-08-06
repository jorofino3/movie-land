import { useEffect } from "react";

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
  return <div>App</div>;
}

export default App;
