import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'

function App() {
  const [gameHistory, setGameHistory] = useState([Array(9).fill("x")]);
  const [currentTurn, setCurrentTurn] = useState(0);


  return (
    <main>
      <GameBoard gameHistory={gameHistory} currentTurn={currentTurn}></GameBoard>


      <GameHistory></GameHistory>
    </main>
  )
}

function GameBoard({ gameHistory, currentTurn }) {
  const squares = gameHistory[currentTurn].map((squareVal, index) => {
    return (
      <Button key={index}>{squareVal}</Button>
    )
  })

  return (
    <div id="game-board">
      {squares}
    </div>
  )
}

function GameHistory() {
  return (
    <section id="game-history-section">
      <div>Game History Here</div>
    </section>
  )
}

export default App