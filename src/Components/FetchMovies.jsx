
export const fetchMovies = async ( apiKey, setMovies, setError) => {
 
    if (!apiKey) {
      console.error("API Key is missing!");
      setError("API Key is missing!");
      return;
    }

    setError(null);

    const searchTerms = [
      "star", "batman", "avengers", "matrix", "jurassic", "spider", "lord", "harry",
      "fast", "furious", "mission", "terminator", "hobbit", "godzilla", "transformers",
      "superman", "wonder", "deadpool", "doctor", "x-men", "hunger", "pirates",
      "gladiator", "titanic", "interstellar", "joker", "gravity", "avatar",
    ];

    const movieRequests = searchTerms.map(term =>
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`)
        .then(res => res.json())
        .catch(() => null)
    );

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

  const fetchFullMovieDetails = async (moviesList, apiKey) => {
    const detailedMovieRequests = moviesList.map(movie =>
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
        .then(res => res.json())
        .catch(err => {
          console.error(`Failed to fetch details for movie "${movie.Title}":`, err);
          return null;
        })
    );
  
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