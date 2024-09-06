import React, { useState } from "react";
import questions from "./questions";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

//import ImageOne from "../images/thumbs-up-solid.svg?react";
const QuizTwo: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Welcome");
  };

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
    <div className="flex justify-center flex-col items-center min-h-screen">
      <div className="bg-[#88c6ed]  min-h-200 min-h-min rounded-2xl p-20 shadow-lg flex flex-col justify-center text-white width-size items-center">
        {showScore ? (
          <>
            <div className="flex flex-col items-center justify-around text-2xl">
              You scored {score} out of {questions.length}
              <Button label="Go back" onClick={handleButtonClick} />
            </div>
          </>
        ) : (
          <>
            <div className="size-full relative">
              <div className="mb-20">
                <span className="text-2xl">Question {currentQuestion + 1}</span>
                /{questions.length}
              </div>
              <div className="mb-12 text-center text-3xl text-shadow-black">
                {questions[currentQuestion].questionVocab}
              </div>
            </div>
            <div className="size-full flex flex-col">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Button
                    key={index}
                    label={answerOption.answerVocab}
                    onClick={() => answerButtonClick(answerOption.isCorrect)}
                  />
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
