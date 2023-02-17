import React from 'react';
import "./styles.css"
import Score from './components/Score'
import { useState } from 'react';

function App() {
  
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div className="App">
      <Score computerScore={computerScore} playerScore={playerScore} />
    </div>
  );
}

export default App;
