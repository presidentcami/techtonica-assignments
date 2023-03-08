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

  // found this code for shuffling an array, the "Fisher-Yates algorithm" via https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  shuffleArray(answers)

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