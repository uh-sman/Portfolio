// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "./services.css";
// import { Carousel } from "react-responsive-carousel";
// const MobileCarousel = () => {
//   return (
//     <div>
//       <Carousel>
//         <div>
//           <h2>Web Development</h2>
//           <text>
//             <p>
//               HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
//               {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
//             </p>
//           </text>
//         </div>
//         <div>
//           <h2>Web Development</h2>
//           <text>
//             <p>
//               HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
//               {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
//             </p>
//           </text>
//         </div>
//         <div>
//           <h2>Web Development</h2>
//           <text>
//             <p>
//               HTML, CSS{" {Tailwind,MaterialUi,ANT DESIGN}"}, JavScript
//               {" {MERN STACK}"},Firebase ? You name it. I have it all Covered!
//             </p>
//           </text>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default MobileCarousel;

import React, { useEffect, useRef } from "react";

// No packages needed. I use tailwind CSS, but it's not required.
export const MobileCarousel = ({}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselReference = useRef(null);
  useInterval(() => {
    setActiveIndex((activeIndex + 1) % 4);
    if (!!carouselReference && !!carouselReference.current) {
      const width = carouselReference.current.offsetWidth;
      carouselReference.current.scrollTo(width * activeIndex, 0);
    }
  }, 2000);

  return (
    <div className="w-full aspect-video text-center overflow-hidden h-full">
      <div
        ref={carouselReference}
        className="flex overflow-x-auto snap-x scroll-smooth h-full rounded-xl"
      >
        <div
          className={
            "snap-start w-full h-full aspect-video object-cover bg-blue-100"
          }
        />
        <div
          className={
            "snap-start w-full h-full aspect-video object-cover bg-blue-100"
          }
        />
      </div>
    </div>
  );
};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
