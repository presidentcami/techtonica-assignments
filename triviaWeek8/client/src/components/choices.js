const Choices = (props) => {

    return (
        <div className={"answers-section"}>
            {/* <div className='question-text'>{props.question.question}</div> */}
            <div className='answer-section'>
            <button>{props.answer}</button>
            </div>
        </div>
    );
};

export default Choices;