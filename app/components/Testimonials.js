"use client";

import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Client1, Client2, Client3 } from "./Clients";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  // eslint-disable-next-line react/jsx-key
  const slides = [<Client1 />, <Client2 />, <Client3 />];

  useEffect(() => {
    const slidesCount = slides.length;
    const interval = setInterval(() => {
      if (!isMouseOver) {
        setCurrentSlide((prevSlide) => {
          if (prevSlide === slidesCount - 1) {
            setIsReversed(true);
            return prevSlide - 1;
          } else if (prevSlide === 0) {
            setIsReversed(false);
            return prevSlide + 1;
          } else {
            return isReversed ? prevSlide - 1 : prevSlide + 1;
          }
        });
      }
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseOver, isReversed]);

  return (
    <div className="w-full flex justify-center flex-wrap lg:w-full">
      <div className="relative overflow-hidden h-[380px] w-[430px] px-[5px] py-0 lg:w-full lg:p-0">
        <div
          className="transition-transform duration-[0.5s] ease-[ease] h-[340px] w-full flex justify-between"
          style={{
            transform: `translateX(calc(-${(currentSlide - 1) * 100}% - ${
              (currentSlide - 1) * 10
            }px))`,
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          {slides.map((slide, index) => (
            <div key={index}>{slide}</div>
          ))}
        </div>
        <div className="flex justify-center mt-2.5">
          <div
            className="flex justify-center text-[15px] text-[#f75023] mx-[5px] my-0 p-0.5 rounded-[50%] border-2 border-solid border-[#f7a223]"
            onClick={() => setCurrentSlide(1)}
          >
            <FaCircle />
          </div>
          <div
            className="flex justify-center text-[15px] text-[#f75023] mx-[5px] my-0 p-0.5 rounded-[50%] border-2 border-solid border-[#f7a223]"
            onClick={() => setCurrentSlide(2)}
          >
            <FaCircle />
          </div>
          <div
            className="flex justify-center text-[15px] text-[#f75023] mx-[5px] my-0 p-0.5 rounded-[50%] border-2 border-solid border-[#f7a223]"
            onClick={() => setCurrentSlide(3)}
          >
            <FaCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
