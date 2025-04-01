import { useState, useEffect } from 'react';
import './App.css';
import Filters from './Components/Filters';
import './Components/Filters.css';
import Stats from './Components/Stats';
import MovieList from './Components/MovieList';
import { fetchMovies } from './Components/FetchMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedRuntime, setSelectedRuntime] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    fetchMovies(apiKey, setMovies, setError);
  }, []);

  useEffect(() => {
    console.log("Movies updated:", movies.length);
  }, [movies]);

  const filteredMovies = movies.filter(movie => {
    const imdbRating = parseFloat(movie.imdbRating) || 0;
    const runtimeMinutes = parseInt(movie.Runtime) || 0;

    return (
      (!searchTerm || movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedGenre || (movie.Genre && movie.Genre.includes(selectedGenre))) &&
      (!selectedRating || imdbRating >= parseFloat(selectedRating)) &&
      (!selectedRuntime || runtimeMinutes <= parseInt(selectedRuntime)) &&
      (!selectedYear || movie.Year === selectedYear)
    );
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === "rating") {
      return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
    } else if (sortBy === "year") {
      return parseInt(b.Year) - parseInt(a.Year);
    }
    return 0;
  });

  const totalMovies = sortedMovies.length;
  const averageRating = (
    sortedMovies.reduce((sum, movie) => sum + (parseFloat(movie.imdbRating) || 0), 0) / (totalMovies || 1)
  ).toFixed(1);
  
  const genreCounts = {};
  sortedMovies.forEach(movie => {
    movie.Genre?.split(", ").forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });

  return (
    <div className="app-container">
      <h1>Movie Finder</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Filters
        setSelectedGenre={setSelectedGenre}
        setSelectedRating={setSelectedRating}
        setSelectedRuntime={setSelectedRuntime}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setSortBy={setSortBy}
      />
      {sortedMovies.length > 0 && (
        <Stats
          totalMovies={totalMovies}
          averageRating={averageRating}
          genreCounts={genreCounts}
        />
      )}
      {error}
      <MovieList movies={sortedMovies} />
    </div>
  );
}

export default App;
