import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp, FaFacebook, FaRegWindowClose } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import burger from "../assets/burger-menu.png";
import close from "../assets/icons8.png";

import "animate.css";
import "./profile.css";
export const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const style = {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    background: "white",
    width: "300px",
    listStyle: " none",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    transform: `${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"}`,
    textAlign: "start",

    transition: "transform 0.3s ease-in",
  };

  return (
    <div>
      <div>
        <section className="profile-section ">
          <button className="button">
            <a>Github</a>
          </button>
          <a>Contact</a>
          <a>
            <BsInstagram />
          </a>
          <a>
            <TiSocialTwitterCircular className="twitter" />
          </a>
          <a>
            <FaFacebook />
          </a>
        </section>
        {isActive ? (
          <div className={`style`}>
            <div>
              <FaRegWindowClose
                className="close"
                onClick={() => setIsActive(!isActive)}
              />
              {/* <img src={close} /> */}
            </div>
            <section className="sidebar-section ">
              <ul className="links">
                <Link to="/">
                  <a href="">About</a>
                </Link>
                <Link to="/projects">
                  <a href="">Projects</a>
                </Link>
                <Link to="/services">
                  <a href="">Services</a>
                </Link>
                <button className="button">
                  <a className="link">Github</a>
                </button>
                <a>Contact</a>
              </ul>
              <ul className="link-icons">
                <a>
                  <BsInstagram className="instagram" />
                </a>
                <a>
                  <TiSocialTwitterCircular className="twitter" />
                </a>
                <a>
                  <FaFacebook className="facebook" />
                </a>
              </ul>
            </section>
          </div>
        ) : (
          <div>
            <img
              src={burger}
              className="burger-menu"
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
