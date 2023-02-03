import React, { useEffect } from "react";
import "./portfolio.css";
import { Link, Route, Routes } from "react-router-dom";

export default function Porfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="portfolio_container">
      <h1 className="header_projects">Mentors</h1>
      <div className="mentor_container">
        <div className="mentor_1">
          <img
            className="vic_pic"
            src="https://media.licdn.com/dms/image/C5603AQGmjxv2HaiNLQ/profile-displayphoto-shrink_200_200/0/1599486473211?e=1680739200&v=beta&t=3EfBYecpsq-2MMLAnDC47CFbmpM0Ib-FPfDWRzyg9gU"
          />
          <h2 className="mentorname">Victor Inocentes</h2>
          <h2 className="mentortitle1">
            2nd Vice President at Data Analytics Group.
          </h2>
          <p className="vic_paragraph">
            Victor taught me in exploring how to code in Python and SQL which
            are foundation in the branch of Data Analysis.
          </p>
        </div>
        <div className="mentor_2">
          <img
            className="mark_pic"
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/46516243_304584480390987_8034802690238185472_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEOHM23pUU2xJyjHg-ykPw-vcdcBReYGQ29x1wFF5gZDZ1B08t1LP5oV0_4YjZSuiyZqUjLdJaLG3DlpA1Qn3S_&_nc_ohc=LdvG0ixX4TwAX9LbWOk&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBdPxOWdeVosWdFX78XUOP9IwzyhoIhTPXY6wh59ovZdw&oe=63FDEAA3"
          />
          <h2 className="mentorname">Mark David Liberato</h2>
          <h2 className="mentortitle1">
            ReactJS Developer at Collabera Philippines
          </h2>
          <p className="vic_paragraph">
            Mark taught me how to establish my skills in web development. I also
            assist him in his freelancing in creating web designs.
          </p>
        </div>
      </div>
      <h1 className="header_projects">Projects</h1>
      <div clssName="pics_container">
        <a href="https://cjmammoth.github.io/Tribute-page/">
          <img src="https://i.imgur.com/sUGfj3i.png" className="pics" />
        </a>
        <a href="https://cjmammoth.github.io/Survey-Form/">
          <img src="https://i.imgur.com/kjORUBm.png" className="pics" />
        </a>
        <a href="https://cjmammoth.github.io/Recreate-Google-Layout/">
          <img src="https://i.imgur.com/aqMOCE7.png" className="pics" />
        </a>
      </div>
      <div clssName="pics_container">
        <a href="https://cjmammoth.github.io/Business-Landing-Page-/">
          <img src="https://i.imgur.com/IZnNlnd.png" className="pics" />
        </a>
        <a href="https://github.com/CJmammoth/QR-CODE-GENERATOR">
          <img src="https://i.imgur.com/oL7Cc1q.png" className="pics" />
        </a>
        <a href="https://github.com/CJmammoth/Getting-the-mean">
          <img src="https://i.imgur.com/T12TvhU.png" className="pics" />
        </a>
      </div>
      <h1 className="header_projects">Certificates</h1>
      <a
        href="https://app.dataquest.io/view_cert/P0F4DD2SKD39F1P2MFK6"
        target="_blank"
      >
        <img src="https://i.imgur.com/rDa89xa.png" className="pics" />
      </a>
      <a
        href="https://courses.buri.io/view/user/certificate/7c6ffc0a-1d05-4300-97b2-fbafc3daf248/pdf"
        target="_blank"
      >
        <img src="https://i.imgur.com/oMMPrUx.png" className="pics" />
      </a>
      <a
        href="https://courses.buri.io/view/user/certificate/11669638-e922-4a52-8fe1-3902b6384b71/pdf"
        target="_blank"
      >
        <img src="https://i.imgur.com/KpZKzRO.png" className="pics" />
      </a>
      <a
        href="https://www.freecodecamp.org/certification/cjmammoth/responsive-web-design"
        target="_blank"
      >
        <img src="https://i.imgur.com/XePh8BY.png" className="pics"></img>
      </a>
      <div>
        <Link to="/contact">
          <button className="home_button">Contact me</button>
        </Link>
      </div>
    </div>
  );
}
