import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found. Adjust your filters.</p>
      )}
    </div>
  );
}

export default MovieList;