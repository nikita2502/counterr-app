import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter : 0
     };
  }
  handleIncrement = (e) =>{
    this.setState({counter: this.state.counter + 1})
  };
  handleDecrement = (e) =>{
    this.setState({counter: this.state.counter - 1})
  }
  handleReset = (e) =>{
    this.setState({counter: 0})
  }

  render() {
    return (
      <div>
      <h3> {this.state.counter}</h3>
        <button className="button" onClick={this.handleIncrement} > + </button>
        <button className="button" onClick={this.handleReset} > Reset </button>
        <button className="button" onClick={this.handleDecrement} > - </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
