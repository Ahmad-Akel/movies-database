import MovieDetails from "./components/MovieDetails";
import MoviesList, { Movie, MoviesProps } from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const [searchValue, setSearchValue] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState<Array<Movie>>([]);
  const getMoviesRequest = async (searchValue: string) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e18d063c`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        console.error("API response is missing the Search field.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const saveToLocalStorage = (items: Movie[]) => {
    localStorage.setItem("favorite-movies", JSON.stringify(items));
  };
  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const storedFavoriteMovies = localStorage.getItem("favorite-movies");

    if (storedFavoriteMovies !== null) {
      const favoriteMovies = JSON.parse(storedFavoriteMovies);
      setFavoriteMovies(favoriteMovies);
    }
  }, []);

  const addFavoriteMovie = (movie: Movie) => {
    const favoriteMoviesList = [...favoriteMovies, movie];
    setFavoriteMovies(favoriteMoviesList);
    saveToLocalStorage(favoriteMoviesList);
  };
  const removeFavoriteMovie = (movie: Movie) => {
    const favoriteMoviesList = favoriteMovies.filter(
      (mov) => mov.imdbID !== movie.imdbID
    );
    setFavoriteMovies(favoriteMoviesList);
  };
  return (
    <div className="App">
      <ListHeader mainTitle="Movies" />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MoviesList
        movies={movies}
        handleFavoriteMovies={addFavoriteMovie}
        isFavoriteList={false}
      />
      <ListHeader mainTitle="Favorites" />
      <MoviesList
        movies={favoriteMovies}
        handleFavoriteMovies={removeFavoriteMovie}
        isFavoriteList={true}
      />
    </div>
  );
}

export default App;
