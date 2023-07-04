import Image from "next/image";
import image1 from "../assets/icon/icon_05.png";
import image2 from "../assets/icon/icon_15.png";
import Header from "./Header";
import Menu from "./Menu";
import Portfolios from "./Portfolios";

function PortfolioContainer() {
  return (
    <div
      className="w-full relative z-[1] mt-24 p-0 lg:px-20 lg:py-8"
      id="portfolio"
    >
      <Image
        className="h-[300px] w-[300px] absolute bottom-[-130px] z-[-1] hidden right-0 lg:block"
        src={image1}
        alt="img"
      />
      <Image
        className="h-[150px] w-[150px] absolute hidden left-0 lg:block"
        src={image2}
        alt="img"
      />

      <Header className="mb-16">
        <h3>Portfolio</h3>
        <h2 className="dark:text-gray-100">My Amazing Works</h2>
        <p className="px-2 py-0 lg:py-0 lg:px-48 xl:px-80 xl:py-0">
          As a designer, my Amazing Works speak for themselves, showcasing my
          exceptional talent and creativity in every project.
        </p>
      </Header>

      <div className="mx-0 my-12 hidden">
        <Menu>
          <li className="inline-block text-center not-italic font-medium px-4 py-0 text-gray-900 dark:text-gray-100">
            All
          </li>
          <li className="inline-block text-center not-italic font-medium px-4 py-0 text-gray-900 dark:text-gray-100">
            DESIGN
          </li>
          <li className="inline-block text-center not-italic font-medium px-4 py-0 text-gray-900 dark:text-gray-100">
            DEVELOPMENT
          </li>
          <li className="inline-block text-center not-italic font-medium px-4 py-0 text-gray-900 dark:text-gray-100">
            HTML/CSS
          </li>
          <li className="inline-block text-center not-italic font-medium px-4 py-0 text-gray-900 dark:text-gray-100">
            REACT
          </li>
        </Menu>
      </div>
      <Portfolios />
    </div>
  );
}

export default PortfolioContainer;
