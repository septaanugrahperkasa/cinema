// MovieCard.jsx
import { useMovieContext } from "../contexts/MovieContext";
import { customRound } from "../utils/customRound";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/MovieCard.css";

function MovieCard({ movie, ratingFunc }) {
  const rating = customRound(movie.vote_average / 2);

  const {
    isFavorite,
    addFavorites,
    removeFavorites,
    isInWatchlist,
    addWatchlist,
    removeWatchlist,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const inWatchlist = isInWatchlist(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    favorite ? removeFavorites(movie.id) : addFavorites(movie);
  };

  const onWatchlistClick = (e) => {
    e.preventDefault();
    inWatchlist ? removeWatchlist(movie.id) : addWatchlist(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <div className="favorite-watchlist-container">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
              title={favorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              <i className="bi bi-heart-fill"></i>
            </button>
            <button
              className={`watchlist-btn ${inWatchlist ? "active" : ""}`}
              onClick={onWatchlistClick}
              title={inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            >
              <i className="bi bi-bookmark-fill"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-info-text">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        <div className="item_rating">
          {ratingFunc && ratingFunc({ rating })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
