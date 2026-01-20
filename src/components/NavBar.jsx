import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  addEventListener("scroll", changeValueOnScroll);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${nav === true ? "sticky navbar" : "navbar"}`}>
      <Link to="/" className="navbar-brand">
        <p>CINEMA</p>
      </Link>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/watchlists" className="nav-link">
          Watchlists
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default NavBar;