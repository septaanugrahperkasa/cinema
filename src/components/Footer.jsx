import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; 2025{" "}
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CINEMA
        </Link>
        . All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;