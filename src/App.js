import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game/Game"

class App extends Component {
  render() {
    return (
      <div>
          <Game />
      </div>

    );
  }
}

export default App;
