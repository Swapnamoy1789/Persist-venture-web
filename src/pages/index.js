import React from "react";
import Nav from "../components/Nav/Nav";
import HeroContent from "./startupathon-hero-content/HeroContent";
import RewardsSection from "./reward-section/RewardsSection";
import ChallengesSection from "./ongoing-chalanges/ChallengesSection";
import KnowMore from "./know-more-about-section/KnowMore";
import FellowshipContent from "./fellowship-content/FellowshipContent";
import CompletedStartupathon from "./completed-startupathon/CompletedStartupathon";
import FounderNetwork from "./founder-network/FounderNetwork";
import TitterSection from "./twitter-section/TitterSection";
import SubscribeSection from "./subscribe-section/SubscribeSection";
import Footer from "../components/footer/Footer";
import StartupTimeline from "./startup-timeline/StartupTimeline";

const MainPage = () => {
  return (
    <div>
      <Nav />
      <div style={{ backgroundColor: "rgb(10, 1, 17)" }}>
        <img
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
          alt="team-photo"
          style={{
            width: "90%",
            filter: "grayscale(100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%)",
          }}
        />
      </div>
      <HeroContent />
      <RewardsSection />
      <StartupTimeline />
      <ChallengesSection />
      <KnowMore />
      <FellowshipContent />
      <CompletedStartupathon />
      <FounderNetwork />
      <TitterSection />
      <SubscribeSection />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
