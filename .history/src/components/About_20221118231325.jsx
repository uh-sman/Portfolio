import React from "react";
import "./about.css";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  return (
    <div>
      <div className="about-section">
        <div className="about-card">
          <div className="introduction">
            <h2>Hello</h2>
            <h4>UMAR USMAN</h4>
          </div>
          <div className="about-button">
            <button className="btn1">Work WITH ME</button>
            <button className="btn2">WEB CV</button>
          </div>
        </div>
        <div>
          <RepositoriesCard />
        </div>
      </div>
    </div>
  );
};

export default About;
