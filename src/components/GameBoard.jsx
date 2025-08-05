import Button from '@mui/material/Button'

export default function GameBoard({ gameHistory, currentTurn, currentPlayer, updateGameHistoryFn, updateCurrentTurnFn }) {
  const squares = gameHistory[currentTurn].map((squareVal, indexOfClickedSquare) => {
    return (
      <Button key={indexOfClickedSquare}
              variant="outlined"
              onClick={() => {
                if(squareVal === null){
                  const newHistoryRecord = gameHistory[currentTurn];
                  newHistoryRecord[indexOfClickedSquare] = currentPlayer;
                  const updatedHistory = [...gameHistory, newHistoryRecord];
                  updateGameHistoryFn(updatedHistory);
                  updateCurrentTurnFn(currentTurn + 1);
                }
              }
            }
      >
        {squareVal}
      </Button>
    )
  })

  return (<div id="game-board">{squares}</div>)
}