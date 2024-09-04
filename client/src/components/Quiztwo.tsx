import React, { useState } from "react";
import { Link } from "react-router-dom";
import questions from "./questions";
//import { ReactComponent as ImageOne } from "../images/thumbs-up-solid.svg";

//import ImageOne from "../images/thumbs-up-solid.svg?react";
const QuizTwo: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

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
              <button>
                <Link to="/welcome">Go back</Link>
              </button>
            </div>
          </>
        ) : (
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
                  <button
                    key={index}
                    className="quiz-btn"
                    onClick={() => answerButtonClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerVocab}
                  </button>
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
