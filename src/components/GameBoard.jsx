import Button from '@mui/material/Button'
import '../styles/GameBoardStyles.css'

export default function GameBoard({ 
  gameHistory, 
  currentTurn, 
  currentPlayer, 
  updateGameHistoryFn, 
  updateCurrentTurnFn }
) {
  const squares = gameHistory[currentTurn].map((squareVal, indexOfClickedSquare) => {
    return (
      <Button key={indexOfClickedSquare}
              variant="outlined"
              sx={{ fontSize:"clamp(36px, 18vmin, 300px)", lineHeight: "0.75"}}
              onClick={() => {
                if(squareVal === null){
                  console.log("current full history:");
                  console.log(gameHistory);

                  const newHistoryRecord = [...gameHistory[currentTurn]]; 
                  console.log(`slice:`);
                  console.log(newHistoryRecord);

                  console.log(indexOfClickedSquare);

                  newHistoryRecord[indexOfClickedSquare] = currentPlayer;
                  console.log(`New board state:`);
                  console.log(newHistoryRecord);

                  const updatedHistory = [...gameHistory.slice(0, currentTurn+1), newHistoryRecord];
                  console.log("Updated history:")
                  console.log(updatedHistory);

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

  return (<section id="game-board">{squares}</section>)
}