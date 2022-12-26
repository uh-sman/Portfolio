// import React from "react";
// import "./styles.css";

// import animationData from "./lotties/kiss-of-the-heart";
// import hand from "../assets/80604-hand.json";
// const Lottie = () => {
//   lottie.loadAnimation({
//     container: element,  the dom element that will contain the animation
//     renderer: "svg",
//     loop: true,
//     autoplay: true,
//     path: "data.json",  the path to the animation json
//   });
//   return (
//     <div>
//       <Lottie options={defaultOptions} height={400} width={400} />

//       <Lottie animationData={hand} loop={true} />
//     </div>
//   );
// };

// export default Lottie;
import React, { Component } from "react";
import lottie from "react-lottie";
import animationData from "../assets/80604-hand.json";

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto",
    };

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
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        {/* <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false })}
        >
          play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          pause
        </button> */}
      </div>
    );
  }
}

export default Lottie;
