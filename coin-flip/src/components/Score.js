function Score(props) {
    return (
        <div>
            <p>Your score: {props.playerScore}</p>
            <p>Computer score: {props.computerScore}</p>
        </div>
    )
}

export default Score;