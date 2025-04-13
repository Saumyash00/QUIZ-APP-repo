import React, { useState, useEffect } from "react";
import "./QuizQuestion.css";

const QuizQuestion = ({
  currentStep = 1,
  totalSteps = 5,
  timeLimit = 60,
  question = "An interface design application that runs in the browser with team-based collaborative design projects",
  answers = [
    { id: "A", text: "FIGMA" },
    { id: "B", text: "ADOBE XD" },
    { id: "C", text: "INVISION" },
    { id: "D", text: "SKETCH" }
  ],
  onNext = (selectedAnswer) => console.log("Next clicked with answer:", selectedAnswer),
  onPrevious = () => console.log("Previous clicked"),
  onSkip = () => console.log("Skip clicked"),
  onTimeUp = () => console.log("Time up!"),
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSelectAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div className="quiz-question-container">
      <div className="progress-tracker">
        {[...Array(totalSteps)].map((_, i) => (
          <div key={i} className={`step ${i + 1 === currentStep ? "active" : ""}`}>
            <div className="step-number">{i + 1}</div>
            {i < totalSteps - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="question-container">
        <div className="question-text">{question}</div>
      </div>

      <div className="answers-container">
        {answers.map((answer) => (
          <div
            key={answer.id}
            className={`answer-option ${selectedAnswer === answer.id ? "selected" : ""}`}
            onClick={() => handleSelectAnswer(answer.id)}
          >
            <div className="answer-label">{answer.id}.</div>
            <div className="answer-text">{answer.text}</div>
          </div>
        ))}
      </div>

      <div className="navigation-controls">
        <button className="nav-button previous-button" onClick={onPrevious}>
          <span className="nav-icon">◀</span> Previous
        </button>

        <div className="timer-container">
          <div className="timer-circle">
            <span>{timeLeft}</span>
          </div>
        </div>

        <div className="right-controls">
          <button className="nav-button next-button" onClick={() => onNext(selectedAnswer)}>
            Next <span className="nav-icon">▶</span>
          </button>

          <button className="skip-button" onClick={onSkip}>
            Skip <span className="nav-icon">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
