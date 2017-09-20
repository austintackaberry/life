import React, { Component } from 'react';
import './App.css';

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
    this.state = {
      board: board,
      counterStr: counter + ", "
    };
  }

  componentDidMount() {
    setTimeout(function () {
      var counterStr = this.state.counterStr;
      var counter = 0;
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
            counter++;
            if (numNeighbors < 2 || numNeighbors > 3) {
              board[i][j] = 0;
            }
          }
        }
      }
      counterStr += counter + ", ";
      this.setState({board:board,counterStr: counterStr});
    }.bind(this), 1000);
  }

  componentDidUpdate() {
    setTimeout(function () {
      var counter = 0;
      var board = this.state.board;
      var counterStr = this.state.counterStr;
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
            counter++;
            if (numNeighbors < 2 || numNeighbors > 3) {
              board[i][j] = 0;
            }
          }
        }
      }
      counterStr += counter + ", ";
      this.setState({board:board, counterStr:counterStr});
    }.bind(this), 1000);
  }

  render() {
    var finalJSX = [];
    var counterStr = this.state.counterStr;
    for (let i = 0; i < 30; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        if(this.state.board[i][j] === 1) {
          row.push(<span className="red"></span>);
        }
        else {
          row.push(<span className="black"></span>);
        }
      }
      finalJSX.push(<div>{row}</div>);
    }
    finalJSX.push(<p>{counterStr}</p>);

    return (
      <div id="main">
        {finalJSX}
      </div>
    );
  }
}

export default App;
