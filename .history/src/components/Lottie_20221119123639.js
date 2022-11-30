import React from "react";
import "./styles.css";
import Lottie from "react-lottie";
import animationData from "./lotties/kiss-of-the-heart";
const Lottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Lottie;
