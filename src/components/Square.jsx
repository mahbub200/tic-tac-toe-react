import React from "react";

const Square = ({ value, squareClick }) => {
  // onclick is referenced as a prop
  return (
    <>
      <button
        className="bg-white border border-blue-400  m-1 h-24 w-24 "
        onClick={squareClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
