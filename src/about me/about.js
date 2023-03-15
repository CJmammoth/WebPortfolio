import React from "react";
import "./about.css";
import { Link, Route, Routes } from "react-router-dom";

export default function About() {
  return (
    <div className="about_container">
      <div className="college">
        <img className="about_pic" src="https://i.imgur.com/ovonAkE.jpg"></img>
        <p className="college_P">
          '' I finished my bachelor of science in Electronics and Communications
          Engineering at Central Colleges of the Philippines. I did a lot of
          school-based projects from there, one of which is I am very proud of
          is our Self-sustaining Smart Irrigation System. ''
        </p>
      </div>
      <div className="hobbies">
        <img className="about_pic2" src="https://i.imgur.com/4o0W0U7.jpg"></img>
        <p className="college_P2">
          "I took the board exam for both Electronics and Communications
          Engineering and Electronics Technician on April 2018 and passed the
          licensure examinations for Electronics Technician only."
        </p>
      </div>
      <div className="college">
        <img className="about_pic" src="https://i.imgur.com/6yTo0XJ.jpg"></img>
        <p className="college_P">
          '' On my extra time, I play guitars for Kampon. Blackened-death metal
          band hailing from the depths of the metro bringing extremely
          suffocating music. We have been featured twice in issues of PULP
          magazine and got recognize by CNN Life and FHM for one of the best
          releases of 2017. ''
        </p>
      </div>
      <div className="hobbies">
        <iframe
          className="about_pic"
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/oN1flmmcFj0"
          title="Valorant Stream Highlights #1 -RAZE-"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p className="college_P">
          '' I also do content creating mostly gaming and right now I am
          planning to incorporate my knowledge in music. I have done some
          collaboration on this road, one of which is a promotion I have done
          for Pizza Hut Philippines. ''
        </p>
      </div>
      <div>
        <Link to="/portfolio">
          <button className="home_button">View my Portfolio</button>
        </Link>
      </div>
    </div>
  );
}
