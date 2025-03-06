import React from "react";
import "./RewardsSection.css"; // Import the CSS file

const rewards = [
  { icon: "💰", title: "Competitive Salary" },
  { icon: "💸", title: "≥ $10,000 USD in Company Funding" },
  { icon: "📈", title: "≥ 10% Founder Equity" },
  { icon: "☁️", title: "≥ $100,000 USD AWS Credits" },
  { icon: "🤖", title: "$1,000 OpenAI Credits" },
  { icon: "💻", title: "$120,000 USD IBM Cloud Credits" },
  { icon: "📞", title: "$2,500 Twilio Credits" },
  { icon: "📊", title: "$2,000 Airtable Credits" },
];

const RewardsSection = () => {
  return (
    <div className="rewards-container">
      <h2>Startupathon Success Comes with Extraordinary Rewards</h2>
      <div className="rewards-grid">
        {rewards.map((reward, index) => (
          <div className="reward-card" key={index}>
            <span className="reward-icon">{reward.icon}</span>
            <p>{reward.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
