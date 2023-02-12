import React from "react";
import "./home.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_container">
      <div className="myself">
        <img className="home_pic" src="https://i.imgur.com/7ICVHIX.jpg"></img>
        <div className="homedetails">
          <h1>Carlos Jamito</h1>
          <h2>Product Specialist</h2>
          <p>
            "I get satisfaction in completing my goals and getting results. An
            explorer that seeks every detail for growth"
          </p>
        </div>
      </div>
      <Link to="/about">
        <button className="home_button">Get to know me more</button>
      </Link>
    </div>
  );
}
