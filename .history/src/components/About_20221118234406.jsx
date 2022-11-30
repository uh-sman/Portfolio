import React from "react";
import monitor from "../assets/monitor.png";
import "./about.css";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="introduction">
          <h2>Hello,</h2>
          <h4>Am UMAR USMAN</h4>
        </div>
        <div className="about-myself">
          <p>
            I'm Umar Usman, a cola lover, 22-year-old front-end web developer{" "}
            <img src={monitor} className="computer-image" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
