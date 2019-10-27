import React, { Component } from "react"
import Square from "../Square/Square"

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    
    handleClick = (i) => {
        const squares = this.state.squares.slice();
        squares[i] = "X";
        this.setState({squares: squares});
    }

    renderSquares(i){
        return <Square value ={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}/>;
    }
    
    render(){
        return(
            <div>
                <div className="board-row">
                {this.renderSquares(0)}
                {this.renderSquares(1)}
                {this.renderSquares(2)}
                </div>
                <div className="board-row">
                {this.renderSquares(3)}
                {this.renderSquares(4)}
                {this.renderSquares(5)}
                </div>
                <div className="board-row">
                {this.renderSquares(6)}
                {this.renderSquares(7)}
                {this.renderSquares(8)}
                </div>

            </div>
        );
    }
}

export default Board;