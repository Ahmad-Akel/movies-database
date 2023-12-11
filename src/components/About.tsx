import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>About Our Application</h1>
      <p>
        Our application is a movie browsing platform that allows users to
        explore a vast collection of movies.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Search for movies</li>
        <li>View detailed information about each movie</li>
        <li>Add movies to a favorites list</li>
        <li>Delete movies from the favorites list</li>
      </ul>
      <h2>How to Use</h2>
      <p>
        To use our application, simply search for a movie in the search bar.
        Click on a movie to view more details. You can add the movie to your
        favorites list by clicking on the 'Add to Favorites' button. To remove a
        movie from your favorites list, click on the 'Delete' button in your
        favorites list.
      </p>
    </div>
  );
};

export default About;
