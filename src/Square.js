import './square.css'

function oddEvenClass(num) {
  return Number(num) % 2 === 0 ? "even" : "odd"
}

function Square(props) {
  return (
    <div className={"square " + oddEvenClass(props.i)}>
      <div className={"piece " + "black"}></div>
    </div>
  );
}

export default Square;