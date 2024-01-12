import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }
  function clickHandler(i) {
    // squares[0] = "X";

    // setSquares([...squares]);    cant do this because of history and squares remain unchanged
    //mutating  new things
    // creates new array
    const nextSquares = squares.slice();
    //just returning one time
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    //condition check for x and o for board
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div>{status}</div>
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
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
