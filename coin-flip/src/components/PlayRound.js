import { useState } from "react";

function PlayRound(props) {
    
    const [playerGuess, setPlayerGuess] = useState();
    const [flipResult, setFlipResult] = useState();
    const [headsStyle, setHeadsStyle] = useState("box");
    const [tailsStyle, setTailsStyle] = useState("box");

    const changeHeadsColor = () => {
        setHeadsStyle("heads-box");
        setTailsStyle("box");
    };

    const changeTailsColor = () => {
        setTailsStyle("tails-box");
        setHeadsStyle("box");
    };

    return (
        <div>
            <div className="choose-coin-section">
                <div
                    className={headsStyle}
                    onClick={() => {
                        changeHeadsColor();
                        setPlayerGuess("heads");
                    }}
                >
                    heads
                </div>
                <div
                    className={tailsStyle}
                    onClick={() => {
                        changeTailsColor();
                        setPlayerGuess("tails");
                    }}
                >
                    tails
                </div>
            </div>

            <div className="flip-coin-section">
                <button
                    onClick={() => {
                        let random = Math.floor(Math.random() * 2) + 1;
                        let result;
                        if (random === 1) {
                            console.log("actual flipResult HEADS");
                            result = "heads";
                            setFlipResult(result);
                        } else {
                            console.log("actual flipResult TAILS");
                            result = "tails";
                            setFlipResult(result);
                        }

                        console.log("react state flip result", flipResult);

                        if (result === playerGuess) {
                            props.setPlayerScore(props.playerScore + 1);
                        } else {
                            props.setComputerScore(props.computerScore + 1);
                        }
                    }}
                >
                    flip coin
                </button>
            </div>

            <div>
                <p>You guessed: {playerGuess}</p>
                <p>Coin flip result: {flipResult}</p>
            </div>
        </div>
    )
}

export default PlayRound