import React, { useState } from "react";
import "./FounderNetwork.css";

const initialProfiles = [
  {
    name: "Cillian Leonowicz",
    role: "Director in Technology Consulting & Blockchain Lead, EY",
    description:
      "Set up a Big 4's first global Blockchain Lab, managed some of the earliest PoC's in Europe and first 'production' systems...",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/674b40cb604eb57ebef2bf08_k6vSPQLVb8ywxrZDCfscGvegO8SfRmrJo7RrjE07VeQ.jpg",
  },
  {
    name: "Frank Wang",
    role: "Transformative Work Lead at Mask Network, Co-Founder at Meson Network, Mask",
    description:
      "Co-founded Meson Network, bootstrapped to reach 2/3 of Akamai's bandwidth resources in 3 months...",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328…9uHOvMYhvfcVhcnBWFL4qo0Rjkt_fkoJRePG2n8-p-800.png",
  },
  {
    name: "Eric Hendrickus",
    role: "Investments, Central Capital Ventura",
    description:
      "Mentor in SYNRGY, a fintech focused accelerator, Mentor in 1000 Startup Digital, an accelerator...",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328…NydCWPBu6Ku_DZlVkEEP2mv2MWkM2_jHd9EnSQc-p-800.png",
  },
  {
    name: "Stefon Crawford",
    role: "VC Analyst, General Motors Ventures",
    description:
      "Experienced Investor responsible for identifying innovation within the private market for General Motors...",
    image:
      "https://cdn.prod.website-files.com/623eb8c6eb9b328…YQw5fo3Zrsd4GlYxBPyPqrBmfy-_ErZIJRgfSe4-p-800.png",
  },
];

const moreProfiles = [
  {
    name: "Jane Doe",
    role: "Startup Investor",
    description:
      "Investor in early-stage startups, helping them scale with funding and mentorship...",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "John Smith",
    role: "Tech Entrepreneur",
    description:
      "Founder of multiple successful startups in AI and blockchain...",
    image: "https://via.placeholder.com/150",
  },
];

const FounderNetwork = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setProfiles([...profiles, ...moreProfiles]);
    setShowMore(true);
  };

  return (
    <div className="founder-network">
      <h2>
        By getting accepted you unlock access to our elite founder network.
      </h2>
      <p>
        Join Persist and gain access to our 400+ millionaire and billionaire
        startup network.
      </p>

      <div className="profile-container">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p className="role">{profile.role}</p>
            <p className="description">{profile.description}</p>
            <button className="linkedin-btn">in</button>
          </div>
        ))}
      </div>

      {!showMore && (
        <button className="see-more" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </div>
  );
};

export default FounderNetwork;
