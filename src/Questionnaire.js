import React, { useState } from 'react';

const questions = [
    { question: "Have you ever had feelings for a close friend who is the same gender as you?", options: ["Yes", "No"] },
    { question: "Have you ever engaged in behavior deemed homosexual?", options: ["Yes", "No"] },
    { question: "Have you ever kissed or desired to kiss someone who is the same gender as you?", options: ["Yes", "No", "Sometimes"] },
    { question: "Has anyone ever questioned your sexual orientation?", options: ["Yes", "No"] },
    { question: "Do you see content from queer creators, when you scroll through your feed?", options: ["Yes", "No"] },
    { question: "Do you like to do things that are generally associated with the opposite sex (such as, wearing a bra if you're a guy)?", options: ["Yes", "No"] },
    { question: "Would you watch any porn with both actors of your gender?", options: ["Yes", "No"] },
    { question: "Have you ever been interested in the physique of a person who is your same sex?", options: ["Yes", "No"] }
];

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);

  function handleResponse(response) {
    setResponses([...responses, response]);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      {currentQuestion < questions.length && (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map(option => (
            <button onClick={() => handleResponse(option)}>{option}</button>
          ))}
        </div>
      )}
      {currentQuestion === questions.length && (
        <p>Thank you for completing the questionnaire!</p>
      )}
    </div>
  );
}

export default Questionnaire;
