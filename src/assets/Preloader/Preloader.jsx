import preloader from "./preloader_img.svg";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="loading..." />
    </div>
  );
};

export default Preloader;
