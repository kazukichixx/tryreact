import React from "react";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src="image-1.png" />
          <img className="img" alt="Image" src="image-2.png" />
          <div className="the-north-cheker">The&nbsp;&nbsp;North Cheker</div>
          <img className="rectangle" alt="Rectangle" src="rectangle-6.svg" />
          <div className="text-wrapper">START</div>
        </div>
      </div>
    </div>
  );
};
