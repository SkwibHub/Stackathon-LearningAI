import React, { Component } from 'react';
import RenderBoard from './RenderBoard';
import runGameSimulation from './RunGameSimulation';

class GameProcess extends Component {
  constructor() {
    super();
    this.state = {
      gameTree: [],
      loading: true,
      numberOfRuns: '',
      currentRun: 0,
      gamePolicy: 0,
      startingPlayer: 'X', // This needs to switch with 'O' at times. Set as a constant here for now.
      boardState: [],
      evaluationHistory: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewRun = this.handleNewRun.bind(this);
    this.handleAllRuns = this.handleAllRuns.bind(this);
  }
  ComponentDidMount() {
    // 1. Timeout Delay
    // 2. Create new board state function
    this.setState({
      boardState: ['?', '_', 'X', '_', '_', '_', '_', '_', '_', '_'],
      loading: false
    });
    // 3. Repeat if limit not hit
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Number submitted: ', this.state.numberOfRuns);
    this.setState({
      numberOfRuns: this.state.numberOfRuns
    });
  }

  handleNewRun(event) {
    event.preventDefault();
    console.log('Run submitted: ', this.state.currentRun);

    const [latestEvaluation, newGameTree] = runGameSimulation(
      this.state.gameTree,
      this.state.currentRun,
      this.state.startingPlayer,
      this.state.gamePolicy
    );

    console.log('LATEST EVALUATION: ', latestEvaluation);
    console.log('EVALUATION HISTORY ', this.state.evaluationHistory);
    console.log('LATEST GAME TREE ', newGameTree);

    const newEvaluationHistory = this.state.evaluationHistory.concat(
      latestEvaluation
    );

    this.setState({
      currentRun: this.state.currentRun + 1,
      gameTree: [newGameTree],
      evaluationHistory: newEvaluationHistory
    });

    // Run through another pass of a game simulation
  }

  handleAllRuns(event) {
    event.preventDefault();
    console.log('All runs submitted!');
    this.setState({
      currentRun: this.state.currentRun + 1
    });

    // Run through ALL passes of a game simulation
  }

  render() {
    console.log('GameProcess State: ', this.state);
    console.log('Loading: ', this.state.loading);

    return (
      <div>
        <h1>
          GAME NUMBER: {this.state.currentRun} OF {this.state.numberOfRuns}
        </h1>
        <div>
          <RenderBoard
            boardState={{
              boardState: ['?', '-', 'X', '-', '-', '-', '-', '-', '-', '-']
            }}
          />
        </div>
        <div>
          <label>NUMBER OF RUNS:</label>
          <input
            name="numberOfRuns"
            type="text"
            onChange={this.handleChange}
            value={this.state.numberOfRuns}
          />
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          SUBMIT GAME RUN NUMBER
        </button>

        <button
          type="submit"
          onClick={this.handleNewRun}
          value={this.state.currentRun}
        >
          ANOTHER GAME RUN
        </button>
        <button
          type="submit"
          onClick={this.handleAllRunsy}
          value={this.state.currentRun}
        >
          ALL GAME RUNS
        </button>
        <button>MORE BUTTONS</button>
      </div>
    );
  }
}

export default GameProcess;
