import "../styles/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import Rating from "../utils/Rating";
import { Link } from "react-router-dom";
import { titleToSlug } from "../utils/slugify";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length !== 0) {    
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
              <Link key={movie.id} to={`/movies/${titleToSlug(movie.title)}`}>
              <MovieCard movie={movie} ratingFunc={Rating} key={movie.id} />
              </Link>
            )
          )}
        </div>
      </div>
    );
  } else
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet!</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    );
}

export default Favorites;
