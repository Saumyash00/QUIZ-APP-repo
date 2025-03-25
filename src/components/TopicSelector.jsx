import React, { useState } from "react";
import "./TopicSelector.css";

const TopicSelector = ({ onStartQuiz }) => {
  const availableTopics = [
    { id: "ai-ml", name: "AI/ML" },
    { id: "cyber", name: "CYBER" },
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "java", name: "JAVA" },
    { id: "js", name: "JS" },
    { id: "nodejs", name: "NODE.JS" },
    { id: "tailwind", name: "TAILWIND" },
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
    { id: "6", name: "6" },
    { id: "7", name: "7" },
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const minTopics = 5;

  const toggleTopic = (topicId) => {
    setSelectedTopics((prevSelected) =>
      prevSelected.includes(topicId)
        ? prevSelected.filter((id) => id !== topicId)
        : [...prevSelected, topicId]
    );
  };

  return (
    <div className="topic-selector-overlay">
      <div className="topic-selector-modal">
        <button className="close-button" onClick={() => onStartQuiz([])}>
          &times;
        </button>

        <h1 className="modal-title">Choose your favorite topic</h1>
        <p className="modal-subtitle">Select more than 5 topics to start quiz</p>

        <div className="topics-grid">
          {availableTopics.map((topic) => (
            <div
              key={topic.id}
              className={`topic-item ${selectedTopics.includes(topic.id) ? "selected" : ""}`}
              onClick={() => toggleTopic(topic.id)}
            >
              {topic.name}
              {selectedTopics.includes(topic.id) && (
                <button
                  className="remove-topic"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTopic(topic.id);
                  }}
                >
                  &times;
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          className="start-quiz-button"
          disabled={selectedTopics.length < minTopics}
          onClick={() => onStartQuiz(selectedTopics)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default TopicSelector;
