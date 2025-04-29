import React, { useEffect, useState } from "react";
import "./SlideshowSection.css";

const SlideshowSection = ({ general }) => {
  const slides = general.map((slide) => {
    return {
      author: slide.author,
      timeAgo: slide.publishedAt.slice(0, 10),
      title: slide.title,
      image: slide.urlToImage,
      url: slide.url,
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <a
          key={index}
          href={slide.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="text-info">
            <p className="author">{slide.author}</p>
            <p className="time">{slide.timeAgo}</p>
            <h2 className="title">{slide.title}</h2>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SlideshowSection;
