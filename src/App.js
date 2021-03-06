import React, { Component } from 'react';
import './App.css';
import {Line} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
// Disable animating charts by default.
defaults.global.animation = false;

class App extends Component {
  constructor() {
    super();
    var board = [];
    var counter = 0;
    for (let i = 0; i < 30; i++) {
      board.push([]);
      for (let j = 0; j < 50; j++) {
        if(Math.random() > 0.1) {
          board[i].push(0);
        }
        else {
          board[i].push(1);
          counter++;
        }
      }
    }
    var dataset = [counter];
    const data = {
      labels: [0],
      datasets: [
        {
          label: "Life Counter",
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: dataset,
          maintainAspectRatio: false
        }
      ]
    };
    this.state = {
      board: board,
      data: data,
      counterArr: [0],
      dataset: [counter],
      stopStart: "Stop"
    };
    this.handleStopStart = this.handleStopStart.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(function () {
      var numNeighbors;
      var board = this.state.board;
      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 50; j++) {
          if (i === 0) {
            if (j === 0) {
              numNeighbors =
              board[i][j+1] +
              board[i+1][j] +
              board[i+1][j+1]
              ;
            }
            else if (j === 49) {
              numNeighbors =
                board[i][j-1] +
                board[i+1][j-1] +
                board[i+1][j]
              ;
            }
            else {
              numNeighbors =
                board[i][j-1] +
                board[i][j+1] +
                board[i+1][j-1] +
                board[i+1][j] +
                board[i+1][j+1]
              ;
            }
          }
          else if (i === 29) {
            if (j === 0) {
              numNeighbors =
                board[i][j+1] +
                board[i-1][j] +
                board[i-1][j+1]
              ;
            }
            else if (j === 49) {
              numNeighbors =
                board[i][j-1] +
                board[i-1][j-1] +
                board[i-1][j]
              ;
            }
            else {
              numNeighbors =
                board[i][j-1] +
                board[i][j+1] +
                board[i-1][j-1] +
                board[i-1][j] +
                board[i-1][j+1]
              ;
            }
          }
          else {
            if (j === 0) {
              numNeighbors =
                board[i-1][j] +
                board[i-1][j+1] +
                board[i][j+1] +
                board[i+1][j] +
                board[i+1][j+1]
              ;
            }
            else if (j === 49) {
              numNeighbors =
                board[i-1][j-1] +
                board[i-1][j] +
                board[i][j-1] +
                board[i+1][j-1] +
                board[i+1][j]
              ;
            }
            else {
              numNeighbors =
                board[i-1][j-1] +
                board[i-1][j] +
                board[i-1][j+1] +
                board[i][j-1] +
                board[i][j+1] +
                board[i+1][j-1] +
                board[i+1][j] +
                board[i+1][j+1]
              ;
            }
          }
          if (board[i][j] === 0) {
            if (numNeighbors === 3) {
              board[i][j] = 1;
            }
          }
          else {
            if (numNeighbors < 2 || numNeighbors > 3) {
              board[i][j] = 0;
            }
          }
        }
      }
      this.setState({board:board});
    }.bind(this), 1000);
  }

  componentDidUpdate() {
    if (this.state.stopStart === "Stop") {
      setTimeout(function () {
        var counterElem = 0;
        var board = this.state.board;
        var dataset = this.state.dataset;
        var data = this.state.data;
        var counterArr = this.state.counterArr;
        var numNeighbors;
        for (let i = 0; i < 30; i++) {
          for (let j = 0; j < 50; j++) {
            if (i === 0) {
              if (j === 0) {
                numNeighbors =
                  board[i][j+1] +
                  board[i+1][j] +
                  board[i+1][j+1]
                ;
              }
              else if (j === 49) {
                numNeighbors =
                  board[i][j-1] +
                  board[i+1][j-1] +
                  board[i+1][j]
                ;
              }
              else {
                numNeighbors =
                  board[i][j-1] +
                  board[i][j+1] +
                  board[i+1][j-1] +
                  board[i+1][j] +
                  board[i+1][j+1]
                ;
              }
            }
            else if (i === 29) {
              if (j === 0) {
                numNeighbors =
                  board[i][j+1] +
                  board[i-1][j] +
                  board[i-1][j+1]
                ;
              }
              else if (j === 49) {
                numNeighbors =
                  board[i][j-1] +
                  board[i-1][j-1] +
                  board[i-1][j]
                ;
              }
              else {
                numNeighbors =
                  board[i][j-1] +
                  board[i][j+1] +
                  board[i-1][j-1] +
                  board[i-1][j] +
                  board[i-1][j+1]
                ;
              }
            }
            else {
              if (j === 0) {
                numNeighbors =
                  board[i-1][j] +
                  board[i-1][j+1] +
                  board[i][j+1] +
                  board[i+1][j] +
                  board[i+1][j+1]
                ;
              }
              else if (j === 49) {
                numNeighbors =
                  board[i-1][j-1] +
                  board[i-1][j] +
                  board[i][j-1] +
                  board[i+1][j-1] +
                  board[i+1][j]
                ;
              }
              else {
                numNeighbors =
                  board[i-1][j-1] +
                  board[i-1][j] +
                  board[i-1][j+1] +
                  board[i][j-1] +
                  board[i][j+1] +
                  board[i+1][j-1] +
                  board[i+1][j] +
                  board[i+1][j+1]
                ;
              }
            }
            if (board[i][j] === 0) {
              if (numNeighbors === 3) {
                board[i][j] = 1;
              }
            }
            else {
              counterElem++;
              if (numNeighbors < 2 || numNeighbors > 3) {
                board[i][j] = 0;
              }
            }
          }
        }
        dataset.push(counterElem);
        counterArr.push(counterArr[counterArr.length-1]+1);
        if (dataset.length > 50) {
          dataset.shift();
          counterArr.shift();
        }
        data["labels"] = counterArr;
        data["datasets"][0]["data"] = dataset;
        this.setState({counterArr:counterArr, dataset:dataset, board:board, data:data});
      }.bind(this), 250);
    }
  }

  handleStopStart() {
    if (this.state.stopStart === "Stop") {
      this.setState({stopStart: "Start"});
    }
    else {
      this.setState({stopStart: "Stop"});
    }
  }

  handleClear() {
    var board = [];
    for (let i = 0; i < 30; i++) {
      board.push([]);
      for (let j = 0; j < 50; j++) {
        board[i].push(0);
      }
    }
    var dataset = [];
    const data = {
      labels: [0],
      datasets: [
        {
          label: "Life Counter",
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: dataset,
          maintainAspectRatio: false
        }
      ]
    };
    this.setState({board:board, dataset:dataset, data:data, counterArr:[0], stopStart:"Start"});
  }

  handleClick(i,j) {
    var board = this.state.board;
    board[i][j] = 1;
    this.setState({board:board});
  }

  render() {
    var finalJSX = [];
    for (let i = 0; i < 30; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        if(this.state.board[i][j] === 1) {
          row.push(<span className="red"></span>);
        }
        else {
          row.push(<span onClick={() => this.handleClick(i,j)} className="black"></span>);
        }
      }
      finalJSX.push(<div>{row}</div>);
    }
    return (
      <div>
        <div id="main">
          {finalJSX}
        </div>
        <button onClick={this.handleStopStart}>{this.state.stopStart}</button>
        <button onClick={this.handleClear}>Clear</button>
        <Line
        	data={this.state.data}
          width={60}
        	height={25}
          redraw
        />
      </div>
    );
  }
}

export default App;
