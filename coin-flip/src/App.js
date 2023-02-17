import React from 'react';
import "./styles.css"
import Score from './components/Score'

function App() {
  
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div className="App">
      <Score />
    </div>
  );
}

export default App;
