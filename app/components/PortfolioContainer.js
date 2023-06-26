import image1 from "../assets/icon/icon_05.png";
import image2 from "../assets/icon/icon_15.png";
import classes from "../styles/PortfolioContainer.module.css";
import Header from "./Header";
import Menu from "./Menu";
import Portfolios from "./Portfolios";
import Image from "next/image";

function PortfolioContainer() {
  return (
    <div className={classes.portfilioContainer} id="portfolio">
      <Image className={classes.img5} src={image1} alt="img" />
      <Image className={classes.img4} src={image2} alt="img" />

      <Header className={classes.header}>
        <h3>Portfolio</h3>
        <h2>My Amazing Works</h2>
        <p>
          As a designer, my Amazing Works speak for themselves, showcasing my
          exceptional talent and creativity in every project.
        </p>
      </Header>

      <div className={classes.menu}>
        <Menu>
          <li className="active">All</li>
          <li>DESIGN</li>
          <li>DEVELOPMENT</li>
          <li>HTML/CSS</li>
          <li>REACT</li>
        </Menu>
      </div>

      <Portfolios />
    </div>
  );
}

export default PortfolioContainer;
