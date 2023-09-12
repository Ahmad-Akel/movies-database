import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "./MoviesList";

const MovieDetails = () => {
  // Get the imdbID from the route parameter
  const { imdbID } = useParams();

  // State to store the movie details
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);

  // Function to fetch movie details by imdbID
  const fetchMovieDetails = async () => {
    try {
      const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=e18d063c`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  // Fetch movie details when the component mounts
  useEffect(() => {
    fetchMovieDetails();
  }, [imdbID]);

  // Render movie details
  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.Title}</h2>
          <p>Year: {movieDetails.Year}</p>
          <p>Type: {movieDetails.Type}</p>
          <img src={movieDetails.Poster} alt="Italian Trulli" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
