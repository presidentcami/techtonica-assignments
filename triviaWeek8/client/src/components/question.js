const Question = (props) => {
    //handle incre
    console.log(props.qAndA, "inside question.js")
    
    const handleAnswerClick = () => {
        const nextQuestion = props.currentQ + 1;
        props.setCurrentQ(nextQuestion);
    }
    return (
        <div>
            <h1>{props.qAndA[4]}</h1>
    {props.qAndA.map((currArray, index) => {
        if(index!==4) {
            
           return  <button onClick={handleAnswerClick}
           key={index} type="button">{currArray.answerText}</button>
        }
    })}
        </div>
    )
}

export default Question;