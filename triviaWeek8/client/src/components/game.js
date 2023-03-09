import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";
import { decode } from 'html-entities';


const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([])
    const [correctScore, setCorrectScore] = useState(0);
    const [incorrectScore, setIncorrectScore] = useState(0);

    const loadData = () => {
        // remember that this link needs to match the port number and path on backend
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);

                // final result of map will be an array of arrays, each array holds inner arrays with answers, and false two keyvalue pairs, answer 
                // take index and data.results
                // could shuffle in map
                let arrOfAnswers = data.results.map((obj) => {
                    let arrOfAnswers = [[obj.incorrect_answers[0], false], 
                    [obj.incorrect_answers[1], false], 
                    [obj.incorrect_answers[2], false], 
                    [obj.correct_answer, true]];

                    shuffleArray(arrOfAnswers);
                    return arrOfAnswers;
                    // console.log(arrOfAnswers)
                })
                setAnswers(arrOfAnswers);
            })
    }
console.log(answers)
    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, [])

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

    // setAnswers(shuffleArray(answers))
    // console.log("answers", answers)
// console.log("questions", questions)
    return (
        <div className="Container">
            <div className='question-count'>
                <div>
                <h4>Score: {correctScore}/10</h4>
                <h4>Missed: {incorrectScore}/10</h4>
            </div>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} setCorrectScore={setCorrectScore} setIncorrectScore={setIncorrectScore} />
            })}

        </div>
    )

}

export default Game;
