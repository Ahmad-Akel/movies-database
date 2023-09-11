import React from "react";
import "./App.css";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/favorate" element={<MoviesList />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
