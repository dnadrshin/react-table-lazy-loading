import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Row from './Row';

const elements = [
  {value: "1"},
  {value: "2"},
  {value: "3"},
  {value: "4"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
  {value: "5"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table>
          {elements.map((data, idx) => <Row value={idx} />)}
        </Table>
      </div>
    );
  }
}

export default App;
