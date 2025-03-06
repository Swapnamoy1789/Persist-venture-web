import React from "react";
import "./CompletedStartupathon.css";

const startups = [
  {
    name: "NeighborGood",
    logo: "🔶",
    founder: "Purnendu Thamb",
    role: "Lead Developer, NeighborGood.",
    description:
      "NeighborGood aims to create the simplest platform for neighborhoods to connect, using an AI agent that acts as a social extrovert to find activities for people to enjoy together.",
    funding: "$61,500",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67bdf32ed73b9d632859a762_purnedu.jpg",
  },
  {
    name: "Devisai",
    logo: "😏",
    founder: "Naman Jain",
    role: "Leader, DevisAI.",
    description:
      "Generate up to 20 meme tokens daily. Users vote, and the top-voted coin gets featured on pump.fun with their website, Twitter, and Telegram channel.",
    funding: "$10,500",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/672cfb9ed3dd86dcb2c1763e_Naman%20Jain(Devis%20AI)-min.jpg",
  },
  {
    name: "Ovadrive",
    logo: "🟣",
    founder: "Yash Rastogi",
    role: "Lead Developer, Ovadrive.",
    description:
      "Ovadrive is designed to turn your phone into an assistant following you everywhere, learning all about your life and helping to utilize that.",
    funding: "$61,500",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67be0e24132d70b9cdf2b58c_1667138991083%20(2).jpg",
  },
];

const CompletedStartupathon = () => {
  return (
    <div className="startupathon-container">
      <h1>Completed Startupathon Challenges</h1>
      <p className="subheading">
        People like you have cracked Startupathon challenges and are now leading
        thriving startups.
      </p>
      <div className="startup-cards">
        {startups.map((startup, index) => (
          <div className="startup-card" key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={startup.image}
                alt={startup.founder}
                className="profile-img"
              />
              <div style={{ marginTop: "-20px" }}>
                <h2>
                  {startup.name} <span>{startup.logo}</span>
                </h2>

                <h3>{startup.founder}</h3>
                <p className="role">{startup.role}</p>
                <p className="description">{startup.description}</p>
              </div>
            </div>
            <p className="funding">
              <strong>Initial Funding Offered:</strong>{" "}
              <span>{startup.funding}</span>
            </p>
            <button className="details-btn">View More Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedStartupathon;
