import React from "react";
import "./about.css";
import { Link, Route, Routes } from "react-router-dom";

export default function About() {
  return (
    <div className="about_container">
      <div className="college">
        <img
          className="about_pic"
          src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.18169-9/26903809_1713890262039083_643135480368974715_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeG8rbsOxTVq1w2i8vAqyrXU9IIh1Ek7IDT0giHUSTsgNCLCQiouyxR2oqlfm29CL8dWIpWtnRYR2KBNh5P2fF2Z&_nc_ohc=OxYW53R6DjMAX95sW68&_nc_ht=scontent.fmnl25-1.fna&oh=00_AfAeGT7u8aoVlXHgN-8PDH2BDPJIPB26b2Vye8Zi-lOi0A&oe=64090F7A"
        ></img>
        <p className="college_P">
          '' I finished my bachelor of science in Electronics and Communications
          Engineering at Central Colleges of the Philippines. I did a lot of
          school-based projects from there, one of which is I am very proud of
          is our Self-sustaining Smart Irrigation System. ''
        </p>
      </div>
      <div className="hobbies">
        <img
          className="about_pic2"
          src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/61159524_2306692602743493_6496107420673114112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGEVigPT2bbzAHYtyUq8rQWBEN30bxgT-4EQ3fRvGBP7hLRReT_b7WJ2XrC-7rGTvrKW8FHxwfK91O1O3G9txoK&_nc_ohc=PhP5gyeTLDAAX9yO5dF&_nc_ht=scontent.fmnl25-1.fna&oh=00_AfBcIxMbY4ZhNLoRpCoPa_ARF_R1Vj4waD2BoDS2sPpxlA&oe=640920E0"
        ></img>
        <p className="college_P2">
          "I took the board exam for both Electronics and Communications
          Engineering and Electronics Technician on April 2018 and passed the
          licensure examinations for Electronics Technician only."
        </p>
      </div>
      <div className="college">
        <img
          className="about_pic"
          src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t31.18172-8/13350273_1422328667793225_9215470006585253374_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeE0MjudjaxUnWG6aLdjdqtXv97K-9qlHEy_3sr72qUcTJxcV5fD8sxFba1jVarJk4fD2e0ZeADMTph00C2UHK7F&_nc_ohc=2bNrJqFqVdEAX_NGo7Y&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfBbhuk1VUIVffcAPds1KWpecCkKs3Fu56sazRpd7nkjFw&oe=64091572"
        ></img>
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
