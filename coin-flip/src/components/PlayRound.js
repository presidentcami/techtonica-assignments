

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
        </div>
    )
}

export default PlayRound