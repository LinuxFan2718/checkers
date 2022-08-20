import { useState } from 'react';
import './square.css'

function oddEvenClass(num) {
  return Number(num) % 2 === 0 ? "even" : "odd"
}

function Square(props) {
  const [selectClass, setSelectClass] = useState(null)
  const handleClick = () => {
    if (selectClass) {
      setSelectClass(null);
    } else {
      setSelectClass('selected');
    }
  }
  return (
    <div className={"square " + oddEvenClass(props.i) + " " + selectClass} onClick={handleClick}>
      <div className={"piece " + props.piece}></div>
    </div>
  );
}

export default Square;