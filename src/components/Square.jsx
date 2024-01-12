import React from "react";

const Square = ({ value }) => {
  return (
    <>
      <button className="bg-white border border-blue-400  m-1 h-24 w-24 ">
        {value}
      </button>
    </>
  );
};

export default Square;
