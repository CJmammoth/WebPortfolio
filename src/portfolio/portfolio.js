import React from "react";
import "./portfolio.css";

export default function Porfolio() {
  return (
    <div className="portfolio_container">
      <h1>
        I started my journey in coding in late 2021. I was mentored and pushed
        by two of my great friends
      </h1>
      <div className="mentor_container">
        <div className="mentor_1">
          <img
            className="vic_pic"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGmjxv2HaiNLQ/profile-displayphoto-shrink_800_800/0/1599486473211?e=1674691200&v=beta&t=r29d6fCNmlsj8_hcsY24A9AVAt7Z6cu2f-tdaUuC0PY"
          ></img>
          <h2 className="mentor_1">
            Victor Inocentes 2nd Vice President at Data Analytics Group
          </h2>
          <p className="vic_paragraph">
            Victor taught me in exploring how to code in Python and SQL which
            are foundation in the branch of Data Analysis.
          </p>
        </div>
        <div className="mentor_2">
          <img
            className="mark_pic"
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/46516243_304584480390987_8034802690238185472_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEOHM23pUU2xJyjHg-ykPw-vcdcBReYGQ29x1wFF5gZDZ1B08t1LP5oV0_4YjZSuiyZqUjLdJaLG3DlpA1Qn3S_&_nc_ohc=X7LJdeksEGsAX_lf5qM&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCogLo5gYE7bv6yvnM4yRnAY9P4ZJGoTU_-4wNW3jiJaA&oe=63A32B63"
          ></img>
          <div className="mark_container">
            <h2>
              Mark David Liberato ReactJS Developer at Collabera Philippines
            </h2>
            <p className="mark_paragraph">
              Mark taught me how to establish my skills in web development. I
              also assist him in his freelancing in creating web designs.
            </p>
          </div>
        </div>
      </div>
      <h1>
        Here are some of projects that I have created in the span of my coding
        journey.
      </h1>
      <a href="https://cjmammoth.github.io/Tribute-page/">Tribute Page</a>
      <a href="https://cjmammoth.github.io/Survey-Form/">Survey Form</a>
      <a href="https://cjmammoth.github.io/Recreate-Google-Layout/">
        Recreate Google Layout
      </a>
      <a href="https://cjmammoth.github.io/Business-Landing-Page-/">
        Business Landing Page
      </a>
      <a href="https://github.com/CJmammoth/QR-CODE-GENERATOR">
        QR Code Generator
      </a>
      <a href="https://github.com/CJmammoth/Getting-the-mean">
        Mean Calculator
      </a>
      <h1>You can also view my certifications</h1>
      <a href="https://app.dataquest.io/view_cert/P0F4DD2SKD39F1P2MFK6">
        Introduction to SQL and Databases
      </a>
      <a href="https://courses.buri.io/view/user/certificate/7c6ffc0a-1d05-4300-97b2-fbafc3daf248/pdf">
        Programming for Intermediate Users Using Python
      </a>
      <a href="https://courses.buri.io/view/user/certificate/11669638-e922-4a52-8fe1-3902b6384b71/pdf">
        Programming for Beginners Using Python
      </a>
      <a href="https://www.freecodecamp.org/certification/cjmammoth/responsive-web-design">
        Responsive Web Design
      </a>
    </div>
  );
}
