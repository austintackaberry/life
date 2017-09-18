import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var finalJSX = [];
    for (let i = 0; i < 30; i++) {
      let row = [];
      for (let j = 0; j < 50; j++) {
        row.push(<span className="not-new-row"></span>);
      }
      finalJSX.push(<div>{row}</div>);
    }
    return (
      <div id="main">
        {finalJSX}
      </div>
    );
  }
}

export default App;
