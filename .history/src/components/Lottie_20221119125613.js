import React from "react";
import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./lotties/kiss-of-the-heart";
const Lottie = () => {
  lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "data.json", // the path to the animation json
  });
  return (
    <div>
      {/* <Lottie options={defaultOptions} height={400} width={400} /> */}

      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Lottie;
