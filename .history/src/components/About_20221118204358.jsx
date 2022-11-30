import React from "react";
import "./about.css";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  return (
    <div>
      <div className="about-section">
        <div className="introduction">
          <h2>Hello</h2>
          <h4>UMAR USMAN</h4>
        </div>
        <div>
          <RepositoriesCard />
        </div>
      </div>
    </div>
  );
};

export default About;
