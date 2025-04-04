import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './DetailView.css';

function DetailView() {
  const location = useLocation(); // Access the location object
  const navigate = useNavigate(); // For navigation
  const movie = location.state?.movie; // Retrieve the movie object from state

  // Handle the case where no movie data is available
  if (!movie) {
    return (
      <div className="movie-detail">
        <p>No movie data available.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre || "Unknown"}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating || "N/A"}</p>
      <p><strong>Runtime:</strong> {movie.Runtime || "N/A"}</p>
      <p><strong>Actors:</strong> {movie.Actors || "N/A"}</p>
      <p><strong>Awards:</strong> {movie.Awards || "N/A"}</p>
      <p><strong>Plot:</strong> {movie.Plot || "N/A"}</p>
    </div>
  );
}

export default DetailView;