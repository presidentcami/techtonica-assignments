// import { useState } from 'react'; 
import Choices from "./choices";

const QuestionCard = (props) => {
  
let answers = [props.question.incorrect_answers, props.question.correct_answer].flat(1)
  // let incorrectAnswers = [props.question.incorrect_answers, props.question.correct_answer].flat(1);
  console.log("Answers array", answers)

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
        {answers.map((answer) => {
          return <Choices answer={answer} />
        })}
        </div>
      </div>
    );
  };

export default QuestionCard;