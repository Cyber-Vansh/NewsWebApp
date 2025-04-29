import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import "./App.css";
import logo from "./assets/Logo.png";

const API_KEY = "0981d7438a1d419888f3f0d3ef174ff6";

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
    const categories = [
      "general",
      "technology",
      "business",
      "sports",
      "health",
      "entertainment",
      "science",
    ];

    const requests = categories.map((category) => {
      return fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=20`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      )
        .then((response) => response.json())
        .catch((err) => {
          console.error(`Error fetching ${category}:`, err);
          return null;
        });
    });

    Promise.all(requests).then((responses) => {
      setAllNewsData(responses);
      setLoading(false);
    });
  }, []);

  function searching(e) {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${e}&sortBy=popularity&language=en`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          Origin: "localhost",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
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
