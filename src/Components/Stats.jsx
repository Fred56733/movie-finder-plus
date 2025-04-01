function Stats({ totalMovies, averageRating, genreCounts }) {
    return (
        <div className="stats">
          <p><strong>Total Movies:</strong> {totalMovies}</p>
          <p><strong>Average IMDb Rating:</strong> {isNaN(averageRating) ? "N/A" : averageRating}</p>
          <p><strong>Genre Distribution:</strong></p>
          <ul className='genre-distribution'>
            {Object.entries(genreCounts).map(([genre, count]) => (
              <li key={genre}>{genre}: {count}</li>
            ))}
          </ul>
        </div>
    )
}

export default Stats;