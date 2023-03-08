// import { useState } from 'react'; 
import Choices from "./choices";
import { decode } from 'html-entities';

const QuestionCard = (props) => {
  
  let answers = [
    [{ incorrect: decode(props.question.incorrect_answers[0]) }], 
    [{ incorrect: decode(props.question.incorrect_answers[1]) }], 
    [{ incorrect: decode(props.question.incorrect_answers[2]) }], 
    [{ correct: decode(props.question.correct_answer) }]];
  // console.log("Answers array", answers)

    return (
      <div className={"question-section"}>
        <div className='question-text'>{decode(props.question.question)}</div>
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