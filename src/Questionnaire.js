import React, { useState } from 'react';

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      id: 1,
      text: "What is your favorite color?",
      options: [
        { id: 1, text: "Red" },
        { id: 2, text: "Green" },
        { id: 3, text: "Blue" },
        { id: 4, text: "Yellow" }
      ]
    },
    {
      id: 2,
      text: "What is your favorite food?",
      options: [
        { id: 1, text: "Pizza" },
        { id: 2, text: "Sushi" },
        { id: 3, text: "Steak" },
        { id: 4, text: "Salad" }
      ]
    },
    {
      id: 3,
      text: "What is your favorite hobby?",
      options: [
        { id: 1, text: "Reading" },
        { id: 2, text: "Running" },
        { id: 3, text: "Painting" },
        { id: 4, text: "Watching TV" }
      ]
    }
  ];

  const handleAnswer = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <p>{question.text}</p>
          {question.options.map(option => (
            <div key={option.id}>
              <input
                type="radio"
                name={question.id}
                id={option.id}
                value={option.id}
                checked={answers[question.id] === option.id}
                onChange={() => handleAnswer(question.id, option.id)}
              />
              <label htmlFor={option.id}>{option.text}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Questionnaire;
