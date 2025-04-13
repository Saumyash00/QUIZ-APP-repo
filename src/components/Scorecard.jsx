import React from "react";
import { useNavigate } from "react-router-dom";
import scoreImage from "../assets/image.png"; // Import image
import "./Scorecard.css";

const Scorecard = ({ score }) => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/"); // Redirect to home
  };

  return (
    <div className="score-container">
      <div className="score-card">
        <div className="score-image-container">
          <img src={scoreImage} alt="Score" className="score-image" />
          <div className="score-overlay">
            <div className="score-text">YOUR SCORE </div>
            <div className="score-value">56</div>
          </div>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Scorecard;
