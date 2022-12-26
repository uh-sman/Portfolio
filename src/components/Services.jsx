import React from "react";
import { MobileCarousel } from "./MobileCarousel";
import { useInterval } from "./MobileCarousel";
import "./services.css";
import "animate.css";
import { services } from "./repositories";
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
          {services.map(({ id, title, text }) => {
            return (
              <div key={id} className="head">
                <h2>{title}</h2>
                <text>
                  <p>{text}</p>
                </text>
              </div>
            );
          })}
        </div>
        {/* <MobileCarousel /> */}
      </div>
    </div>
  );
};

export default Services;
// Looking for a reliable and efficient
