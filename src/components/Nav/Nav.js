import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="nav-main"
      >
        <img
          src={
            "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
          }
          alt="logo"
          style={{ width: "200px" }}
        />
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#">Ongoing Startupathon</a>
            <a href="#">Completed Startupathon</a>
            <a href="#">Startupathon Guide</a>
            <a href="#">How To Win </a>
            <a href="#">Mentor Network</a>
          </div>
          <button>Apply For Fellowship</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
