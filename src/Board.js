import Square from "./Square";
import './board.css'

function Board() {
  const size = 8;
  return (
    <div className="board">
      {
        [...Array(size)].map(
          (x, i) => 
            [...Array(size)].map(
              (y, j) =>
                <Square i={i} j={j} key={[i,j]} />
            )
        )
      }
    </div>
  );
}

export default Board;