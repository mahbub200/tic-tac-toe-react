import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function clickHandler(i) {
    // squares[0] = "X";
    // setSquares([...squares]);
    const nextSquares = squares.slice();
    nextSquares[i] = "x";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} squareClick={() => clickHandler(0)}></Square>
        <Square value={squares[1]} squareClick={() => clickHandler(1)}>
          {" "}
        </Square>
        <Square value={squares[2]} squareClick={() => clickHandler(2)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[3]} squareClick={() => clickHandler(3)}></Square>
        <Square value={squares[4]} squareClick={() => clickHandler(4)}></Square>
        <Square value={squares[5]} squareClick={() => clickHandler(5)}></Square>
      </div>
      <div className="flex">
        <Square value={squares[6]} squareClick={() => clickHandler(6)}></Square>
        <Square value={squares[7]} squareClick={() => clickHandler(7)}></Square>
        <Square value={squares[8]} squareClick={() => clickHandler(8)}></Square>
      </div>
    </>
  );
}
