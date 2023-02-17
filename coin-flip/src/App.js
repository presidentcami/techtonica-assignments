import React from 'react';
import "./styles.css"
import Score from './components/Score'
import PlayRound from './components/PlayRound';
import { useState } from 'react';

function App() {
  
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div className="App">
      <Score computerScore={computerScore} playerScore={playerScore} />
      <PlayRound 
        computerScore={computerScore}
        playerScore={playerScore}
        setComputerScore={setComputerScore}
        setPlayerScore={setPlayerScore} />
    </div>
  );
}

export default App;
