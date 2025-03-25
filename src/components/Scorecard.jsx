import React, { useState } from "react";
import "./Scorecard.css"; 

const Scorecard = () => {
    const [score, setScore] = useState(4);

    return (
        <div className="overlay">
            <div className="score-card">
                <div className="circle">
                    <span className="score-text">Your score</span>
                    <span className="score-value">{score}</span>
                    <div className="decorations">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                        <div className="dot3"></div>
                    </div>
                </div>
                <button className="button">Complete</button>
            </div>
        </div>
    );
};

export default Scorecard;
