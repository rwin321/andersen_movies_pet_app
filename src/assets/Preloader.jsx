import preloader from "./imgs/preloader.svg";
import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="loading..." />
    </div>
  );
};

export default Preloader;
