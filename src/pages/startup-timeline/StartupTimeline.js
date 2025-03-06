import React from "react";
import "./StartupTimeline.css";
import { FaPlay, FaHome, FaComments, FaCheck } from "react-icons/fa"; // Import new icons

const StartupTimeline = () => {
  return (
    <div className="startup-container">
      {/* Heading */}
      <h1>Found an idea that matches your skills?</h1>
      <h2>
        Here’s a simple guide on how the Startupathon process works once you
        find a project idea that suits your skills.
      </h2>

      {/* Timeline Section */}
      <div className="timeline">
        {/* Step 1 */}
        <div className="timeline-left">
          <h3>Dive into the Challenge Details Video</h3>
        </div>
        <div className="timeline-middle">
          <div className="timeline-icon">
            <FaPlay />
          </div>
        </div>
        <div className="timeline-right">
          <h3>It all starts here!</h3>
          <p>
            Receive an exciting task—your startup idea—with a detailed video to
            spark creativity and clarify our vision.
          </p>
          <p className="pro-tip">
            💡 Pro Tip: Pay attention—it’s more than just instructions. It’s
            your roadmap to success!
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="timeline">
        <div className="timeline-left">
          <h3>Build, Submit & Shine</h3>
        </div>
        <div className="timeline-middle">
          <div className="timeline-icon second">
            <FaHome />
          </div>
        </div>
        <div className="timeline-right">
          <p>
            Create a prototype that showcases your approach, then submit your
            work with a Loom video presentation (no GitHub repo or complex code
            required). Your creative solution is what matters most.
          </p>
        </div>
      </div>

      {/* Step 3 - Get Feedback */}
      <div className="timeline">
        <div className="timeline-left">
          <h3>Get Feedback, Level Up!</h3>
        </div>
        <div className="timeline-middle">
          <div className="timeline-icon third">
            <FaComments />
          </div>
        </div>
        <div className="timeline-right">
          <p>
            Three days after submission, we review your work. If it stands out,
            you're in! If not, we'll share feedback on how to improve. The cycle
            continues until we find the perfect fit.
          </p>
          <p className="pro-tip">
            💡 <b>Pro Tip:</b> This feedback is <b>gold.</b> Use it to sharpen
            your submission or learn what it takes to win!
          </p>
        </div>
      </div>

      {/* Step 4 - Claim Your Crown */}
      <div className="timeline">
        <div className="timeline-left">
          <h3>Claim Your Crown</h3>
        </div>
        <div className="timeline-middle">
          <div className="timeline-icon fourth">
            <FaCheck />
          </div>
        </div>
        <div className="timeline-right">
          <h3>Ace the challenge to become the project leader.</h3>
          <p>
            Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy
            ownership, 20% equity, and a competitive salary. Turn vision into
            impact with top-tier talent!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupTimeline;
