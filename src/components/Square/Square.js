// ****************************
// renders a sqaure which is basically a cell 
// in a board
// ****************************

import React from "react";

const square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default square;
