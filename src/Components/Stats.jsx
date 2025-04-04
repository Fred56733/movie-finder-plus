import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Stats({ totalMovies, averageRating, genreCounts, sortedMovies }) {
  // Prepare data for the bar graph
  const genres = Object.keys(genreCounts);
  const counts = Object.values(genreCounts);

  const barData = {
    labels: genres,
    datasets: [
      {
        label: 'Number of Movies',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Movies by Genre',
      },
    },
  };

  // Get the top 10 movies sorted by IMDb rating
  const topRatedMovies = [...sortedMovies]
    .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
    .slice(0, 10);

  return (
    <div className="stats">
      <p><strong>Total Movies:</strong> {totalMovies}</p>
      
      <div className="bar-graph">
        <Bar data={barData} options={barOptions} />
      </div>

      <div className="top-rated-movies-table">
        <h3>Top Rated Movies</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Genre</th>
              <th>IMDb Rating</th>
            </tr>
          </thead>
          <tbody>
            {topRatedMovies.map((movie) => (
              <tr key={movie.imdbID}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Genre || 'Unknown'}</td>
                <td>{movie.imdbRating || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stats;