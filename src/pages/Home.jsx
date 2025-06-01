import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, getTopRatedMovies } from "../services/api";
import Rating from "../utils/Rating";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { titleToSlug } from "../utils/slugify";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const [popular, topRated] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
        ]);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h2 className="section-title">Popular Movies</h2>
          <div className="movies-grid">
            {popularMovies.map((movie) => (
              <Link key={movie.id} to={`/movies/${titleToSlug(movie.title)}`}>
                <MovieCard movie={movie} ratingFunc={Rating} />
              </Link>
            ))}
          </div>

          <h2 className="section-title">Top Rated Movies</h2>
          <div className="movies-grid">
            {topRatedMovies.map((movie) => (
              <Link key={movie.id} to={`/movies/${titleToSlug(movie.title)}`}>
                <MovieCard movie={movie} ratingFunc={Rating} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
