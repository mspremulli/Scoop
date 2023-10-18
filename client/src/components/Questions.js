import React, { useState } from 'react';
import './Questions.css';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [answers, setAnswers] = useState(Array(30).fill(''));

  const handleInputChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
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

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of answers here
    console.log(answers);
  };

return (
    <div className="questions-container">
        <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label>{question}</label>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
        <Link to="/profile"> {/* Use Link to navigate to Profile */}
          <button type="submit" className="submit-button">Save Changes</button>
        </Link>
      </form>
    </div>
  );
}

export default Questions;




