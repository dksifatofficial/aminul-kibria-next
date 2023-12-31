// 'use client'

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
// import SideMenu from "./nextUI/SideMenu";
// import MainMenu from './nextUI/MainMenu'

export const metadata = {
  title: "Aminul Kibria - Web Programmer & Digital Marketer",
  description:
    "Most common methods for designing websites that work well on desktop is responsive and adaptive design",
  author: "Aminul Kibria",
  keywords:
    "Web design, Web development, JavaScript, Aminul Kibria, Aminul, Kibria, DK Sifat",
};

function Home() {
  return (
    <>
      <main>
        <TopContainer />
        {/* <SideMenu /> */}
        {/* <MainMenu /> */}
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
    </>
  );
}

export default Home;
