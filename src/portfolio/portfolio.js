import React from "react";
import "./portfolio.css";

export default function Home() {
  return (
    <div className="portfolio_container">
      <p>
        I started my journey in coding in late 2021. I was mentored and pushed
        by two of my great friends
      </p>
      <img
        className="vic_pic"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGmjxv2HaiNLQ/profile-displayphoto-shrink_800_800/0/1599486473211?e=1674691200&v=beta&t=r29d6fCNmlsj8_hcsY24A9AVAt7Z6cu2f-tdaUuC0PY"
      ></img>
      <h1>
        Victor Inocentes<span> 2nd Vice President at Data Analytics Group</span>
      </h1>
      <p>
        Victor taught me in exploring how to code in Python and SQL which are
        foundation in the branch of Data Analysis.{" "}
      </p>
      <img
        className="mark_pic"
        src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/46516243_304584480390987_8034802690238185472_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEOHM23pUU2xJyjHg-ykPw-vcdcBReYGQ29x1wFF5gZDZ1B08t1LP5oV0_4YjZSuiyZqUjLdJaLG3DlpA1Qn3S_&_nc_ohc=X7LJdeksEGsAX_lf5qM&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCogLo5gYE7bv6yvnM4yRnAY9P4ZJGoTU_-4wNW3jiJaA&oe=63A32B63"
      ></img>
      <h1>
        Mark David Liberato{" "}
        <span>ReactJS Developer at Collabera Philippines</span>
      </h1>
      <p>
        Mark taught me how to establish my skills in web development. I also
        assist him in his freelancing in creating web designs.
      </p>
      <h1>
        Here are some of projects that I have created in the span of my coding
        journey.
      </h1>
    </div>
  );
}
