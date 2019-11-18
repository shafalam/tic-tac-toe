<<<<<<< HEAD
// ***********************
// this functional component renders an square
// ***********************

=======
>>>>>>> 1e789b4913e66f7d00476f268c054da65340e47b
import React from "react";

const square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default square;
