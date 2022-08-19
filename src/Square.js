import './square.css'

function oddEvenClass(num) {
  return Number(num) % 2 === 0 ? "even" : "odd"
}

function Square(props) {
  return (
    <div className={"square " + oddEvenClass(props.i)}></div>
  );
}

export default Square;