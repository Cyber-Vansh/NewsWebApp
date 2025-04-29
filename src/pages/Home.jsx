import Navbar from "./components/Navbar.jsx";
import FeaturedSection from "./components/FeaturedSection.jsx";
import TopHighlightSection from "./components/TopHighlightSection.jsx";
import SlideshowSection from "./components/SlideShowSection.jsx";
import CategoryNewsSection from "./components/CategoryNewsSection.jsx";
import Footer from "./components/Footer.jsx";

function Home({ data, searching, returnHome, theme, toggleTheme }) {
  return (
    <>
      <Navbar
        className="nav"
        searching={searching}
        returnHome={returnHome}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <FeaturedSection
        general={data[0]}
        tech={data[1]}
        business={data[2]}
        sports={data[3]}
        health={data[4]}
      />
      <TopHighlightSection
        science={data[6]}
        entertainment={data[5]}
        tech={data[1]}
        business={data[2]}
        health={data[4]}
      />
      <SlideshowSection general={data[0].articles.slice(3, 10)} />
      <CategoryNewsSection
        business={data[2]}
        entertainment={data[5]}
        science={data[6]}
        health={data[4]}
        tech={data[1]}
        sports={data[3]}
        theme={theme}
      />

      <Footer theme={theme}/>
    </>
  );
}

export default Home;
