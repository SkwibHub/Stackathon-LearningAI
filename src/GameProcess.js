import React, { Component } from 'react';
import RenderBoard from './RenderBoard';

class GameProcess extends Component {
  constructor() {
    super();
    this.state = {
      gameNumber: '',
      cumeWinValue: '',
      cumeVisits: '',
      children: '',
      parent: '',
      loading: true,
      numberOfRuns: '',
      currentRun: 0,
      boardState: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewRun = this.handleNewRun.bind(this);
  }
  ComponentDidMount() {
    // 1. Timeout Delay
    // 2. Create new board state function
    this.setState({
      boardState: ['?', '-', 'X', '-', '-', '-', '-', '-', '-', '-'],
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
    this.setState({
      currentRun: this.state.currentRun + 1
    });
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
        <button>MORE BUTTONS</button>
      </div>
    );
  }
}

export default GameProcess;
