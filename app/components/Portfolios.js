'use client'

import { useState } from "react";
import image1 from "../assets/image/project_001.jpg";
import image2 from "../assets/image/project_002.jpg";
import image3 from "../assets/image/project_009.jpg";
import image4 from "../assets/image/project_004.jpg";
import image5 from "../assets/image/project_010.jpg";
import image6 from "../assets/image/project_012.jpg";
import image7 from "../assets/image/project_007.jpg";
import image8 from "../assets/image/project_008.jpg";
import image9 from "../assets/image/project_011.jpg";
import classes from "../styles/Portfolios.module.css";
import Portfolio from "./Portfolio";
import Popup from "./popup/Popup";
import Image from "next/image";

function Portfolios() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div className={classes.portfolios}>
      <div
        onClick={() =>
          handlePopupToggle(<Image src={image1} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image1} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image2} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image2} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image3} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image3} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image4} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image4} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image5} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image5} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image6} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image6} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image7} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image7} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image8} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image8} alt="project-img" />
        </Portfolio>
      </div>

      <div
        onClick={() =>
          handlePopupToggle(<Image src={image9} alt="project-img" />)
        }
      >
        <Portfolio>
          <Image className={classes.img} src={image9} alt="project-img" />
        </Portfolio>
      </div>

      {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))}
    </div>
  );
}

export default Portfolios;
