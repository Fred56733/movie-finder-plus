
// Filters Component
function Filters ({
    setSelectedGenre,
    setSelectedRating,
    setSelectedRuntime,
    selectedYear,
    setSelectedYear,
    setSortBy
}) { return (
    <div className="filters">
        <select onChange={(e) => setSelectedGenre(e.target.value)}>     
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Documentary">Documentary</option>
            <option value="Short">Short</option>
            <option value="Thriller">Thriller</option>
            <option value="Family">Family</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="History">History</option>
            <option value="Biography">Biography</option>
            <option value="War">War</option>
        </select>

        <select onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="">Min IMDb Rating</option>
            <option value="8.0">8+</option>
            <option value="7.0">7+</option>
            <option value="6.0">6+</option>
            <option value="5.0">5+</option>
        </select>

        <select onChange={(e) => setSelectedRuntime(e.target.value)}>
            <option value="">Max Runtime (min)</option>
            <option value="120">Under 2 hours</option>
            <option value="90">Under 1.5 hours</option>
            <option value="60">Under 1 hour</option>
        </select>

        <input
            type="text"
            placeholder="Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
        />

            <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort By</option>
                <option value="rating">Highest IMDb Rating</option>
                <option value="year">Newest First</option>
            </select>
        </div>
    );
}

export default Filters;