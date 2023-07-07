import React, { useEffect } from "react";
import classes from "../styles/Cursor.module.css";

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
      <div className={classes.cursor1} id="cursor1">
        .
      </div>
      <div className={classes.cursor2} id="cursor2"></div>
    </>
  );
}

export default Cursor;
