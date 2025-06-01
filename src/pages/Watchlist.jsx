import "../styles/Favorites.css"; // Gunakan stylesheet yang sama, atau buat Watchlist.css kalau ingin terpisah
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import Rating from "../utils/Rating";
import { Link } from "react-router-dom";
import { titleToSlug } from "../utils/slugify";

function Watchlist() {
  const { watchlist } = useMovieContext();

  if (watchlist.length !== 0) {
    return (
      <div className="favorites">
        <h2>Your Watchlist</h2>
        <div className="movies-grid">
          {watchlist.map((movie) => (
            <Link key={movie.id} to={`/movies/${titleToSlug(movie.title)}`}>
              <MovieCard movie={movie} ratingFunc={Rating} key={movie.id} />
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Movies in Your Watchlist Yet!</h2>
        <p>Start adding movies to your watchlist and they will appear here.</p>
      </div>
    );
  }
}

export default Watchlist;
