import { useState } from 'react';
import { decode } from 'html-entities';

const Choices = (props) => {
    const [value, setValue] = useState('');
    // let answersArray = props.answersObject;

    // console.log(answersArray[0][0].correct)
    // console.log(Object.keys(answersObject[0][0]).toString()) 
    return (
        <div className={"answers-section"}>
            {/* <div className='question-text'>{props.question.question}</div> */}
            <div className='answer-section'>
            <button onClick={
                () => {
                setValue(decode(props.answer));
                // console.log(answersObject)
                // answersArray.map((element) =>   {  
                //     element = Object.keys(element[0]).toString();
                //     // props.setScore((x) => x+1);
                //     console.log("clicking", Object.values(element))
                //     return element
                // })
            } 
        }
                value={value}>
                    {decode(props.answer)}
            </button>
            </div>
        </div>
    );
};

export default Choices;