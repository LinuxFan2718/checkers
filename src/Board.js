import Square from "./Square";
import './board.css'

function Board() {
  return (
    <div className="board">
      {
        [...Array(8)].map(
          (x, i) => 
            [...Array(8)].map( (y, j) => <Square i={i} j={j} key={[i,j]} /> )
      )}
    </div>
  );
}

export default Board;