// *********************************
// for each moves an unique set of moves is create as an array
// this array is passed to check whether it matches with the winner
// pattern.
// renders board and a list of past moves
// **********************************

/****************************************/
// importing core components
import React, { Component } from "react";

// importing components
import Board from "../Board/Board";
import Modal from "../Modal/Modal";

interface GameProps {}

class Game extends Component<GameProps> {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    stepNumber: 0
  };

  handleClick = (i: number) => {
    console.log("click handler. i = " + i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

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

  calculateWinner = (squares: string[]) => {
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

  jumpTo = (step: number) => {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 ? true : false });
  };

  machinePlay = () => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    setTimeout(() => {
      const freeCells: number[] = [];
      squares.filter((element, index) => {
        if (element === null) {
          freeCells.push(index);
        }
        return true;
      });

      let randomNum = Math.trunc(
        Math.random() * (freeCells.length - 1 - 0 + 1) + 0
      );
      console.log("free spots: ", freeCells, " random number: ", randomNum);
      console.log(freeCells[randomNum]);
      this.handleClick(freeCells[randomNum]);
    }, 1000);
  };

  playAgainHandler = () => {
    console.log("playAgainHandler");
    const newHistory = [{ squares: Array(9).fill(null) }];
    this.setState({
      history: newHistory,
      gameOver: false,
      stepNumber: 0,
      xIsNext: true
    });
  };

  componentDidMount() {}
  componentDidUpdate() {
    // machine move
    if (!this.state.xIsNext) {
      this.machinePlay();
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    let gameOverModal = null;

    const gameOverMsg = (
      <p>
        Game Over ! <br /> Winner is {winner}
      </p>
    );

    if (winner) {
      gameOverModal = (
        <Modal content={gameOverMsg}>
          <button type="button" onClick={this.playAgainHandler}>
            Play Again
          </button>
        </Modal>
      );
    }

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
        {/* {winner ? (
          <Modal content={gameOverMsg}>
            <button type="button" onClick={this.playAgainHandler}>
              Play Again
            </button>
          </Modal>
        ) : null} */}
        {gameOverModal}
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
