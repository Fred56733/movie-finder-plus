// FetchMovies.jsx
export const fetchMovies = async ( apiKey, setMovies, setError) => {
 
    // Check if the API key is provided
    if (!apiKey) {
      console.error("API Key is missing!");
      setError("API Key is missing!");
      return;
    }

    // Clear previous error state
    setError(null);

    // List of search terms to fetch movies
    const searchTerms = [
      "star", "batman", "avengers", "matrix", "jurassic", "spider", "lord", "harry",
      "fast", "furious", "mission", "terminator", "hobbit", "godzilla", "transformers",
      "superman", "wonder", "deadpool", "doctor", "x-men", "hunger", "pirates",
      "gladiator", "titanic", "interstellar", "joker", "gravity", "avatar",
    ];

    // Fetch movies for each search term
    const movieRequests = searchTerms.map(term =>
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`)
        .then(res => res.json())
        .catch(() => null)
    );

    // Wait for all requests to complete
    try {
      const responses = await Promise.all(movieRequests);
      const movieResults = responses
        .filter(res => res && res.Search)
        .flatMap(res => res.Search)
        .reduce((acc, movie) => {
          if (!acc.find(m => m.imdbID === movie.imdbID)) {
            acc.push(movie);
          }
          return acc;
        }, []);

      if (movieResults.length > 0) {
        console.log("Fetching full details for", movieResults.length, "movies...");
      const detailedMovies = await fetchFullMovieDetails(movieResults, apiKey);
      console.log("Detailed Movies:", detailedMovies);
      setMovies(detailedMovies); // Update the state with detailed movies
    } else {
      setError("No movies found.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setError("Failed to fetch movie data.");
  }
};

  // Function to fetch full movie details
  const fetchFullMovieDetails = async (moviesList, apiKey) => {
    const detailedMovieRequests = moviesList.map(movie =>
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
        .then(res => res.json())
        .catch(err => {
          console.error(`Failed to fetch details for movie "${movie.Title}":`, err);
          return null;
        })
    );
  
    // Wait for all detailed movie requests to complete
    try {
      const detailedMovies = await Promise.all(detailedMovieRequests);
      const validMovies = detailedMovies.filter(movie => movie && movie.Response === "True");
      console.log("Valid Detailed Movies:", validMovies);
      return validMovies;
    } catch (error) {
      console.error("Fetch error:", error);
      throw new Error("Failed to fetch movie details.");
    }
  };