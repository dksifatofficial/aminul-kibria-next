"use client";

import Image from "next/image";
import { useState } from "react";
import image1 from "../assets/image/project_001.jpg";
import image2 from "../assets/image/project_002.jpg";
import image4 from "../assets/image/project_004.jpg";
import image7 from "../assets/image/project_007.jpg";
import image8 from "../assets/image/project_008.jpg";
import image3 from "../assets/image/project_009.jpg";
import image5 from "../assets/image/project_013.jpg";
import image9 from "../assets/image/project_011.jpg";
import image6 from "../assets/image/project_012.jpg";
import Portfolio from "./Portfolio";
import Popup from "./popup/Popup";
import {PopupPortfolio1} from './popup/PopupPortfolio'

function Portfolios() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div className="w-full h-auto flex flex-wrap justify-around">
      <div
        onClick={() =>
          handlePopupToggle(<Image src={image1} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
            transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
            hover:opacity-100 hover:scale-110"
            src={image1}
            alt="project-img"
            height="400"
            width="600"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image2} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image2}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image3} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image3}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image4} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image4}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<PopupPortfolio1 />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image5}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image6} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image6}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image7} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image7}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image8} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image8}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image9} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image
            className="w-[450px] h-[250px] overflow-hidden
          transition-[1s] ease-linear duration-1000 cursor-pointer opacity-90
          hover:opacity-100 hover:scale-110"
            src={image9}
            alt="project-img"
            height="400"
            width="900"
          />
        </Portfolio>
      </div>

      {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))}
    </div>
  );
}

export default Portfolios;
