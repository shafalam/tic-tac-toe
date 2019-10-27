import React, { Component } from "react"

class Square extends Component {
    

    render(){
        return(
            <div className="square" onClick={()=>{this.props.onClick}}>
            {this.props.value}
            </div>
        );
    }
}

export default Square;