import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import "./App.css";
import logo from "./assets/Logo.png";


// to run locally, use `vercel dev` command

const App = () => {
  const [allNewsData, setAllNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false);
  const [searchdata, setSearchdata] = useState([]);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetch("/api/topHeadlines")
      .then((response) => response.json())
      .then((data) => {
        setAllNewsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching headlines:", err);
        setLoading(false);
      });
  }, []);

  function searching(e) {
    setLoading(true);
    fetch(`/api/searchNews?q=${encodeURIComponent(e)}`)

      .then((response) => response.json())
      .then((res) => {
        setSearchdata(res);
        setLoading(false);
        setSearched(true);
      });
  }
  function returnHome() {
    setLoading(true);
    setSearched(false);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <div className="loading-logo">
          <img src={logo} width={"500px"} />
        </div>
      ) : searched ? (
        <Search
          searching={searching}
          returnHome={returnHome}
          data={searchdata.articles}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      ) : (
        <Home
          data={allNewsData}
          searching={searching}
          returnHome={returnHome}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}
    </>
  );
};

export default App;
