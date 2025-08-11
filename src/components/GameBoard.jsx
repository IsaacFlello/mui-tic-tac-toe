import Button from '@mui/material/Button'
import {createTheme, ThemeProvider} from '@mui/material';

// const squareTheme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: {
//             variant: "outlined",
//           },
//           style: {
//             fontSize: "clamp(36px, 2vw, 100px);",
//           },
//         },
//       ]
//     }
//   }
// });

export default function GameBoard({ gameHistory, currentTurn, currentPlayer, updateGameHistoryFn, updateCurrentTurnFn }) {
  const squares = gameHistory[currentTurn].map((squareVal, indexOfClickedSquare) => {
    return (
      // <ThemeProvider theme={squareTheme} key={indexOfClickedSquare}>
      <Button key={indexOfClickedSquare}
              variant="outlined"
              sx={{ fontSize:"clamp(36px, 18vmin, 300px)", lineHeight: "0.75"}}
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
      // </ThemeProvider>
    )
  })

  return (<div id="game-board">{squares}</div>)
}