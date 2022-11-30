import React from "react";
import "./styles.css";
import lottie from "react-lottie";
// import animationData from "./lotties/kiss-of-the-heart";
import hand from "../assets/80604-hand.json";
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
      <Lottie options={defaultOptions} height={400} width={400} />

      {/* <Lottie animationData={hand} loop={true} /> */}
    </div>
  );
};

export default Lottie;
