import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import { MovieProvider } from "./contexts/MovieContext";
import './styles/App.css';
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlists" element={<Watchlist />} />
          <Route path="/movies/:slug" element={<MovieDetails/>} />
        </Routes>
      </main>
      <Footer/>
    </MovieProvider>
  );
}

export default App;
