import { useState, useEffect } from "react";
// import QuestionCard from "./questioncard";
import Question from "./question"
import { decode } from 'html-entities';


const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState(null)
    const [currentQ, setCurrentQ] = useState(0);
    // const [correctScore, setCorrectScore] = useState(0);
    // const [incorrectScore, setIncorrectScore] = useState(0);

    const loadData = () => {
        // remember that this link needs to match the port number and path on backend
        fetch('http://localhost:8000/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);

                // final result of map will be an array of arrays, each array holds inner arrays with answers, and false ,two keyvalue pairs, answer 
                // take index and data.results
                // could shuffle in map
                let arrOfAnswers = data.results.map((arr) => {
                    
                    let tempArr = [
                    {answerText: decode(arr.incorrect_answers[0]), isCorrect: false}, 
                    {answerText: decode(arr.incorrect_answers[1]), isCorrect: false}, 
                    {answerText: decode(arr.incorrect_answers[2]), isCorrect: false},
                    {answerText: decode(arr.correct_answer), isCorrect: true}
                ]
                   
                    shuffleArray(tempArr) 
                    tempArr.push(decode(arr.question))
                    // tempArr.questionText = ();
                    return tempArr;
                })
                // console.log(arrOfAnswers)
                // setQuestionsAndAnswers(arrOfAnswers);

                setQuestionsAndAnswers(arrOfAnswers);    
                console.log("questions and answers", questionsAndAnswers)
            })
    }


    
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

    // const handleButtonClick = () => {
    //     const nextQuestion = currentQ + 1;
    //     setCurrentQ(nextQuestion);
    // }
    // setAnswers(shuffleArray(answers))
    // console.log("answers", answers)
// console.log("questions", questions)
    return (
        <div className="Container">
            <div className='question-count'>
                <div>
                    {/* <h4>Score: {correctScore}/10</h4>
                    <h4>Missed: {incorrectScore}/10</h4> */}
                </div>
                <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div>
                {questionsAndAnswers && 
                <Question qAndA={questionsAndAnswers[currentQ]} currentQ={currentQ} setCurrentQ={setCurrentQ} />}
                {/* {questionsAndAnswers && questionsAndAnswers[0][4]} */}
                
                
                {/* questionsAndAnswers[0].map((answers, index) => {
                    <button key={index}>{answers.answerText}</button>
                })}   */}
   
            
              
       
            </div>
          
            {/* {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} answers={questionsAndAnswers} setCorrectScore={setCorrectScore} setIncorrectScore={setIncorrectScore} />
            })   
            } */}

        </div>
    )

}

export default Game;
