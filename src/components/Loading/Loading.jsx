import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-container">
        <div className="atom">
          <div className="electron"></div>
          <div className="electron-alpha"></div>
          <div className="electron-omega"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
