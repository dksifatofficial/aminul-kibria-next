import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
// import Contact from "./components/Contact";
import DiL from "./components/DiL";
// import Map from "./components/Map";
// import Newsletter from "./components/Newsletter";
import PortfolioContainer from "./components/PortfolioContainer";
import Qualitys from "./components/Qualitys";
import Services from "./components/Services";
import TestimonialContainer from "./components/TestimonialContainer";
import TopContainer from "./components/TopContainer";
import TopNav from "./components/TopNav";

function Home() {
  return (
    <div>
      <TopNav />
      <TopContainer />
      <Qualitys />
      <AboutMe />
      <PortfolioContainer />
      <TestimonialContainer />
      <DiL />
      <Services />
      <Blog />
      {/* <Newsletter /> */}
      {/* <Contact /> */}
      {/* <Map /> */}
    </div>
  );
}

export default Home;
