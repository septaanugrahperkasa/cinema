import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Favorite functions
  const addFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id) => favorites.some((movie) => movie.id === id);

  // Watchlist functions
  const addWatchlist = (movie) => {
    if (!watchlist.find((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  const isInWatchlist = (id) => watchlist.some((movie) => movie.id === id);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addFavorites,
        removeFavorites,
        isFavorite,
        watchlist,
        addWatchlist,
        removeWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);