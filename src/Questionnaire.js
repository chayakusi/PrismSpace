import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
<div style={{overflow:'hidden',width:'50vw', height:'30vh',position: 'absolute',
    top:'0',
    bottom: '0',
    left: '0',
    right:'0',
    margin: 'auto'}}>
   <div class="card text-dark bg-light" >
      {currentQuestion < questions.length && (
        <div class = "container">
          <h4 class="card-title">{questions[currentQuestion].question}</h4>
          {questions[currentQuestion].options.map(option => (
                <Button type="button" class="btn btn-info me-10" onClick={() => handleResponse(option)}>{option}</Button>
          ))}
        </div>
      )}
      {currentQuestion === questions.length && (
        <p>Thank you for completing the questionnaire!</p>
      )}
    </div>
</div>
  );
}

export default Questionnaire;
