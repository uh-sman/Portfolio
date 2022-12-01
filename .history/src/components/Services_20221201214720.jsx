import React from "react";
import { MobileCarousel } from "./MobileCarousel";
import { useInterval } from "./MobileCarousel";
import "./services.css";

const Services = () => {
  const slide = [];
  return (
    <div>
      <div className="containers">
        <section className="header">
          <h2>Host Your Business</h2>
          <h3>
            I will help you create a remarkable first impression with
            mind-blowing creative designs
          </h3>
        </section>
        <div className="sections">
          <div className="head">
            <h1></h1>
            <h2></h2>
            <text>
              <p></p>
            </text>
          </div>
          <div>
            <h1></h1>
            <h2></h2>
            <text>
              <p></p>
            </text>
          </div>
          <div>
            <h1></h1>
            <h2></h2>
            <text>
              <p></p>
            </text>
          </div>
        </div>
        <MobileCarousel />
      </div>
    </div>
  );
};

export default Services;
// Looking for a reliable and efficient
