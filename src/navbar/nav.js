import React from "react";
import "./nav.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/about">About</Link>
          </li>
          <li className="active">
            <Link to="/portfolio">Portfoio</Link>
          </li>
          <li className="active">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
