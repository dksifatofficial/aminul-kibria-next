'use client'

import React, { useState } from "react";
import image1 from "../assets/image/office_01.jpg";
import image2 from "../assets/image/office_02.jpg";
import image3 from "../assets/image/office_03.jpg";
import classes from "../styles/BlogBody.module.css";
import Popup from "./popup/Popup";
import { PopupBlog1, PopupBlog2, PopupBlog3 } from "./popup/PopupBlogs";
import Image from "next/image";

function BlogBody() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div className={classes.bodyContainer}>
      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog1 />)}
      >
        <div className={classes.cover}>
          <Image className={classes.coverImg} src={image1} alt="img" />
          <span className={classes.blogDate}>25 Jan</span>
        </div>
        <h5>Web development</h5>
        <h4>Transforming Designs into Seamless User Experiences</h4>
      </div>

      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog2 />)}
      >
        <div className={classes.cover}>
          <Image className={classes.coverImg} src={image2} alt="img" />
          <span className={classes.blogDate}>27 Feb</span>
        </div>
        <h5>Branding</h5>
        <h4>Crafting Powerful Identities for Lasting Impressions</h4>
      </div>

      <div
        className={classes.bodyAll}
        onClick={() => handlePopupToggle(<PopupBlog3 />)}
      >
        <div className={classes.cover}>
          <Image className={classes.coverImg} src={image3} alt="img" />
          <span className={classes.blogDate}>11 Mar</span>
        </div>
        <h5>Social Media</h5>
        <h4>Driving Engagement and Results Through Strategies</h4>
      </div>

      {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))}
    </div>
  );
}

export default BlogBody;
