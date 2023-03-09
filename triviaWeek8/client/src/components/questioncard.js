// import { useCallback } from 'react'; 
// import ShuffleArray from "./shuffle";
import { decode } from 'html-entities';

const QuestionCard = (props) => {
  // responses
  let answers = [
    { optionText: decode(props.question.incorrect_answers[0]), isCorrect: false }, 
    { optionText: decode(props.question.incorrect_answers[1]), isCorrect: false }, 
    { optionText: decode(props.question.incorrect_answers[2]), isCorrect: false }, 
    { optionText: decode(props.question.correct_answer), isCorrect: true }];
  // console.log("Answers array", answers)

  // found this code for shuffling an array, the "Fisher-Yates algorithm" via https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  // const shuffleArray = array => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   } 
  // }
  // didn't work to put this inside of map, so put it outside and it worked!
  // shuffleArray(answers)


    return (
      <div className={"question-section"}>
        <div className='question-text'>{decode(props.question.question)}</div>
        <div className='answer-section'>
        {answers.map((answer, index) => {
          return <button key={index}
            onClick={() => {
              if (answer.isCorrect) {
                props.setCorrectScore((previousScore) => previousScore + 1)
              } else {
                props.setIncorrectScore((previousScore) => previousScore + 1)
              }
            }}
          >{answer.optionText}</button>
         
        })}
        </div>
      </div>
    );
  };

export default QuestionCard;