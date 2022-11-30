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
          <div>
            <button className="btn">Work WITH ME</button>
            <button className="btn">WEB CV</button>
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
