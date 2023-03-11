import { useState } from 'react';

const Question = (props) => {
    const [disableQAndA, setDisableQAndA] = useState(false)
    console.log(props.qAndA, "inside question.js")
    
    const handleAnswerClick = (e) => {
        
    const nextQuestion = props.currentQ + 1;
    if (nextQuestion < props.questions.length) {
                props.setCurrentQ(nextQuestion);
            } else {
                setDisableQAndA(true);
                // alert('This is the end of the quiz!');
            }   
    if (props.qAndA[e.target.value].isCorrect === true) {
            props.setCorrectScore((previousScore) => previousScore + 1)
      }
}
    
    return (
    <div>{disableQAndA ? <div className="score-section">You scored {props.correctScore}/10</div> :
        <div className="question-section">
            <div className="question-text">
                <h1>{props.qAndA[4]}</h1>
            </div>
            <div className='answer-section'>   
            {// eslint-disable-next-line
                props.qAndA.map((currArray, index) => {
                    if(index!==4) {
                return  <button 
           onClick={handleAnswerClick}
           key={index} type="button" value={index}>
            {currArray.answerText}
            </button>
                }
            })}
        </div> 
    </div>}
</div>
    )
}

export default Question;