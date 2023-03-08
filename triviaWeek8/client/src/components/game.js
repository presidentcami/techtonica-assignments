import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    // const [score, setScore] = useState(0)

    const loadData = () => {
        // remember that this link needs to match the port number and path on backend
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question}  />
                // setScore={setScore}
            })}
            {/* <div>
                <h4>Score: {score}/10</h4>
            </div> */}
        </div>
    )

}

export default Game;
