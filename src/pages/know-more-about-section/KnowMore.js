import React from "react";

const KnowMore = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
        Startupathon Success)
      </h1>
      <div style={{ border: "2px solid #a855f7", width: "60%" }}>
        <iframe
          src="https://www.youtube.com/embed/pn_HoowYNTQ?wmode=opaque&widget_referrer=https%3A%2F%2Fpersistventures.com%2F&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1&forigin=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252Fpn_HoowYNTQ%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253Dpn_HoowYNTQ%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252Fpn_HoowYNTQ%252Fhqdefault.jpg%26key%3D96f1f04c5f4143bcb0f2e68c87d65feb%26type%3Dtext%252Fhtml%26schema%3Dyoutube&aoriginsup=1&aorigins=https%3A%2F%2Fpersistventures.com&gporigin=https%3A%2F%2Fpersistventures.com%2F&vf=1"
          // frameBorder="0"
          scrolling="no"
          allowFullScreen
          title="Loom Video"
          width="100%"
          height="520"
        ></iframe>
      </div>
      <h1>Our Hiring Process: Shared Through Candidate Stories</h1>
      <div style={{ border: "2px solid #a855f7", width: "60%" }}>
        <iframe
          src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?referrer=https%3A%2F%2Fpersistventures.com%2F"
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

export default KnowMore;
