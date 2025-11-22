import logo from "../../images/Capy_logo.png";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <header id="header">
      <div className="header-content">
      <div className="blog-logo">
        <img src={logo} alt="profile-logo" width="100" height="100" />
        
      </div>
      <h1 className="blog-title">The Traveling Capybara</h1>
        <Navbar />
        
         <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

            {isAuthenticated && (
          <div className="auth-info">
            <span><strong>Welcome {user.username}!</strong>✌️😎</span>
           
          </div>
        )}
        </div>
    </header>
  );
}

export default Header;

