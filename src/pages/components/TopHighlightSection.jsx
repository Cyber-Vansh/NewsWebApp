import React from "react";
import "./TopHighlightSection.css";

const TopHighlightSection = ({
  science,
  entertainment,
  tech,
  business,
  health,
}) => {
  const cards = [
    {
      image: business.articles[1].urlToImage,
      title: business.articles[1].title,
      author: business.articles[1].author,
      time: business.articles[1].publishedAt.slice(0, 10),
      tag: "BUSINESS",
      url: business.articles[1].url,
    },
    {
      image: entertainment.articles[1].urlToImage,
      title: entertainment.articles[1].title,
      author: entertainment.articles[1].author,
      time: entertainment.articles[1].publishedAt.slice(0, 10),
      tag: "ENTERTAINMENT",
      url: entertainment.articles[1].url,
    },
    {
      image: tech.articles[1].urlToImage,
      title: tech.articles[1].title,
      author: tech.articles[1].author,
      time: tech.articles[1].publishedAt.slice(0, 10),
      tag: "TECHNOLOGY",
      url: tech.articles[1].url,
    },
    {
      image: health.articles[1].urlToImage,
      title: health.articles[1].title,
      author: health.articles[1].author,
      time: health.articles[1].publishedAt.slice(0, 10),
      tag: "HEALTH",
      url: health.articles[1].url,
    },
  ];

  return (
    <div className="ths-wrapper">
      <a
        href={science.articles[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="ths-top-card"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={science.articles[0].urlToImage}
          alt="img"
          className="top-img"
        />

        <div className="top-author-info">
          <p className="top-author">{science.articles[0].author}</p>
          <p className="top-author">
            {science.articles[0].publishedAt.slice(0, 10)}
          </p>
        </div>

        <div className="top-text">
          <h2 className="top-title">{science.articles[0].title}</h2>
          <p className="top-tag">SCIENCE</p>
        </div>
      </a>

      <div className="ths-bottom-row">
        {cards.map((card, index) => (
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-box"
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={card.image} alt="img" className="card-img" />
            <div className="card-text">
              <p className="card-author">
                {card.author} | {card.time}
              </p>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-tag">{card.tag}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopHighlightSection;
