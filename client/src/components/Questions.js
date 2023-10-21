import React, { useState } from 'react';
import './Questions.css';
import { Link } from 'react-router-dom';

const Questions = () => {
  const savedAnswers = JSON.parse(localStorage.getItem('answers')) || Array(30).fill('');
  const [answers, setAnswers] = useState(savedAnswers);
  const [editing, setEditing] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);

  const handleInputChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
    if (changesSaved) {
      setChangesSaved(false); // Reset the changes saved message
    }
  };

  const handleEdit = () => {
    if (editing) {
      localStorage.setItem('answers', JSON.stringify(answers));
      setChangesSaved(true);
    }
    setEditing(!editing);
  };

  const questions = [
    "What’s your favorite way to spend a day off?",
    "What type of music are you into",
    "What was the best vacation you ever took and why?",
    "Where’s the next place on your travel bucket list and why?",
    "What are your hobbies, and how did you get into them?",
    "What was the last thing you read?",
    "Would you say you’re more of an extrovert or an introvert?",
    "What was the last TV show you binge-watched?",
    "Are you into podcasts or do you only listen to music?",
    "If you could only eat one food for the rest of your life, what would it be?",
    "What’s your go-to guilty pleasure?",
    "What's one thing that can instantly make your day better?",
    "Do you have any pet peeves?",
    "What song always gets you out on the dance floor?",
    "What activity instantly calms you?",
    "What are your favorite sport teams?",
    "What's your favorite season and why?",
    "What's the phone app you use most?",
    "Would you rather cook or order in?",
    "What's your favorite board game?",
    "How do you take your coffee?",
    "What’s the best concert you’ve ever been to?",
    "What causes are you passionate about?",
    "What’s your favorite content genre (horror, sci-fi, rom-com, etc.)?",
    "Who or what never fails to make you laugh?",
    "Do you like group activities, or prefer doing things solo?",
    "What would your perfect day look like?",
    "Do you collect anything?",
    "What's your favorite podcast?",
    "Have you ever had a side hustle or considered having one?",
    "Are you into after-work happy hours?"
  ];

  return (
    <div className="questions-container">
      <h1>Edit Profile</h1>
      <form>
          {questions.map((question, index) => (
      <div key={index} className="question">
        <label>{question}</label>
        {editing ? (
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ) : answers[index] ? (
          <div className="saved-answer">
            <strong>Your Answer:  </strong>
            <span>{answers[index]}</span>
          </div>
        ) : null} {/* Input not rendered when not in editing mode */}
      </div>
      ))}

        <div className="buttons-container">
          <button
            type="button"
            onClick={handleEdit}
            className="edit-button"
          >
            {editing ? "Save Changes" : "Edit"}
          </button>
          <Link to="/profile">
            <button className="submit-button">Back</button>
          </Link>
          {changesSaved && <p className="changes-saved-message">Changes have been saved.</p>}
        </div>
      </form>
    </div>
  );
};

export default Questions;