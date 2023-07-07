"use client";

import Image from "next/image";
import { useState } from "react";
import image1 from "../assets/image/office_01.jpg";
import image2 from "../assets/image/office_02.jpg";
import image3 from "../assets/image/office_03.jpg";
import Popup from "./popup/Popup";
import { PopupBlog1, PopupBlog2, PopupBlog3 } from "./popup/PopupBlogs";

function BlogBody() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div className="w-full flex flex-wrap pt-16">
      <div
        className="w-full p-4 lg:w-[33.333%] lg:p-4"
        onClick={() => handlePopupToggle(<PopupBlog1 />)}
      >
        <div className="w-full h-[250px] overflow-hidden relative rounded-[10px]">
          <Image
            className="h-auto w-full absolute transition-[0.5s] ease-linear duration-500 hover:scale-110"
            src={image1}
            alt="img"
          />
          <span className="absolute font-semibold text-lg text-gray-100 right-[15px] top-[15px] drop-shadow-2xl">
            25 Jan
          </span>
        </div>
        <h5 className="text-[#f75023] pt-5">Web development</h5>
        <h4 className="text-gray-900 font-semibold dark:text-gray-200">
          Transforming Designs into Seamless User Experiences
        </h4>
      </div>

      <div
        className="w-full p-4 lg:w-[33.333%] lg:p-4"
        onClick={() => handlePopupToggle(<PopupBlog2 />)}
      >
        <div className="w-full h-[250px] overflow-hidden relative rounded-[10px]">
          <Image
            className="h-auto w-full absolute transition-[0.5s] ease-linear duration-500 hover:scale-110"
            src={image2}
            alt="img"
          />
          <span className="absolute font-semibold text-lg text-gray-100 right-[15px] top-[15px] drop-shadow-2xl">
            27 Feb
          </span>
        </div>
        <h5 className="text-[#f75023] pt-5">Branding</h5>
        <h4 className="text-gray-900 font-semibold dark:text-gray-200">
          Crafting Powerful Identities for Lasting Impressions
        </h4>
      </div>

      <div
        className="w-full p-4 lg:w-[33.333%] lg:p-4"
        onClick={() => handlePopupToggle(<PopupBlog3 />)}
      >
        <div className="w-full h-[250px] overflow-hidden relative rounded-[10px]">
          <Image
            className="h-auto w-full absolute transition-[0.5s] ease-linear duration-500 hover:scale-110"
            src={image3}
            alt="img"
          />
          <span className="absolute font-semibold text-lg text-gray-100 right-[15px] top-[15px] drop-shadow-2xl">
            11 Mar
          </span>
        </div>
        <h5 className="text-[#f75023] pt-5">Social Media</h5>
        <h4 className="text-gray-900 font-semibold dark:text-gray-200">
          Driving Engagement and Results Through Strategies
        </h4>
      </div>

      {popups.map((content, index) => (
        <Popup key={index} handleClose={handleClosePopup} content={content} />
      ))}
    </div>
  );
}

export default BlogBody;
