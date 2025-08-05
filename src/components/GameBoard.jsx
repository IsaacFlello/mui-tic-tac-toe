import Button from '@mui/material/Button'

export default function GameBoard({ gameHistory, currentTurn }) {
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