import { useState } from "react";
import "./Search.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Search = ({ searching, returnHome, data, theme, toggleTheme }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="paginated-container">
      <Navbar
        className="nav"
        searching={searching}
        returnHome={returnHome}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="backHome">
        <button onClick={returnHome}>
          <p style={theme === "dark" ? { color: "white" } : { color: "black" }}>
            {"➥ Back To Home"}
          </p>
        </button>
      </div>
      {data.length > 0 ? (
        <>
          {currentData.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="card-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.urlToImage}
                alt="img"
                className="card-image-search"
              />
              <div className="card-content-search">
                <h2 className="card-title-search">{item.title}</h2>
                <p>{item.description}</p>
                <p className="card-meta-search">
                  {item.author} | {item.publishedAt.slice(0, 10)}
                </p>
              </div>
            </a>
          ))}

          <div className="pagination">
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            {[...Array(5)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`page-button ${
                    page === currentPage ? "active" : ""
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <span>...</span>
            <button
              onClick={() => handlePageClick(totalPages)}
              className={`page-button ${
                currentPage === totalPages ? "active" : ""
              }`}
            >
              {totalPages}
            </button>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              height: "310px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ marginTop: "120px" }}>NO DATA AVAILABLE</h1>
          </div>
        </>
      )}
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
};

export default Search;
