import React, { Component } from 'react';
import RenderBoard from './RenderBoard';
import StartGameSimulation from './StartGameSimulation';
import ChartComponent from './ChartComponent';
import { Line } from 'react-chartjs-2';

class GameProcess extends Component {
  constructor() {
    super();
    this.state = {
      gameTree: [],
      loading: true,
      numberOfRuns: '',
      currentRun: 1,
      gamePolicy: 0,
      startingPlayer: 'X', // This needs to switch with 'O' at times. Set as a constant here for now.
      boardState: ['?', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
      evaluationHistory: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewRun = this.handleNewRun.bind(this);
    this.handleAllRuns = this.handleAllRuns.bind(this);
    this.runMethod = this.runMethod.bind(this);
  }
  ComponentDidMount() {
    this.setState({
      loading: false
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    });
    console.log('Number submitted: ', this.state.numberOfRuns);
    console.log('Policy submitted: ', this.state.gamePolicy);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Number submitted: ', this.state.numberOfRuns);
    this.setState({
      numberOfRuns: this.state.numberOfRuns
    });
  }

  runMethod() {
    const [newGameTree, boardState] = StartGameSimulation(
      this.state.gameTree,
      this.state.currentRun,
      this.state.startingPlayer,
      this.state.gamePolicy
    );

    this.state.evaluationHistory.push(newGameTree[0].boardState[0]);

    this.state.currentRun++;
    this.state.gameTree = newGameTree;
    this.state.boardState = newGameTree[0].boardState;

    this.setState({
      currentRun: this.state.currentRun,
      gameTree: this.state.gameTree,
      boardState: this.state.boardState
    });

    console.log('EVALUATION: ', this.state.evaluationHistory);
    console.log('____________________________________');
    return newGameTree;
  }

  handleNewRun(event) {
    event.preventDefault();
    console.log('Run submitted: ', this.state.currentRun);
    console.log('Game Policy: ', this.state.gamePolicy);
    this.runMethod();
  }

  handleAllRuns(event) {
    event.preventDefault();
    console.log('All runs submitted!', this.state.numberOfRuns);
    console.log('Game Policy: ', this.state.gamePolicy);

    for (let i = 0; i < this.state.numberOfRuns; i++) {
      this.runMethod();
    }
  }

  render() {
    const [data, options] = ChartComponent(this.state.evaluationHistory);
    return (
      <div>
        <h1>GAME NUMBER: {this.state.currentRun - 1}</h1>
        <div>
          <RenderBoard
            boardState={{
              boardState: this.state.boardState
            }}
          />
        </div>
        <div>
          <Line data={data} options={options} height={100} width={500} />
        </div>
        <div>
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
            SINGLE GAME RUN
          </button>
          <button
            type="submit"
            onClick={this.handleAllRuns}
            value={this.state.numberOfRuns}
          >
            ALL GAME RUNS
          </button>
        </div>
        <div>
          <label>POLICY:</label>
          <select
            name="gamePolicy"
            type="number"
            onChange={this.handleChange}
            value={this.state.gamePolicy}
          >
            <option value="1">COMPETE</option>
            <option value="0">EXPLORE</option>
          </select>
        </div>
      </div>
    );
  }
}

export default GameProcess;
