import React, { Component } from 'react';
import './App.css';
import HangmanGame from './game/HangmanGame'
import myGame from './fixtures/game'


class App extends Component {

  render() {
    return (
      <div>
        <HangmanGame game = {myGame}/>
      </div>
    )
  }
}

export default App;
