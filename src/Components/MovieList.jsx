import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />)
      ) : (
        <p>No movies found. Adjust your filters.</p>
      )}
    </div>
  );
}

export default MovieList;