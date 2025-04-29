import { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/Screenshot_2025-04-10_at_11.55.54_PM-removebg-preview.png";

const Navbar = ({ searching, returnHome, theme, toggleTheme }) => {
  const [currentsearch, setCurrentsearch] = useState("");

  return (
    <nav className={`navbar ${theme === "light" ? "light" : "dark"}`}>
      <div className="logo" onClick={returnHome}>
        <img src={logo} alt="Logo" width="100px" />
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setCurrentsearch(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => searching(currentsearch)}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/014/440/989/small/search-black-shadow-icon-socialicon-set-png.png"
            height="25px"
          />
        </button>
      </div>

      <div className="theme-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
