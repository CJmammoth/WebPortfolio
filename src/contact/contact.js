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
        <img className="mypic" src="https://i.imgur.com/fwWai7s.jpg" />
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/carlosjamito" target="_blank">
          <img
            className="facebook"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          />
        </a>
        <a href="https://www.facebook.com/carlos.jamito/" target="_blank">
          <img
            className="facebook"
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          />
        </a>
        <a href="https://www.instagram.com/cjmammoth/" target="_blank">
          <img
            className="facebook"
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          />
        </a>
        <a href="https://github.com/CJmammoth" target="_blank">
          <img
            className="facebook"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
        </a>
      </div>
    </div>
  );
}
