import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const MobileCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <h2>Web Development</h2>
          <text>
            <p>
              HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
              {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
            </p>
          </text>
        </div>
        <div>
          <h2>Web Development</h2>
          <text>
            <p>
              HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
              {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
            </p>
          </text>
        </div>
        <div>
          <h2>Web Development</h2>
          <text>
            <p>
              HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
              {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
            </p>
          </text>
        </div>
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
