import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/favorite" element={<FavoriteMovies />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
