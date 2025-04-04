import "./MovieCard.css";

function MovieCard ({ movie }) {
    return (    
        <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre || "Unknown"}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating || "N/A"}</p>
            {/* <p><strong>Runtime:</strong> {movie.Runtime || "N/A"}</p>
            <p><strong>Actors:</strong> {movie.Actors || "N/A"}</p>
            <p><strong>Awards:</strong> {movie.Awards || "N/A"}</p>
             <p><strong>Plot:</strong> {movie.Plot || "N/A"}</p> */}
        </div>
    );
}

export default MovieCard;