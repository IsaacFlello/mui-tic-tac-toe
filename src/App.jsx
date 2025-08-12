import { useState } from 'react'
import './App.css'

import GameBoard from './components/GameBoard.jsx'
import GameHistory from './components/GameHistory.jsx';

export default function App() {
  const [gameHistory, setGameHistory] = useState( [ Array(9).fill(null) ] );
  const [currentTurn, setCurrentTurn] = useState(0);
  const currentPlayer = currentTurn % 2 === 0 ? "X" : "O";

  return (
    <main>
      <GameBoard  gameHistory={gameHistory}
                  currentTurn={currentTurn}
                  currentPlayer={currentPlayer}
                  updateGameHistoryFn={setGameHistory}   
                  updateCurrentTurnFn={setCurrentTurn}>  
      </GameBoard>
      <GameHistory gameHistory={gameHistory} currentTurn={currentTurn}></GameHistory>
    </main>
  )
}