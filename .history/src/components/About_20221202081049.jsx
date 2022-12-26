import lottie from "lottie-web";
import React from "react";
import monitor from "../assets/monitor.png";
import "./about.css";
import json from "../assets/80604-hand.json";
// import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../assets/80604-hand.json", // the path to the animation json
  });
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
              <div
                style="width:1067px;height:600px"
                class="lottie"
                data-animation-path="animation/"
                data-anim-loop="true"
                data-name="ninja"
              ></div>
              {/* <Lottie /> */}
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
