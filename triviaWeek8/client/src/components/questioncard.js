// import { useState } from 'react'; 
import Choices from "./choices";

const QuestionCard = (props) => {
  
  let answers = [
    [{ incorrect0: props.question.incorrect_answers[0] }], 
    [{ incorrect1: props.question.incorrect_answers[1] }], 
    [{ incorrect2: props.question.incorrect_answers[2] }], 
    [{ correct: props.question.correct_answer }]];
  // console.log("Answers array", answers)

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
        {answers.map((answer, index) => {
          answer = Object.values(answer[0]).toString();
          return <Choices key={index} answer={answer} />
        })}
        </div>
      </div>
    );
  };

export default QuestionCard;