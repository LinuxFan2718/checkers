import Square from "./Square";
import './board.css'
import { useState } from "react";



function Board() {
  const size = 8;
  const [positions, setPositions] = useState([
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    ['red', null, 'red', null, 'red', null, 'red', null],
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['black', null, 'black', null, 'black', null, 'black', null],
    [null, 'black', null, 'black', null, 'black', null, 'black'],
    ['black', null, 'black', null, 'black', null, 'black', null],
  ])
  return (
    <div className="board">
      {
        positions.map( (row, i) =>
          row.map( (pieceState, j) =>
            <Square i={i} j={j} key={[i,j]} piece={pieceState} />
          )
        )
      }
    </div>
  );
}

export default Board;