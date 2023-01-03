import React from "react";
import "./nav.css";
import { NavLink, Route, Routes } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfoiio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
