import React from "react";
import "./HeroContent.css";

const HeroContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#10001c",
        color: "white",
        padding: "40px",
        borderRadius: "12px",
      }}
      className="hero-content"
    >
      {/* Title Section */}
      <h1 style={{ fontWeight: "bold", color: "#a855f7" }}>Startupathon</h1>
      <h2 style={{ color: "#d4d4d8", fontSize: "1.5rem" }}>
        Your Chance to Build, Lead, and Succeed as a Founder
      </h2>

      {/* Loom Video Embed */}
      <div
        style={{
          marginTop: "20px",
          width: "60%",
          borderRadius: "12px",
          overflow: "hidden",
          border: "2px solid #a855f7",
          boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)",
        }}
      >
        <iframe
          src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.loom.com%2Fembed%2F996f59a2e5c34fd38b86544833c23dde&display_name=Loom&url=https%3A%2F%2Fwww.loom.com%2Fshare%2F996f59a2e5c34fd38b86544833c23dde&image=https%3A%2F%2Fcdn.loom.com%2Fsessions%2Fthumbnails%2F996f59a2e5c34fd38b86544833c23dde-2bf900e52ff1c51c.gif&type=text%2Fhtml&schema=loom"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          title="Loom Video"
          width="100%"
          height="520"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroContent;
