// ***********************
// this functional component renders an square
// ***********************

import React from "react";

const square = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default square;
