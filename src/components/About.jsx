import lottie from "lottie-web";
import React from "react";
import "animate.css";
// import monitor from "../assets/monitor.png";
// import Lottie from "./Lottie";
import Lottie from "lottie-react";
import hand from "../assets/handshake.json";
import "./about.css";
// import json from "../assets/80604-hand.json";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  const style = {
    height: 120,
    // position: "relative",
    // zIndex: 1,
  };
  const options = {
    animationData: hand,
    loop: true,
    width: 50,
  };
  // lottie.loadAnimation({
  //   container: lottie, // the dom element that will contain the animation
  //   renderer: "svg",
  //   loop: true,
  //   autoplay: true,
  //   path: "../assets/80604-hand.json", // the path to the animation json
  // });
  return (
    <div>
      <div className="about">
        <div className="introduction">
          <h2>Hello,</h2>
          <h4>Am UMAR USMAN</h4>
        </div>
        <div className="about-side">
          <div className="about-myself">
            <div className="image-section">
              {/* <Lottie /> */}
              {/* <div style={{ marginLeft: "-20px" }}> */}
              <Lottie animationData={hand} loop={true} style={style} />
              {/* </div> */}
              <h1>hello,</h1>
            </div>
            <div className="text-section">
              <p className="text">
                I'm Umar Usman, a cola lover, 22-year-old front-end web
                developer with a solid and strong self taught educational
                background in Information Technology (I.C.T). I work as a
                freelancer. Now in Ilorin, Kwarar State, Nigeria. But I work
                remotely for international clients.
              </p>
              <p className="text">
                I started creating web designs using HTML and CSS back in 2018.
                I am a JavaScript enthusiast and extremely passionate about
                coding. I love to learn and create new things everyday and keep
                updated with new technologies. I find passion with coding
              </p>
              <p className="text">
                To conclude, I love to educate and mentor others to achieve
                their full potential and deepen my knowledge. You can find out
                on my <a>Web CV</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
