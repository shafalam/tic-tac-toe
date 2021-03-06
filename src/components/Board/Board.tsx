// *************************************
// renders a board of 9 squares
// 3 squares in a row and total 3 rows
// *************************************

import React, { Component } from "react";
import Square from "../Square/Square";

interface BoardProps {
  squares: string[];
  onClick(i: number): void;
  status: string;
}

class Board extends Component<BoardProps> {
  renderSquare = (i: number) => {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
