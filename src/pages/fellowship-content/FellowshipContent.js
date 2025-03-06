import React from "react";
import "./FellowshipContent.css";

const FellowshipContent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="fellowship-content">
        <h2 class="fellowship-head">Got an idea of your own?</h2>
        <h3 class="fellowship-subhead">
          We are always on the lookout for visionaries with great startup ideas,
          ready to become successful founders. If that’s you, apply below for
          our Fellowship program.
        </h3>
        <button>Apply For Fellowship</button>
      </div>
    </div>
  );
};

export default FellowshipContent;
