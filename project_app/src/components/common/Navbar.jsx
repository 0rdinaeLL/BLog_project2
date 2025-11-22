import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/posts">Blog Posts</Link></li>
        <li><Link to="/contact">Contact</Link></li>

         {isAuthenticated ? (
          <li>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </li>
        ) : (
          <li><Link to="/login" className="login-link">Login</Link></li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
