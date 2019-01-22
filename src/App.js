import React, { Component } from 'react';
import GameProcess from './GameProcess';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First Machine Learning Experiment</h1>
        <p>
          {' '}
          Attempting machine learning with Tic-Tac-Toe. At the start, the
          computer has no experience with Tic-Tac-Toe. The EXPLORE policy forces
          it to explore moves it hasn't tried before or has tried the least. The
          COMPETE policy has it play the best moves that it knows from
          experience. After a while, the computer should only get draws, as the
          best moves by both players lead to drawn games.
        </p>
        <p />
        <GameProcess />
      </div>
    );
  }
}

export default App;
