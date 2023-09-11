import React from "react";
import "./App.css";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <MovieSearch />
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default App;
