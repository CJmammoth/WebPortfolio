import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact_container">
      <h1 className="header_projects">Contact and Socials</h1>
      <div className="mydetails">
        <div className="reachme">
          <h2>Mobile Number: +639663312920</h2>
          <h2>Email: carlosjamito@gmail.com</h2>
        </div>
        <img className="mypic" src="https://i.imgur.com/fwWai7s.jpg"></img>
      </div>
      <div className="socials">
        <a href="www.linkedin.com/in/carlosjamito">
          <img
            className="linkedin"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          ></img>
        </a>
        <a href="https://www.facebook.com/carlos.jamito/">
          <img
            className="facebook"
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          ></img>
        </a>
        <a href="https://www.instagram.com/cjmammoth/">
          <img
            className="instagram"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          ></img>
        </a>
      </div>
    </div>
  );
}
