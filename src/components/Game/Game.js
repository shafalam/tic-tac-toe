// *********************************
// for each moves an unique set of moves is create as an array
// this array is passed to check whether it matches with the winner 
// pattern.
// renders board and a list of past moves
// **********************************


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
    console.log("click handler. i = " + i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[i]) {
      return;
    }

    if (this.calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const flipXisNext = !this.state.xIsNext;
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: flipXisNext,
      stepNumber: history.length
    });
  };

  calculateWinner = squares => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  jumpTo = step => {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 ? true : false });
  };


  machinePlay = () => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    setTimeout(() => {
      const freeCells = [];
      squares.filter((element, index) => {
        if (element === null) {
          freeCells.push(index)
        }
        return true;
      })

      let randomNum = Math.trunc(Math.random() * ((freeCells.length - 1) - 0 + 1) + 0);
      console.log("free spots: ", freeCells, " random number: ", randomNum);
      console.log(freeCells[randomNum]);
      this.handleClick(freeCells[randomNum]);
    }, 1000);

  }

  componentDidMount() {
  }
  componentDidUpdate() {
    // machine move
    if (!this.state.xIsNext) {
      this.machinePlay();
    }
  }

  render() {
    console.log("rendering");

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    // past history
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
