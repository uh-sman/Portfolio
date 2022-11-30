import React, { useState } from "react";
import logo from "../assets/ico.png";
import "./navbar.css";
import { Profile } from "./Profile";
export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  // Get the container element
  // let activeLink = document.querySelector("nav-list");
  // Get all buttons with class="btn" inside the container
  // let btnActive = activeLink.getElementsByClassName("btn");
  // Loop through the buttons and add the active class to the current/clicked button
  // for (var i = 0; i < btnActive.length; i++) {
  //   btnActive[i].addEventListener("click", function () {
  //     var currentMode = document.getElementsByClassName("active");
  //     currentMode[0].className = currentMode[0].className.replace("active", "");
  //     this.className += "active";
  //   });
  // }
  // activeLink.addEventListener()
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const style = {
    borderBottom: " 1px solid lightblue",
  };
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="navbar-nav">
            <div>
              <a>
                <img src={logo} className="logo" />
              </a>
            </div>
            <ul className="nav-list">
              <button
                className={isActive ? "btnSelect" : ""}
                onClick={handleClick}
              >
                <a href="">About</a>
              </button>
              <button className="btn">
                <a href="">Projects</a>
              </button>
              <button className="btn">
                <a href="">Services</a>
              </button>
            </ul>
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </nav>
    </div>
  );
};
