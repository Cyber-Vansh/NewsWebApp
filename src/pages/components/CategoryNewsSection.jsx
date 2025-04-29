import React, { useState } from "react";
import "./CategoryNewsSection.css";

const App = ({
  business,
  entertainment,
  science,
  health,
  tech,
  sports,
  theme,
}) => {
  const [activeCategory, setActiveCategory] = useState("BUSINESS");

  const categories = [
    "BUSINESS",
    "ENTERTAINMENT",
    "SCIENCE",
    "HEALTH",
    "TECHNOLOGY",
    "SPORTS",
  ];

  let obj = business;

  switch (activeCategory) {
    case "BUSINESS":
      obj = business;
      break;
    case "ENTERTAINMENT":
      obj = entertainment;
      break;
    case "SCIENCE":
      obj = science;
      break;
    case "HEALTH":
      obj = health;
      break;
    case "TECHNOLOGY":
      obj = tech;
      break;
    default:
      obj = sports;
      break;
  }

  const featuredArticle = {
    id: 0,
    author: obj.articles[3].author,
    time: obj.articles[3].publishedAt.slice(0, 10),
    title: obj.articles[3].title,
    category: activeCategory,
    image: obj.articles[3].urlToImage,
    url: obj.articles[3].url,
  };

  const articles = [
    {
      id: 1,
      author: obj.articles[4].author,
      time: obj.articles[4].publishedAt.slice(0, 10),
      title: obj.articles[4].title,
      category: activeCategory,
      image: obj.articles[4].urlToImage,
      url: obj.articles[4].url,
    },
    {
      id: 2,
      author: obj.articles[5].author,
      time: obj.articles[5].publishedAt.slice(0, 10),
      title: obj.articles[5].title,
      category: activeCategory,
      image: obj.articles[5].urlToImage,
      url: obj.articles[5].url,
    },
  ];

  return (
    <div className="trending-container">
      <div className="heading">
        <h1 className="main-title">TRENDING</h1>
        <div className="category-section">
          <div className="category-buttons">
            {categories.map((category) => {
              return theme === "light" ? (
                <button
                  key={category}
                  className={`category-btn-light ${
                    activeCategory === category ? "active-light" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ) : (
                <button
                  key={category}
                  className={`category-btn-dark ${
                    activeCategory === category ? "active-dark" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="articles-grid">
        <a
          href={featuredArticle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="featured-article"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="featured-image-container">
            <img
              src={featuredArticle.image}
              alt="img"
              className="featured-image"
            />
            <div className="featured-overlay">
              <div className="author-time">
                {featuredArticle.author} | {featuredArticle.time}
              </div>
              <h3 className="featured-title">{featuredArticle.title}</h3>
              <div className="article-meta">
                <p>
                  <span className="category">{featuredArticle.category}</span>
                </p>
              </div>
            </div>
          </div>
        </a>

        <div className="small-articles">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="small-article"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={article.image} alt="img" className="small-image" />
              <div className="small-content">
                <div className="author-time">
                  {article.author} | {article.time}
                </div>
                <h3 className="small-title">{article.title}</h3>
                <div className="article-meta">
                  <span className="category">{article.category}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
