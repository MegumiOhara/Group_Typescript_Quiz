import React, { useState } from "react";
import questions from "./questions";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

//import ImageOne from "../images/thumbs-up-solid.svg?react";
const QuizTwo: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();
  const handleButtonClick = () => {
     navigate("/Welcome");
    }

  const answerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      <div className="app">
        {showScore ? (
          <>
           
            <div className="score-section">
              You scored {score} out of {questions.length}


              <Button label="Go back" onClick={handleButtonClick}/>

            </div>
          </>) : 
          (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionVocab}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Button key={index} label={answerOption.answerVocab} onClick={() => answerButtonClick(answerOption.isCorrect)} />

                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizTwo;
