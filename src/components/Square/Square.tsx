// ****************************
// renders a sqaure which is basically a cell
// in a board
// ****************************

import React from "react";

interface SquareProps {
  onClick(): void;
  value: string;
}

const square: React.FC<SquareProps> = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default square;
