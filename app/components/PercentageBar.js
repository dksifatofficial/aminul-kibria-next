'use client'

import React, { useEffect, useRef, useState } from "react";
import classes from "../styles/PercentageBar.module.css";

const PercentageBar = ({ children, progress, ...rest }) => {
  const [percent, setPercent] = useState(0);
  const tooltipRef = useRef();

  useEffect(() => {
    updatePercentage(progress);
  }, [progress]);

  const updatePercentage = (newPercent) => {
    setPercent(newPercent);
  };

  return (
    <div className={classes.percentageC}>
      {children}
      <h5
        style={{
          left: `calc(${progress}% - 35px)`,
          color: `hsl(${percent * 10}, 100%, 40%)`,
        }}
        className={classes.tooltip}
        ref={tooltipRef}
      >
        {progress}%
      </h5>
      <div className={classes.bar}>
        <div
          className={classes.underline}
          style={{
            width: `${percent}%`,
            backgroundColor: `hsl(${percent * 10}, 100%, 40%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PercentageBar;
