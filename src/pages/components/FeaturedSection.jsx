import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = ({ general, tech, business, sports, health }) => {
  return (
    <div className="feat-wrap">
      <div className="feat-cont">
        <div className="col side">
          <a
            className="card vert"
            href={tech.articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tech.articles[0].urlToImage} alt="img" />
            <div className="text-below">
              <p className="author">
                {tech.articles[0].publishedAt.slice(0, 10)}
              </p>
              <h3 className="title">{tech.articles[0].title}</h3>
              <p className="tag">TECHNOLOGY</p>
            </div>
          </a>

          <hr className="divider" />

          <a
            className="card vert"
            href={business.articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-below">
              <p className="author">
                {business.articles[0].publishedAt.slice(0, 10)}
              </p>
              <h3 className="title">{business.articles[0].title}</h3>
              <p className="tag">BUSINESS</p>
            </div>
            <img src={business.articles[0].urlToImage} alt="img" />
          </a>
        </div>

        <div className="col center">
          <a
            className="card overlay"
            href={general.articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={general.articles[0].urlToImage} alt="img" />
            <div className="text-overlay">
              <p className="author">{general.articles[0].author}</p>
              <p className="author">
                {general.articles[0].publishedAt.slice(0, 10)}
              </p>
              <h2 className="title">{general.articles[0].title}</h2>
            </div>
          </a>
        </div>

        <div className="col side">
          <a
            className="card vert"
            href={sports.articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sports.articles[0].urlToImage} alt="img" />
            <div className="text-below">
              <p className="author">
                {sports.articles[0].publishedAt.slice(0, 10)}
              </p>
              <h3 className="title">{sports.articles[0].title}</h3>
              <p className="tag">SPORTS</p>
            </div>
          </a>

          <hr className="divider" />

          <a
            className="card vert"
            href={health.articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-below">
              <p className="author">
                {health.articles[0].publishedAt.slice(0, 10)}
              </p>
              <h3 className="title">{health.articles[0].title}</h3>
              <p className="tag">HEALTH</p>
            </div>
            <img src={health.articles[0].urlToImage} alt="img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
