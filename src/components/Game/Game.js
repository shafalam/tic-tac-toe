// *******************
// Functions:
// for each move an unique set of moves is created and added to the history
// array. this set of pattern is checked whether it matches with the existing 
// winner pattern. if it doesn't match, updates the next player status and 
// step-number
// render board and history of the past moves
// ***********************

import React, { Component } from "react";
import Board from "../Board/Board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0
    };
  }



  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // checks whether game is finished or not
    if (this.calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const flipXisNext = !this.state.xIsNext;
    const stepNumberNext = this.state.stepNumber + 1;

    // updates the history of the gameplay
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: flipXisNext,
      stepNumber: stepNumberNext
    });
  };

  calculateWinner = squares => {
    console.log("New winner calculation");
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [a, b, c] = winnerPattern[i];
      console.log(squares[a] + " " + squares[b] + " " + squares[c]);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("Winner found");
        return squares[a];
      }
    }
    return null;
  };

  jumpTo = step => {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 ? true : false });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    // renders past history
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move # " + move : "Go to game start";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            status={status}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
