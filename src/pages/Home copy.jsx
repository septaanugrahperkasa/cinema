import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/api";
import Rating from "../utils/Rating";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { titleToSlug } from "../utils/slugify";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movies/${titleToSlug(movie.title)}`}>
              <MovieCard movie={movie} ratingFunc={Rating} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
