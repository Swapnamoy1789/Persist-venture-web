import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="subscribe-content">
        <h2 class="subscribe-subhead">
          Sign up to get notified first about new Startupathon projects and
          receive updates through our newsletter.
        </h2>
        <div class="subscribe-input">
          <input placeholder="Enter Your email ID" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
