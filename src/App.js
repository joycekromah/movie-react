import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import React, {useState}   from "react";


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <h3>Lägg till en film</h3>

      <MovieForm movies={movies} setMovies={setMovies}></MovieForm>
      <hr/>

      <h3>Inlagda filmer</h3>
      <MovieList  movies={movies} setMovies={setMovies}></MovieList>
    </div>
  );
}

export default App;
