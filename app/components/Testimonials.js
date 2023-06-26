'use client'

import { FaCircleDot } from "react-icons/fa";
import { useEffect, useState } from "react";
import classes from "../styles/Testimonials.module.css";
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
    <div className={classes.container}>
      <div className={classes.testimonials}>
        <div
          className={classes.row}
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
        <div className={classes.buttons}>
          <div className={classes.button} onClick={() => setCurrentSlide(1)}>
            <faCircleDot />
          </div>
          <div className={classes.button} onClick={() => setCurrentSlide(2)}>
            <faCircleDot />
          </div>
          <div className={classes.button} onClick={() => setCurrentSlide(3)}>
            <faCircleDot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
