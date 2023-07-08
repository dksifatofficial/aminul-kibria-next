"use client";

import React, { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const handleMousemove = (e) => {
      // const myDiv = document.getElementById('myDiv');
      const cursor1 = document.getElementById("cursor1");
      const cursor2 = document.getElementById("cursor2");

      if (e.clientX < window.innerWidth / 2) {
        cursor1.style.display = "block";
        cursor2.style.display = "block";
      } else {
        cursor1.style.display = "block";
        cursor2.style.display = "block";
      }
      cursor1.style.top = cursor2.style.top = e.clientY + "px";
      cursor1.style.left = cursor2.style.left = e.clientX + "px";
    };

    document.addEventListener("mousemove", handleMousemove);

    return () => {
      document.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] bg-cover hidden 
      mt-[-70px] text-[#f75023] text-[55px] text-center transition-[0.01s] 
      duration-[ease] -ml-1.5 p-0 lg:block"
        id="cursor1"
      >
        .
      </div>
      <div
        className="fixed pointer-events-none z-[9999] bg-cover hidden 
      w-[30px] h-[30px] ml-[-15px] mt-[-15px] border transition-[0.08s] 
      duration-[ease] rounded-[50%] border-solid border-[#f75023] lg:block"
        id="cursor2"
      ></div>
    </>
  );
}

export default Cursor;
