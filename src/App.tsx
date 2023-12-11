import MovieDetails from "./components/MovieDetails";
import MoviesList, { Movie, MoviesProps } from "./components/MoviesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import SearchBox from "./components/SearchBox";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
const initialMovies = [
  {
    Title: "Breaking Bad Season 3: Silent But Deadly - The Brothers Moncada",
    Year: "2011",
    imdbID: "tt2380191",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
  },
  {
    Title: "Snow Globe: A Breaking Bad Short",
    Year: "2020",
    imdbID: "tt11828264",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzZlODUzY2UtYzU3My00M2EzLTgzOGUtNzlmZTQwNWE2MTVjXkEyXkFqcGdeQXVyMTQ0NjE2NTI@._V1_SX300.jpg",
  },
];
function App() {
  const [movies, setMovies] = useState<Array<Movie>>(initialMovies);

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
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/movies"
              element={
                <MoviesList
                  movies={movies}
                  handleFavoriteMovies={addFavoriteMovie}
                  isFavoriteList={false}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <MoviesList
                  movies={favoriteMovies}
                  handleFavoriteMovies={removeFavoriteMovie}
                  isFavoriteList={true}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
