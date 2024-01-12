import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  function clickHandler() {
    setValue("x");
  }
  return (
    <>
      <button
        className="bg-white border border-blue-400  m-1 h-24 w-24 "
        onClick={clickHandler}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
