import React from "react";
import "./ChallengesSection.css";

const challenges = [
  {
    icon: "💻",
    name: "VibeCoder",
    funding: "$10,500",
    description:
      'An innovative "Vibe coding" tool with Spotify integration, smart code explanations, and built-in design assets.',
    deadline: "March 14, 2025",
  },
  {
    icon: "🧩",
    name: "BiasBuster",
    funding: "$13,000",
    description:
      "A Chrome extension and platform to detect and remove bias from news articles, ensuring objective content.",
    deadline: "March 13, 2025",
  },
  {
    icon: "📈",
    name: "CPATech",
    funding: "$10,500",
    description:
      "A financial dashboard with APIs and AI insights to showcase your full-stack skills and land a job.",
    deadline: "March 14, 2025",
  },
];

const ChallengesSection = () => {
  return (
    <div className="container">
      <h2 className="title">Ongoing Startupathon Challenges</h2>
      <p className="subtitle">
        Start your journey—tackle live challenges, earn equity, and lead the
        future.
      </p>
      <div className="grid">
        {challenges.map((challenge, index) => (
          <div className="card" key={index}>
            <div className="icon">{challenge.icon}</div>
            <h3>{challenge.name}</h3>
            <p className="funding">
              Initial Funding Offered: <span>{challenge.funding}</span>
            </p>
            <p>{challenge.description}</p>
            <p className="deadline">
              🔥 Deadline approaching! Apply by {challenge.deadline}!
            </p>
            <button className="button">View Challenge Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSection;
