"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AKicon from "../assets/icon/ak.png";
// import Account from "./Account";
import Image from "next/image";
import Buttons from "./theme/Buttons";
import classes from '../styles/TopNav.module.css'

function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap fixed z-50 bg-white w-full text-center transition-all duration-[1s] mt-5 ">
      <div className={`${classes.topMenu} isScrolled? "bg-[#ffffff5e] dark:bg-[#faf8f81e]  backdrop-blur-[10px] shadow-[1px_1px_5px_rgba(8,3,3,0.11)] -top-5 "`}
      >
        <ul className="h-[35px] flex align-middle">
          <li>
            <Link href={"https://aminulkibria.com"} target="_blank">
              <Image src={AKicon} alt="" width="25" height="25" />
            </Link>
          </li>
          <li>
            <Link href="#banner">Home</Link>
          </li>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>
            <a href="#downloading">Download CV</a>
          </li> */}
          <li>
            <Buttons />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
