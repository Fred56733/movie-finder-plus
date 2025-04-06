import React from 'react';
import './DetailView.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

function DetailView() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

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
      <p><strong>Rated:</strong> {movie.Rated}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Writer:</strong> {movie.Writer}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Language:</strong> {movie.Language}</p>
      <p><strong>Country:</strong> {movie.Country}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
      <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
      <p><strong>Ratings:</strong></p>
      <ul>
        {movie.Ratings.map((rating, index) => (
          <li key={index}>
            {rating.Source}: {rating.Value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailView;