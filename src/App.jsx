import { useState } from 'react'
import './App.css'

import GameBoard from './components/GameBoard.jsx'
import GameHistory from './components/GameHistory.jsx';

export default function App() {
  const [gameHistory, setGameHistory] = useState([Array(9).fill("x")]);
  const [currentTurn, setCurrentTurn] = useState(0);

  return (
    <main>
      <GameBoard gameHistory={gameHistory} currentTurn={currentTurn}></GameBoard>
      <GameHistory></GameHistory>
    </main>
  )
}