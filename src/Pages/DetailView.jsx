import React from 'react';
import './DetailView.css';

function DetailView({ movie, onBack }) {
  return (
    <div className="movie-detail">
      <button onClick={onBack}>Back</button>
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