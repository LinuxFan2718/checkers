import './square.css'

function oddEvenClass(num) {
  return Number(num) % 2 === 0 ? "even" : "odd"
}

function Square(props) {
  return (
    <div className={"square " + oddEvenClass(props.i)}>
      <div className={"piece " + props.piece}></div>
    </div>
  );
}

export default Square;