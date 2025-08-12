import '../styles/GameHistoryStyles.css'


export default function GameHistory( {gameHistory, currentTurn} ) {
  const snapshotElements = gameHistory.map((snapshot, index) => {
    return (<BoardSnapshot key={index} boardValues={snapshot}></BoardSnapshot>);
  })

  return (
    <section id="game-history">
      {/* <BoardSnapshot boardValues={exampleHistoryRecord}></BoardSnapshot> */}
      {snapshotElements}
    </section>
  )
}

function BoardSnapshot( {boardValues} ) {
  const squares = boardValues.map((value, index) => {
    return (<span key={index}><span>{value}</span></span>);
  });

  return (
    <div id="historical-record">{squares}</div>
  );
}