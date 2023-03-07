import { useState } from 'react';

const Choices = (props) => {
    const [value, setValue] = useState('');
    // console.log("value", value)
    return (
        <div className={"answers-section"}>
            {/* <div className='question-text'>{props.question.question}</div> */}
            <div className='answer-section'>
            <button onClick={() => setValue(props.answer)} value={value}>{props.answer}</button>
            </div>
        </div>
    );
};

export default Choices;