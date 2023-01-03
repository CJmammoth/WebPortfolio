import React from "react";
import "./home.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_container">
      <div className="myself">
        <img
          className="home_pic"
          src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/132634479_4261462607203094_1391698917224707194_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFv1hAlGI4DomqUYFGF11xPU9bKoFVNaNVT1sqgVU1o1dcdJdjLNTJ9W1O_Khir6CzojNiCPQiXedMeY7GAYhzM&_nc_ohc=IJScwdflLBsAX-hSCzm&_nc_oc=AQmdC7je2W6f1x7h_AEBfhwpn4xBUMbGf1QVNSziWH1fMT43uNHgxO0pM8GpPx5IcDE&tn=JSvGOgD4__jGzSO5&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfDIoPEzMLrv5R2lJeTHnzlzKaCbwdS7GsOzr_3iLmuLbg&oe=63DA625F"
        ></img>
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
