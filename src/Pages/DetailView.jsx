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
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className="movie-detail container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <div className="card">
        <img className="card-image" src={movie.Poster} alt={movie.Title} />
        <div className="card-content">
          <h2 className="card-title">{movie.Title}</h2>
          <p className="card-details"><strong>Year:</strong> {movie.Year}</p>
          <p className="card-details"><strong>Rated:</strong> {movie.Rated}</p>
          <p className="card-details"><strong>Released:</strong> {movie.Released}</p>
          <p className="card-details"><strong>Runtime:</strong> {movie.Runtime}</p>
          <p className="card-details"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="card-details"><strong>Director:</strong> {movie.Director}</p>
          <p className="card-details"><strong>Writer:</strong> {movie.Writer}</p>
          <p className="card-details"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="card-details"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="card-details"><strong>Language:</strong> {movie.Language}</p>
          <p className="card-details"><strong>Country:</strong> {movie.Country}</p>
          <p className="card-details"><strong>Awards:</strong> {movie.Awards}</p>
          <p className="card-details"><strong>Box Office:</strong> {movie.BoxOffice}</p>
          <p className="card-details"><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p className="card-details"><strong>IMDb Votes:</strong> {movie.imdbVotes}</p>
          <p className="card-details"><strong>Ratings:</strong></p>
          <ul className="ratings-list">
            {movie.Ratings.map((rating, index) => (
              <li key={index} className="card-details">
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailView;