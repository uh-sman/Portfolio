import React from "react";
import "./services.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
            <h2>Web Development</h2>
            <text>
              <p>
                HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
                {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
              </p>
            </text>
          </div>
          <div>
            <h1></h1>
            <h2>Responsive Design</h2>
            <text>
              <p>
                Research shows as of 2017 you can't go online without having a
                mobile responsive website. Let me take care of that for you!
              </p>
            </text>
          </div>
          <div>
            <h1></h1>
            <h2>PHOTOSHOP DESIGN {" {PSD}"} TO HTML</h2>
            <text>
              <p>
                Already have a design in PhotoShop, Invision, Figma or any other
                format, I can convert it from scratch into pixel-perfect
                HTML/CSS/JS
              </p>
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
