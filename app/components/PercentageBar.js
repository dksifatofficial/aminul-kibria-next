"use client";

import { useEffect, useRef, useState } from "react";

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
    <div className="relative w-full h-[70px] mt-0">
      {children}
      <h5
        style={{
          left: `calc(${progress}% - 35px)`,
          color: `hsl(${percent * 10}, 100%, 40%)`,
        }}
        className="absolute transition-[0.5s] duration-[ease-in-out] top-0"
        ref={tooltipRef}
      >
        {progress}%
      </h5>
      <div className="w-full h-2 bg-[#dad7d7] absolute mt-[35px] rounded-[10px]">
        <div
          className="absolute h-full bg-[#f75023] transition-[width] duration-[0.5s] 
          ease-[ease-in-out] rounded-tl-[10px] rounded-bl-[10px] left-0 bottom-0"
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
