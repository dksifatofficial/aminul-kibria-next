import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import DiL from "./components/DiL";
// import Map from "./components/Map";
import Newsletter from "./components/Newsletter";
import PortfolioContainer from "./components/PortfolioContainer";
import Qualitys from "./components/Qualitys";
import Services from "./components/Services";
import TestimonialContainer from "./components/TestimonialContainer";
import TopContainer from "./components/TopContainer";

function Home() {
  return (
    <main >
      <TopContainer />
       <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt USD-730966598 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
      <Qualitys />
      <AboutMe />
      <PortfolioContainer />
      <TestimonialContainer />
      <DiL />
      <Services />
      <Blog />
      <Newsletter />
      <Contact />
      {/* <Map /> */}
    </main>
  );
}

export default Home;
