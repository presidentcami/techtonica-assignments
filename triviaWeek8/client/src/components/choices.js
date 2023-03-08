import { useState } from 'react';
import { decode } from 'html-entities';

const Choices = (props) => {
    const [value, setValue] = useState('');
    // console.log("value", value)
    return (
        <div className={"answers-section"}>
            {/* <div className='question-text'>{props.question.question}</div> */}
            <div className='answer-section'>
            <button onClick={() => setValue(decode(props.answer))} value={value}>{decode(props.answer)}</button>
            </div>
        </div>
    );
};

export default Choices;