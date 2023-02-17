

function PlayRound(props) {
    
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