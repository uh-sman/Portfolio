import React from "react";
import "./contact.css";
import message from "../assets/Message.png";
import call from "../assets/Stroke 5.png";
import whatsapp from "../assets/whatsapp-logo.png";

import { contact } from "./repositories";
import SwipeableViews from "react-swipeable-views";
import "animate.css";
export const Contact = () => {
  const styles = {
    slide: {
      padding: 15,
      minHeight: 300,
      color: "#fff",
      // display: "flex",
    },
    slide1: {
      background: "#222222",
      borderRadius: "12px",
    },
    slide2: {
      background: "#222222",
      borderRadius: "12px",
    },
    slide3: {
      background: "#222222",
      borderRadius: "12px",
    },
  };
  return (
    <div>
      <div className="contact-container">
        <h1>
          You can contact me via the following platforms <br />
          to discuss business.
        </h1>
        <div className="contact-content">
          {contact &&
            contact.map(({ contact, id, title, text, icon }) => {
              return (
                <div className="contact-items" key={id}>
                  <ul>
                    <h2>{title}</h2>
                    <h4>{text}</h4>
                    <li className="icons">
                      <img src={icon} className="image" />
                      {contact}
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
      <div className="slider">
        <SwipeableViews enableMouseEvents>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <div className="slide-container">
              <h2>Email</h2>
              <h4>Access me with the email below</h4>
              <li className="icons">
                <img src={message} className="image" />
                @uumar7000@gmail.com
              </li>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <div className="slide-container">
              <h2>Phone Number</h2>
              <h4>Available 24/7 for calls</h4>
              <li className="icons">
                <img src={call} className="image" />
                08129337783
              </li>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <div className="slide-container">
              <h2>What's App</h2>
              <h4>Message me on the what's number below</h4>
              <li className="icons">
                <img src={whatsapp} className="image" />
                07051095981
              </li>
            </div>
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};
