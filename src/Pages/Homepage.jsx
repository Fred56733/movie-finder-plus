import React from 'react';
import Filters from '../Components/Filters';
import Stats from '../Components/Stats';
import MovieList from '../Components/MovieList';
import './Homepage.css';

function Homepage({
  searchTerm,
  setSearchTerm,
  setSelectedGenre,
  setSelectedRating,
  setSelectedRuntime,
  selectedYear,
  setSelectedYear,
  setSortBy,
  sortedMovies,
  totalMovies,
  averageRating,
  genreCounts,
  error,
  onMovieClick,
}) {
  return (
    <div className='main-container'>
      {sortedMovies.length > 0 && (
        <Stats
        totalMovies={totalMovies}
        averageRating={averageRating}
        genreCounts={genreCounts}
        sortedMovies={sortedMovies}
        />
      )}
      {error}
      <Filters
        setSelectedGenre={setSelectedGenre}
        setSelectedRating={setSelectedRating}
        setSelectedRuntime={setSelectedRuntime}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        setSortBy={setSortBy}
      />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <MovieList movies={sortedMovies} onMovieClick={onMovieClick} />
    </div>
  );
}

export default Homepage;