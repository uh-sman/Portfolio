import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ico.png";
import "./navbar.css";
import { Profile } from "./Profile";
export const Navbar = () => {
  // const [active, isActive] = useState(false);
  // const [activeLink, setActiveLink] = useState(true);
  // const clickedLink = ["teal"];
  // const clicked = document.querySelector("nav-list");

  // btn.addEventListener("click", () => {
  //   document.body.style.borderBottomColor = clickedLink;
  // });
  // for (var i = 0; i < activeLink.length; i++)
  // Get the container element
  // const activeLink = document.querySelector("nav-list");
  // const style = {
  //   backgroundColor: "red",
  //   width: "100%",
  //   height: "100%",
  // };
  // Get all buttons with class="btn" inside the container
  // const btnActive = activeLink.getElementsByClassName("btn");
  // Loop through the buttons and add the active class to the current/clicked button
  // for (var i = 0; i < btnActive.length; i++) {
  //   btnActive[i].addEventListener("click", function () {
  //     var currentMode = document.getElementsByClassName("active");
  //     currentMode[0].className = currentMode[0].className.replace("active", "");
  //     this.className += "active";
  //   });
  // }
  // activeLink.addEventListener()
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
              <NavLink to="/" className="btn ">
                <a href="">About</a>
              </NavLink>

              <NavLink to="/projects">
                <a href="" className="btn">
                  Projects
                </a>
              </NavLink>
              <NavLink to="/services" className="btn">
                <a href="" className="btn">
                  Services
                </a>
              </NavLink>
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
