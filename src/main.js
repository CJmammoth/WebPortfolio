import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import About from "./about me/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
