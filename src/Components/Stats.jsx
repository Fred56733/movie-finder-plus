import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './Stats.css'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Stats({ totalMovies, averageRating, genreCounts, sortedMovies }) {
  // Prepare data for the genre bar graph
  const genres = Object.keys(genreCounts);
  const counts = Object.values(genreCounts);

  const genreBarData = {
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

  const genreBarOptions = {
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

  // Prepare data for the top-rated movies line graph
  const topRatedMovies = [...sortedMovies]
    .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
    .slice(0, 10);

  const lineData = {
    labels: topRatedMovies.map((movie) => movie.Title),
    datasets: [
      {
        label: 'IMDb Rating',
        data: topRatedMovies.map((movie) => parseFloat(movie.imdbRating)),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'IMDb Ratings of Top 10 Movies',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10, // IMDb ratings are out of 10
      },
    },
  };

  return (
    <div className="stats">
      <p><strong>Total Movies:</strong> {totalMovies}</p>
      <p><strong>Average IMDb Rating:</strong> {isNaN(averageRating) ? "N/A" : averageRating}</p>

      <div className="stats-container">
        <div className="bar-graph">
          <Bar data={genreBarData} options={genreBarOptions} />
        </div>

        <div className="line-graph">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}

export default Stats;